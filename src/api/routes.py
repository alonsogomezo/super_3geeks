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


@api.route('/login', methods=['POST'])
def handle_Login():

    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user_query = User.query.filter_by(email=email, password=password).first()
    #print(email_query.name)
    
    if not user_query:
        return jsonify({"msg": "usuario o password incorrecto"}), 404
    
    perfil_query = Perfil.query.filter_by(id_usuario = user_query.id).first()

    access_token = create_access_token(identity=user_query.email)
    
    response_body = {
        "message": "bienvenido de regreso",
        "isAdmin": user_query.is_admin,
        "accessToken": access_token
    }

    return jsonify(response_body), 200



