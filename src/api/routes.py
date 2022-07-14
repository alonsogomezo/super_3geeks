"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Perfil, Producto, Categorias, OrdenItems, OrderStatus, Carrito, Orden, Pago
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
        "message": "bienvenido de regreso",
        "isAdmin": user_query.is_admin,
        "accessToken": access_token,
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
    
    id_perfil = request.json.get("id_perfil", None)

    perfil_query = Perfil.query.filter_by(id = id_perfil).first()
    
    response_body ={
        "nombre": perfil_query.nombre, 
        "apellido": perfil_query.apellido,
        "telefono": perfil_query.telefono,
        "direccion": perfil_query.direccion,
        "foto de perfil": perfil_query.foto_perfil
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
        lista_carrito.append({"nombre":producto.producto, 
        "cantidad": carrito.cantidad,
        "precio": producto.precio
        })
    
    return jsonify(lista_carrito), 200

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

    producto_new = Producto(producto=producto, id_usuario=usuario.id, 
    categoria = categoria, precio = precio, descripcion = descripcion)
    db.session.add(producto_new)
    db.session.commit()

    response_body = {
        "msg": "producto añadido  correctamente"
    }
    return jsonify(response_body), 200

#api para ver los productos
@api.route("/producto", methods=["POST"])
@jwt_required()
def handle_viewProducto():
    
    email_user = get_jwt_identity()
    usuario = User.query.filter_by(email=email_user).first()
    if not usuario:
        return jsonify({"msg": "Usuario no encontrado"}), 404

    

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
            "precio": producto.precio,
            "id": producto.id
        })
    
    return jsonify(lista_pxc), 200
