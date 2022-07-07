from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Interger, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_admin = db.Column(db.Boolean(False), unique=False, nullable=False)

class Perfil(db.Model):
    id = db.Column(db.Interger, primary_key=True)
    id_Usuario = db.Column(db.Interger, ForeignKey("User.id"))
    foto_perfil = db.Column(db.String(2000))
    nombre = db.Column(db.String(50))
    apellido = db.Column(String(50))
    direccion = db.Column(db.String(500))
    telefono = db.Column(db.String(80))

class Producto(db.Model):
    id = db.Column(db.Interger, primary_key=True)
    id_usuario = db.Column(db.Interger, ForeignKey("User.id"))
    categoria = db.Column(db.Interger, ForeignKey("Categorias.id"))
    Nombre = db.Column(db.String(20))
    Precio = db.Column(db.Float)
    Descripcion = db.Column(db.String(700))

class Categorias(db.Model):
    id = db.Column(db.Interger)
    Nombre = db.Column(db.String(20))

class Orden_Items(db.Model):
    id = db.Column(db.Interger, primary_key=True)
    id_Producto = db.Column(db.Interger, ForeignKey("Producto.id"))
    Precio = db.Column(db.Float)
    Cantidad = db.Column(db.Interger)
    Subtotal = db.Column(db.Float)

class Order_Status(db.Model):
    id = db.Column(db.Interger)
    estado = db.Column(db.String(50))

class Carrito(db.Model):
    id = db.Column(db.Interger)
    id_Producto = db.Column(db.Interger, ForeignKey("Producto.id"))
    id_Usuario = db.Column(db.Interger, ForeignKey("User.id"))

class Orden(db.Model):
    id_orden = db.Column(db.Interger)
    Total = db.Column(db.Float)
    Total_Cantidad = db.Column(db.Interger)
    id_Usuario = db.Column(db.Interger, ForeignKey("User.id"))
    id_OS = db.Column(db.Interger, ForeignKey("Order_Status.id"))

class Pago(db.Model):
    id = db.Column(db.Interger)
    id_Usuario = db.Column(db.Interger, ForeignKey("User.id"))
    id_OS = db.Column(db.Interger, ForeignKey("Order_Status.id"))
    monto_Total = db.Column(db.Float)