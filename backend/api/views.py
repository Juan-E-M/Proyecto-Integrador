'''from django.shortcuts import render
  
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
'''
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Productos
from .serializers import ProductosSerializer

class IndexView(APIView):
    
    def get(self,request):
        context = {'mensaje':'servidor activo'}
        return Response(context)
    
class ProductosView(APIView):
    
    def get(self,request):
        dataProductos = Productos.objects.all()
        serProductos = ProductosSerializer(dataProductos,many=True)
        return Response(serProductos.data)
    
    def post(self,request):
        serProductos = ProductosSerializer(data=request.data)
        serProductos.is_valid(raise_exception=True)
        serProductos.save()
        
        return Response(serProductos.data)
    
class ProductosDetailView(APIView):
    
    def get(self,request,producto_id):
        dataProductos = Productos.objects.get(pk=producto_id)
        serProductos = ProductosSerializer(dataProductos)
        return Response(serProductos.data)
    
    def put(self,request,producto_id):
        dataProductos = Productos.objects.get(pk=producto_id)
        serProductos = ProductosSerializer(dataProductos,data=request.data)
        serProductos.is_valid(raise_exception=True)
        serProductos.save()
        return Response(serProductos.data)
    
    def delete(self,request,producto_id):
        dataProductos = Productos.objects.get(pk=producto_id)
        serProductos = ProductosSerializer(dataProductos)
        dataProductos.delete()
        return Response(serProductos.data)
