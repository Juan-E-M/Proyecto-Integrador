# import sereliazers from the REST framework
from rest_framework import serializers
  
# import the todo data model
from .models import *
  
# create a sereliazer class
class ProductosSerializer(serializers.ModelSerializer):
  
    # create a meta class
    class Meta:
        model = Productos
        fields = ('id', 'nombre','descripcion','categoria','precio','img')

class UsuariosSerializer(serializers.ModelSerializer):
    # create a meta class
    class Meta:
        model = Usuarios
        fields = ('id','username','first_name','last_name','password','address','perfil_image','email')

class ComprasSerializer(serializers.ModelSerializer):
    # create a meta class
    class Meta:
        model = Compras
        fields = ('id', 'user_id', 'username','descripcion_compra',
                  'distrito','provincia','departamento','first_name',
                  'total', 'last_name', 'send_address','send_email',
                  'full_name_card','card_number','exp_date','cod')