# import sereliazers from the REST framework
from rest_framework import serializers
  
# import the todo data model
from .models import Productos
  
# create a sereliazer class
class ProductosSerializer(serializers.ModelSerializer):
  
    # create a meta class
    class Meta:
        model = Productos
        fields = ('id', 'nombre','descripcion','categoria','precio','img')