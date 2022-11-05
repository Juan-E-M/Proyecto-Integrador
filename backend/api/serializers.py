# import sereliazers from the REST framework
from rest_framework import serializers
  
# import the todo data model
from .models import *
  
class CategoriasSerializer(serializers.ModelSerializer):
    # create a meta class
    class Meta:
        model = Categorias
        fields = ('id', 'nombre','pub_date')
        
# create a sereliazer class
class ProductosSerializer(serializers.ModelSerializer):
    # create a meta class
    class Meta:
        model = Productos
        fields = ('id', 'nombre','descripcion','categoria','precio','img1', 'img2','img3','pub_date')

class UsuariosSerializer(serializers.ModelSerializer):
    # create a meta class
    class Meta:
        model = Usuarios
        fields = ('id','username','first_name','last_name','password','address','perfil_image','email')