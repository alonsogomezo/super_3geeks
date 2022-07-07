from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_admin = db.Column(db.Boolean(False), unique=False, nullable=False)

class Perfil(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_usuario = db.Column(db.Integer, db.ForeignKey("User.id"))
    foto_perfil = db.Column(db.String(2000))
    nombre = db.Column(db.String(50))
    apellido = db.Column(db.String(50))
    direccion = db.Column(db.String(500))
    telefono = db.Column(db.String(80))
    latitud = db.Column(db.Float)
    longitud = db.Column(db.Float)

class Producto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_usuario = db.Column(db.Integer, db.ForeignKey("User.id"))
    categoria = db.Column(db.Integer, db.ForeignKey("Categorias.id"))
    nombre = db.Column(db.String(20))
    precio = db.Column(db.Numeric(precision=10, scale=2))
    descripcion = db.Column(db.String(700))

class Categorias(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(20))

class OrdenItems(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_Producto = db.Column(db.Integer, db.ForeignKey("Producto.id"))
    precio = db.Column(db.Numeric(precision=10, scale=2))
    cantidad = db.Column(db.Integer)
    subtotal = db.Column(db.Numeric(precision=10, scale=2))

class OrderStatus(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    estado = db.Column(db.String(50))

class Carrito(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_Producto = db.Column(db.Integer, db.ForeignKey("Producto.id"))
    id_Usuario = db.Column(db.Integer, db.ForeignKey("User.id"))

class Orden(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    total = db.Column(db.Numeric(precision=10, scale=2))
    total_cantidad = db.Column(db.Integer)
    id_usuario = db.Column(db.Integer, db.ForeignKey("User.id"))
    id_order_status = db.Column(db.Integer, db.ForeignKey("OrderStatus.id"))

class Pago(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_usuario = db.Column(db.Integer, db.ForeignKey("User.id"))
    id_orden = db.Column(db.Integer, db.ForeignKey("Orden.id"))
    monto_total = db.Column(db.Numeric(precision=10, scale=2))