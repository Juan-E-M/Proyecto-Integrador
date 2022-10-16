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
        fields = ('id','username','first_name','last_name','password','address')