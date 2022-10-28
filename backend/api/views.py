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

from .models import *
from .serializers import *

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

#########################################################################
class UsuariosView(APIView):
    def get(self, request):
        data = Usuarios.objects.all()
        serUsuarios = UsuariosSerializer(data, many=True)
        return Response(serUsuarios.data)

    def post(self, request):
        serUsuarios = UsuariosSerializer(data=request.data)
        serUsuarios.is_valid(raise_exception=True)
        serUsuarios.save()

        return Response(serUsuarios.data)

class UsuarioDetailView(APIView):

    def get(self, request, usuario_id):
        dataUsuarios = Usuarios.objects.get(pk=usuario_id)
        serUsuarios = UsuariosSerializer(dataUsuarios)
        return Response(serUsuarios.data)

    def put(self, request, usuario_id):
        dataUsuarios = Usuarios.objects.get(pk=usuario_id)
        serUsuarios = UsuariosSerializer(dataUsuarios, data=request.data)
        serUsuarios.is_valid(raise_exception=True)
        serUsuarios.save()
        return Response(serUsuarios.data)

    def delete(self, request, usuario_id):
        dataUsuarios = Usuarios.objects.get(pk=usuario_id)
        serUsuarios = UsuariosSerializer(dataUsuarios)
        dataUsuarios.delete()
        return Response(serUsuarios.data)

#########################################################################
class ProyectosView(APIView):
    def get(self, request):
        data = Proyectos.objects.all()
        serProyectos = ProyectosSerializer(data, many=True)
        return Response(serProyectos.data)

    def post(self, request):
        serProyectos = ProyectosSerializer(data=request.data)
        serProyectos.is_valid(raise_exception=True)
        serProyectos.save()

        return Response(serProyectos.data)

class ProyectoDetailView(APIView):

    def get(self, request, proyecto_id):
        dataProyectos = Proyectos.objects.get(pk=proyecto_id)
        serProyectos = ProyectosSerializer(dataProyectos)
        return Response(serProyectos.data)

    def put(self, request, proyecto_id):
        dataProyectos = Proyectos.objects.get(pk=proyecto_id)
        serProyectos = ProyectosSerializer(dataProyectos, data=request.data)
        serProyectos.is_valid(raise_exception=True)
        serProyectos.save()
        return Response(serProyectos.data)

    def delete(self, request, proyecto_id):
        dataProyectos = Proyectos.objects.get(pk=proyecto_id)
        serProyectos = ProyectosSerializer(dataProyectos)
        dataProyectos.delete()
        return Response(serProyectos.data)
