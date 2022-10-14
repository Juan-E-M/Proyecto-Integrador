from django.shortcuts import render
  
# import view sets from the REST framework
from rest_framework import viewsets
  
# import the TodoSerializer from the serializer file
from .serializers import ProductosSerializer
  
# import the Todo model from the models file
from .models import Productos
  
# create a class for the Todo model viewsets
class ProductosView(viewsets.ModelViewSet):
  
    # create a sereializer class and 
    # assign it to the TodoSerializer class
    serializer_class = ProductosSerializer
  
    # define a variable and populate it 
    # with the Todo list objects
    queryset = Productos.objects.all()