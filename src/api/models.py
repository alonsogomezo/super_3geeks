import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
from eralchemy import render_er

db = SQLAlchemy()

class User(Base):
    __tablename__ = "user"
    id = Column(Integer, primary_key=True)
    email = Column(String(120), unique=True, nullable=False)
    password = Column(String(80), unique=False, nullable=False)
    is_admin = Column(Boolean(False), unique=False, nullable=False)

class Perfil(Base):
    __tablename__="perfil"
    id_Usuario = Column(Integer, ForeignKey("user.id"))
    foto_perfil = Column(String(2000))
    nombre = Column(String(10))
    apellido = Column(string(10))
    direccion = Column(String(50))
    telefono = Column(Integer)

class Producto(Base):
    __tablename__="producto"
    id_producto = Column(Integer, primary_key=True)
    id_usuario = Column(Interger, ForeignKey("user.id"))
    categoria = Column(Integer, ForeignKey("categorias.id_categoria"))
    SKU = Column(String)
    Nomnbre = Column(String)
    Precio = Column(Float)
    Descripcion = Column(String)

class categoria(Base):
    __tablename__="categorias"
    id_categoria = Column(Integer)
    Nombre = Column(String)

class Orden_Items(Base):
    __tablename__="OI"
    id_Producto = Column(Integer, ForeignKey("producto.id_producto"))
    Precio = Column(Float)
    Cantidad = Column(Integer)
    Subtotal = Column(Float)

class Order_Status(Base):
    __tablename__="OS"
    id_OS = Column(Integer)
    estado = Column(String)

class Carrito(Base):
    __tablename__="Carrito"
    id_Carrito = Column(Integer)
    id_Producto = Column(Integer, ForeignKey("producto.id_producto"))
    id_Usuario = Column(Integer, ForeignKey("user.id"))

class Orden(Base):
    __tablename__="Orden"
    id_orden = Column(Integer)
    Total = Column(Float)
    Total_Cantidad = Column(Integer)
    id_Usuario = Column(Integer, ForeignKey("user.id"))
    id_OS = Column(Integer, ForeignKey("OS.id_OS"))

class Pago(Base):
    __tablename__="Pago"
    id_Pago = Column(Integer)
    id_Usuario = Column(Integer, ForeignKey("user.id"))
    id_OS = Column(Integer, ForeignKey("OS.id_OS"))
    monto_Total = Column(Float)