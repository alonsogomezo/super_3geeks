from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class User(db.Model):
    __tablename__="t_user"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_admin = db.Column(db.Boolean(), unique=False, default= False)

class Perfil(db.Model):
    __tablename__="t_perfil"
    id = db.Column(db.Integer, primary_key=True)
    id_usuario = db.Column(db.Integer, db.ForeignKey("t_user.id"))
    id_signup = db.Column(db.Integer, db.ForeignKey("t_signup.id"))
    foto_perfil = db.Column(db.String(2000))
    nombre = db.Column(db.String(50))
    apellido = db.Column(db.String(50))
    direccion = db.Column(db.String(500))
    telefono = db.Column(db.String(80))
    latitud = db.Column(db.Float)
    longitud = db.Column(db.Float)

class Producto(db.Model):
    __tablename__="t_producto"
    id = db.Column(db.Integer, primary_key=True)
    id_usuario = db.Column(db.Integer, db.ForeignKey("t_user.id"))
    foto_producto = db.Column(db.String(2000))
    categoria = db.Column(db.Integer, db.ForeignKey("t_categorias.id"))
    producto = db.Column(db.String(20))
    precio_original = db.Column(db.Numeric(precision=10, scale=2))
    precio = db.Column(db.Numeric(precision=10, scale=2))
    descripcion = db.Column(db.String(700))
    marca = db.column(db.string(80))


class Categorias(db.Model):
    __tablename__="t_categorias"
    id = db.Column(db.Integer, primary_key=True)
    categoria = db.Column(db.String(20))

class OrdenItems(db.Model):
    __tablename__="t_oi"
    id = db.Column(db.Integer, primary_key=True)
    id_Producto = db.Column(db.Integer, db.ForeignKey("t_producto.id"))
    precio = db.Column(db.Numeric(precision=10, scale=2))
    cantidad = db.Column(db.Integer)
    subtotal = db.Column(db.Numeric(precision=10, scale=2))

class OrderStatus(db.Model):
    __tablename__="t_ost"
    id = db.Column(db.Integer, primary_key=True)
    estado = db.Column(db.String(50))

class Carrito(db.Model):
    __tablename__="t_carrito"
    id = db.Column(db.Integer, primary_key=True)
    id_producto = db.Column(db.Integer, db.ForeignKey("t_producto.id"))
    id_usuario = db.Column(db.Integer, db.ForeignKey("t_user.id"))
    cantidad = db.Column(db.Integer)

class Orden(db.Model):
    __tablename__="t_orden"
    id = db.Column(db.Integer, primary_key=True)
    total = db.Column(db.Numeric(precision=10, scale=2))
    total_cantidad = db.Column(db.Integer)
    id_usuario = db.Column(db.Integer, db.ForeignKey("t_user.id"))
    id_order_status = db.Column(db.Integer, db.ForeignKey("t_ost.id"))

class Pago(db.Model):
    __tablename__="t_pago"
    id = db.Column(db.Integer, primary_key=True)
    id_usuario = db.Column(db.Integer, db.ForeignKey("t_user.id"))
    id_orden = db.Column(db.Integer, db.ForeignKey("t_orden.id"))
    monto_total = db.Column(db.Numeric(precision=10, scale=2))

class Signup(db.Model):
    __tablename__="t_signup"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    foto_perfil = db.Column(db.String(2000))
    nombre = db.Column(db.String(50))
    apellido = db.Column(db.String(50))
    direccion = db.Column(db.String(500))
    telefono = db.Column(db.String(80))
    latitud = db.Column(db.Float)
    longitud = db.Column(db.Float)

class Promociones(db.Model):
    __tablename__="t_promociones"
    id = db.Column(db.Integer, primary_key=True)
    id_usuario = db.Column(db.Integer, db.ForeignKey("t_user.id"))
    id_producto = db.Column(db.Integer, db.ForeignKey("t_producto.id"))
    promociones = db.Column(db.Float)

class TarjetaDeCredito(db.Model):
    __tablename__="t_tarjeta_de_credito"
    id = db.Column(db.Integer, primary_key=True)
    id_usuario = db.Column(db.Integer, db.ForeignKey("t_user.id"))
    nombre = db.Column(db.String(20))
    apellido = db.Column(db.String(20))
    numero = db.Column(db.Integer)
    fecha_v = db.Column(db.String(8))
    cvv = db.Column(db.Integer)
    tipo = db.Column(db.String(7))