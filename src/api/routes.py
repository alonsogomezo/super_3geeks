"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Perfil, Producto, Categorias, OrdenItems, OrderStatus, Carrito, Orden, Pago, TarjetaDeCredito
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required



api = Blueprint('api', __name__)

#api del login
@api.route('/login', methods=['POST'])
def handle_Login():

    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user_query = User.query.filter_by(email=email, password=password).first()
    
    if not user_query:
        return jsonify({"msg": "usuario o password incorrecto"}), 404
    
    perfil_query = Perfil.query.filter_by(id_usuario = user_query.id).first()

    access_token = create_access_token(identity=user_query.email)
    print(perfil_query)
    response_body = {
        "message": "bienvenido de regreso" + " " + perfil_query.nombre,
        "isAdmin": user_query.is_admin,
        "accessToken": access_token,
        "id": user_query.id,
        "nombre": perfil_query.nombre,
        "apellido": perfil_query.apellido,
        "foto": perfil_query.foto_perfil
    }

    return jsonify(response_body), 200

#api del signup
@api.route('/signup', methods=['POST'])
def handle_Signup():
    
    email= request.json.get("email", None)
    password = request.json.get("password", None)
    nombre = request.json.get("nombre", None)
    apellido = request.json.get("apellido", None)
    direccion = request.json.get("direccion", None)
    telefono = request.json.get("telefono", None)
    foto_url = request.json.get("foto_url", None)

    if not email or not password or not nombre or not direccion or not telefono:
        return jsonify({"msg": "Campos incompletos"}), 404

    user_new = User(email=email, password=password)
    db.session.add(user_new)
    db.session.commit()
    db.session.refresh(user_new)

    perfil_new = Perfil(id_usuario=user_new.id, nombre=nombre, apellido=apellido, 
    direccion=direccion, telefono=telefono, foto_perfil=foto_url)
    db.session.add(perfil_new)
    db.session.commit()
    
    access_token = create_access_token(identity=user_new.email)
    response_body = {
        "msg": "usuario creado correctamente" 
    }

    return jsonify(response_body), 200

#api de usuario
@api.route("/usuario", methods=["GET"])
@jwt_required()
def handle_Usuario():

    email_user = get_jwt_identity()
    usuario = User.query.filter_by(email=email_user).first()
    if not usuario:
        return jsonify({"msg": "Usuario no encontrado"}), 404
    
    #id_perfil = request.json.get("id_perfil", None)

    perfil_query = Perfil.query.filter_by(id_usuario = usuario.id).first()
    tarjeta_query = TarjetaDeCredito.query.filter_by(id_usuario=usuario.id).first()

    response_body ={
        "nombre": perfil_query.nombre, 
        "email": email_user,
        "apellido": perfil_query.apellido,
        "telefono": perfil_query.telefono,
        "direccion": perfil_query.direccion,
        "foto de perfil": perfil_query.foto_perfil,
        "tarjeta": tarjeta_query.id
    }

    return jsonify(response_body), 200

#api para agregar el carrito
@api.route("/carrito", methods=["POST"])
@jwt_required()
def handle_Carrito():

    email_user = get_jwt_identity()
    usuario = User.query.filter_by(email=email_user).first()
    if not usuario:
        return jsonify({"msg": "Usuario no encontrado"}), 404

    id_producto = request.json.get("id_producto", None)
    cantidad = request.json.get("cantidad", None)

    carrito_new = Carrito(id_producto=id_producto, id_usuario=usuario.id, 
    cantidad = cantidad)
    db.session.add(carrito_new)
    db.session.commit()

    product_query = Producto.query.filter_by(id = id_producto).first()

    response_body = {
        "producto": product_query.producto,
        "precio": product_query.precio,
        
    }

    return jsonify(response_body), 200

#api para ver que hay en el carrito
@api.route("/carrito", methods=["GET"])
@jwt_required()
def handle_get_carrito():

    email_user = get_jwt_identity()
    usuario = User.query.filter_by(email=email_user).first()
    if not usuario:
        return jsonify({"msg": "Usuario no encontrado"}), 404
    
    carrito_query = Carrito.query.filter_by(id_usuario=usuario.id)
    lista_carrito = []
    for carrito in carrito_query:
        producto = Producto.query.get(carrito.id_producto)
        lista_carrito.append({
        "foto": producto.foto_producto,
        "nombre":producto.producto, 
        "cantidad": carrito.cantidad,
        "precio": producto.precio,
        "id": carrito.id
        })
    
    return jsonify(lista_carrito), 200

#api para borrar el carrito
@api.route("/carrito/<int:id_carrito>", methods=["DELETE"])
@jwt_required()
def handle_deleteCarrito(id_carrito):

    email_user = get_jwt_identity()
    usuario = User.query.filter_by(email=email_user).first()
    if not usuario:
        return jsonify({"msg": "Usuario no encontrado"}), 404

    carrito_query = Carrito.query.filter_by(id = id_carrito, id_usuario = usuario.id).first()
    db.session.delete(carrito_query)
    db.session.commit()

    return jsonify({"msg":"carrito borrado"}), 200


#api del producto    
@api.route("/producto", methods=["POST"])
@jwt_required()
def handle_addProducto():
    
    email_user = get_jwt_identity()
    usuario = User.query.filter_by(email=email_user).first()
    if not usuario:
        return jsonify({"msg": "Usuario no encontrado"}), 404

    if not usuario.is_admin:
        return jsonify({"msg": "usuario no autorizado"}), 403 

    producto = request.json.get("producto", None)
    descripcion = request.json.get("descripcion", None)
    categoria = request.json.get("categoria", None)
    precio = request.json.get("precio", None)
    marca= request.json.get("marca", None)

    producto_new = Producto(producto=producto, id_usuario=usuario.id, 
    categoria=categoria, precio=precio, descripcion=descripcion, marca=marca)
    db.session.add(producto_new)
    db.session.commit()

    response_body = {
        "msg": "producto añadido  correctamente"
    }
    return jsonify(response_body), 200

#api para ver los productos
@api.route("/productos", methods=["GET"])
def handle_viewProductos():
    
    producto_query = Producto.query.all()
    lista_producto = []
    for producto in producto_query:
        lista_producto.append({
            "foto": producto.foto_producto,
            "producto": producto.producto,
            "categoria": producto.categoria,
            "descripcion": producto.descripcion,
            "marca": producto.marca,
            "precio": producto.precio,

            "id": producto.id
        })
        
    
    return jsonify(lista_producto), 200
#api para ver un producto
@api.route("/product", methods=["POST"])
def handle_ProductoxId():
    id_producto = request.json.get("id_producto", None)
    producto_query = Producto.query.filter_by(id = id_producto).first()
    response_body = {
            "foto": producto_query.foto_producto,
            "producto": producto_query.producto,
            "categoria": producto_query.categoria,
            "descripcion": producto_query.descripcion,
            "marca": producto_query.marca,
            "precio": producto_query.precio,

            "id": producto_query.id
        }
        
    
    return jsonify(response_body), 200

#api para crear categorias
@api.route("/categorias", methods=["POST"])
@jwt_required()
def handle_addCategoria():
    
    email_user = get_jwt_identity()
    usuario = User.query.filter_by(email=email_user).first()
    if not usuario:
        return jsonify({"msg": "Usuario no encontrado"}), 404

    if not usuario.is_admin:
        return jsonify({"msg": "usuario no autorizado"}), 403 
    
    categoria = request.json.get("categoria", None)

    categoria_new = Categorias(categoria=categoria)
    db.session.add(categoria_new)
    db.session.commit()

    response_body = {
        "msg": "Categoria agregada"
    }
    return jsonify(response_body), 200

#api para ver las categorias
@api.route("/categorias", methods=["GET"])
@jwt_required()
def handle_viewCategoria():
    
    email_user = get_jwt_identity()
    usuario = User.query.filter_by(email=email_user).first()
    if not usuario:
        return jsonify({"msg": "Usuario no encontrado"}), 404
    
    categorias_query = Categorias.query.all()
    lista_categorias = []
    for categorias in categorias_query:
        
        lista_categorias.append({
            "categoria": categorias.categoria,
            "id": categorias.id
        })
        
    return jsonify(lista_categorias), 200

#api para ver el listado de productos por categoria
@api.route("/producto/categorias", methods = ["GET"])
@jwt_required()
def handle_vCategoriasxProducto():
    
    email_user = get_jwt_identity()
    usuario = User.query.filter_by(email=email_user).first()
    if not usuario:
        return jsonify({"msg": "Usuario no encontrado"}), 404

    q = request.args.get('q')
    categoria_id = request.args.get("categoria_id")
    if q and not categoria_id:
        busqueda = "%{}%".format(q)
        productos_query = Producto.query.filter(Producto.producto.like(busqueda)).all()
    
    if categoria_id and not q:
        productos_query = Producto.query.filter_by(categoria = categoria_id)

    if categoria_id and q:
        productos_query = Producto.query.filter_by(producto = q, categoria = categoria_id)

    if not categoria_id and not q:
        productos_query = Producto.query.all()
        

    lista_pxc = []
    for producto in productos_query:
        
        lista_pxc.append({
            "producto": producto.producto,
            "categoria": producto.categoria,
            "descripcion": producto.descripcion,
            "marca": producto.marca,
            "precio": producto.precio,
            "id": producto.id
        })
    
    return jsonify(lista_pxc), 200

#api para subir la tarjeta de credito
@api.route("/tarjeta", methods=["POST"])
@jwt_required()
def handle_addTarjeta():
    
    email_user = get_jwt_identity()
    usuario = User.query.filter_by(email=email_user).first()
    if not usuario:
        return jsonify({"msg": "Usuario no encontrado"}), 404

    nombre = request.json.get("nombre", None)
    apellido = request.json.get("apellido", None)
    fecha_v = request.json.get("fecha_v", None)
    cvv = request.json.get("cvv", None)
    tipo = request.json.get("tipo", None)
    numero = request.json.get("numero", None)

    tarjeta_new = TarjetaDeCredito(id_usuario=usuario.id, nombre=nombre, apellido=apellido, 
    fecha_v=fecha_v, cvv=cvv, tipo=tipo, numero=numero)
    db.session.add(tarjeta_new)
    db.session.commit()

    response_body = {
        "msg": "Tarjeta agregada"
    }

    return jsonify(response_body), 200

#api para ver la tarjeta de credito
@api.route("/tarjeta", methods=["GET"])
@jwt_required()
def handle_viewTarjeta():
    
    email_user = get_jwt_identity()
    usuario = User.query.filter_by(email=email_user).first()
    if not usuario:
        return jsonify({"msg": "Usuario no encontrado"}), 404

    id_usuario= request.json.get("id_usuario", None)

    tarjeta_query = TarjetaDeCredito.query.filter_by( id_usuario = id_usuario)
    lista_tarjetas = []

    for tarjeta in tarjeta_query:

        lista_tarjetas.append({
                "bombre": tarjeta.nombre,
                "apellido": tarjeta.apellido,
                "numero": tarjeta.numero,
                "fecha_v": tarjeta.fecha_v,
                "cvv": tarjeta.cvv,
                "tipo": tarjeta.tipo,
                "id": tarjeta.id
            })
        
    
    return jsonify(lista_tarjetas), 200

#api para el pago
@api.route("/pago", methods=["POST"])
@jwt_required()
def handle_pago():
    
    email_user = get_jwt_identity()
    usuario = User.query.filter_by(email=email_user).first()
    if not usuario:
        return jsonify({"msg": "Usuario no encontrado"}), 404

    id_tarjeta= request.json.get("id_tarjeta", None)
    
    carrito_query = Carrito.query.filter_by(id_usuario = usuario.id)
    new_orden = Orden(total=0, total_cantidad=0, id_usuario=usuario.id, id_order_status = 1)
    db.session.add(new_orden)
    db.session.commit()
    db.session.refresh(new_orden)
    total_monto = 0
    tota_cantidad = 0

    for carrito in carrito_query:
        producto = Producto.query.get(carrito.id_producto)
        orden_items = OrdenItems(id_producto=carrito.id_producto, id_orden=new_orden.id, precio=producto.precio,
        cantidad = carrito.cantidad, subtotal= carrito.cantidad * producto.precio)
        db.session.add(orden_items)
        db.session.commit()
        total_monto += producto.precio
        tota_cantidad += carrito.cantidad
        db.session.delete(carrito)
        db.session.commit()

    new_orden.total = total_monto
    new_orden.total_cantidad = tota_cantidad
    db.session.add(new_orden)
    db.session.commit()

        
   
    return jsonify({"msg": "Orden creada",
    "monto_total": new_orden.total,
    "cantidad_total": new_orden.total_cantidad}), 200

@api.route("/llenardatos", methods=["GET"])
def handle_datos():

    order_status = OrderStatus.query.all()
    if not order_status:
    
        new_order_status1 = OrderStatus(id = 1, estado = "Pendiente")
        new_order_status2 = OrderStatus(id = 2, estado = "Pagado")
        db.session.add(new_order_status1)
        db.session.add(new_order_status2)
        db.session.commit()
    
    categorias = Categorias.query.all()
    if not categorias:
        new_categorias1= Categorias(id = 1, categoria="Bebdias")
        new_categorias2= Categorias(id = 2, categoria="Frutas y verduras")
        new_categorias3= Categorias(id = 3, categoria="Alimentos preparados")
        db.session.add(new_categorias1)
        db.session.add(new_categorias2)
        db.session.add(new_categorias3)
        db.session.commit()
        
    
    login_admin = User.query.all()
    if not login_admin:
        new_login_admin= User( email="admin@super3geeks.com", password="123", is_admin=True)
        db.session.add(new_login_admin)
        db.session.commit()

    
    perfil_admin = Perfil.query.all()
    if not perfil_admin:
        new_perfil_admin=Perfil(
        foto_perfil="foto", nombre="Ad", apellido="Min", direccion="420st", 
        telefono="5555", latitud="-1", longitud="2" ) 
        db.session.add(new_perfil_admin)
        db.session.commit() 
    


    lista_productos = Producto.query.all()
    if not lista_productos:
        new_producto1 = Producto( id_usuario= 1, foto_producto= "foto" , categoria= 1, producto="coca-cola" , 
        precio= 1.50 ,  descripcion= "una bomba de azucar", marca= "The Coca-Cola Company")
        new_producto2 = Producto( id_usuario=1 , foto_producto=  "foto", categoria= 2 , producto="Manzana" , 
        precio= 0.50 ,  descripcion= "una manzana roja" , marca= "Manco" )
        new_producto3 = Producto( id_usuario= 1, foto_producto= "foto", categoria= 3 , producto= "Arroz con pollo", 
        precio="5.00" ,  descripcion="un arroz con pollo de color amarillo" , marca="Super3geeks" )
        new_producto4 = Producto( id_usuario= 1 , foto_producto= "foto" , categoria= 1, producto="Agua" , 
        precio= 1.00 ,  descripcion= "Agua mojada" , marca= "Aguascompany")
        new_producto5 = Producto( id_usuario= 1 , foto_producto= "foto" , categoria= 3, producto= "sopa de carne", 
        precio= "6.00",  descripcion="una vaca en una piscina" , marca="Super3geeks")
        db.session.add(new_producto1)
        db.session.add(new_producto2)
        db.session.add(new_producto3)
        db.session.add(new_producto4)
        db.session.add(new_producto5)
        db.session.commit() 

    return jsonify({"msg": "datos completos"})