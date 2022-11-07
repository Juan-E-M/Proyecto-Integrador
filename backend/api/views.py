'''
  
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
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view

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

######################################################################3####
'''
from django.http import JsonResponse
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import api_view

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
    ]

    return JsonResponse(routes, safe=False)


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
'''
#########################################################################3
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

#########################################################################3
class ComprasView(APIView):
    def get(self, request):
        data = Compras.objects.all()
        serCompras = ComprasSerializer(data, many=True)
        return Response(serCompras.data)

    def post(self, request):
        serCompras = ComprasSerializer(data=request.data)
        serCompras.is_valid(raise_exception=True)
        serCompras.save()

        return Response(serCompras.data)

class CompraDetailView(APIView):

    def get(self, request, compra_id):
        dataCompras = Compras.objects.get(pk=compra_id)
        serCompras = ComprasSerializer(dataCompras)
        return Response(serCompras.data)

    def put(self, request, compra_id):
        dataCompras = Compras.objects.get(pk=compra_id)
        serCompras = ComprasSerializer(dataCompras, data=request.data)
        serCompras.is_valid(raise_exception=True)
        serCompras.save()
        return Response(serCompras.data)

    def delete(self, request, compra_id):
        dataCompras = Compras.objects.get(pk=compra_id)
        serCompras = ComprasSerializer(dataCompras)
        serCompras.delete()
        return Response(serCompras.data)