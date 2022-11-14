from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed

from .models import *
from .serializers import *
import jwt, datetime

# Create your views here.
class RegisterView(APIView):
    def post(self,request):
        serializer = UsuariosSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class LoginView(APIView):
    def post(self,request):
        if 'email' in request.data:
            email = request.data['email']
            user = Usuarios.objects.filter(email=email).first()
        else:
            username = request.data['username']
            user = Usuarios.objects.filter(username=username).first()
        password = request.data['password']
        if user is None:
            raise AuthenticationFailed('User o email not found')
        if not user.check_password(password):
            raise AuthenticationFailed('incorrect password')
        serUser = UsuariosSerializer(user)
        payload = {
            'id':user.id,
            'exp':datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat':datetime.datetime.utcnow()
        }
        token = jwt.encode(serUser.data, 'secret', algorithm='HS256')
        return Response({
            'access':token
        })

#####################################################################################
class CategoriasView(APIView):

    def get(self, request):
        dataCategorias = Categorias.objects.all()
        serCategorias = CategoriasSerializer(dataCategorias, many=True)
        return Response(serCategorias.data)

    def post(self, request):
        serCategorias = CategoriasSerializer(data=request.data)
        serCategorias.is_valid(raise_exception=True)
        serCategorias.save()

        return Response(serCategorias.data)


class CategoriasDetailView(APIView):

    def get(self, request, categoria_id):
        dataCategorias = Categorias.objects.get(pk=categoria_id)
        serCategorias = CategoriasSerializer(dataCategorias)
        return Response(serCategorias.data)

    def put(self, request, categoria_id):
        dataCategorias = Categorias.objects.get(pk=categoria_id)
        serCategorias = CategoriasSerializer(dataCategorias, data=request.data)
        serCategorias.is_valid(raise_exception=True)
        serCategorias.save()
        return Response(serCategorias.data)

    def delete(self, request, categoria_id):
        dataCategorias = Categorias.objects.get(pk=categoria_id)
        serCategorias = CategoriasSerializer(dataCategorias)
        dataCategorias.delete()
        return Response(serCategorias.data)

##############################################################################
class ProductosView(APIView):

    def get(self, request):
        dataProductos = Productos.objects.all()
        serProductos = ProductosSerializer(dataProductos, many=True)
        return Response(serProductos.data)

    def post(self, request):
        serProductos = ProductosSerializer(data=request.data)
        serProductos.is_valid(raise_exception=True)
        serProductos.save()

        return Response(serProductos.data)


class ProductosDetailView(APIView):

    def get(self, request, producto_id):
        dataProductos = Productos.objects.get(pk=producto_id)
        serProductos = ProductosSerializer(dataProductos)
        return Response(serProductos.data)

    def put(self, request, producto_id):
        dataProductos = Productos.objects.get(pk=producto_id)
        serProductos = ProductosSerializer(dataProductos, data=request.data)
        serProductos.is_valid(raise_exception=True)
        serProductos.save()
        return Response(serProductos.data)

    def delete(self, request, producto_id):
        dataProductos = Productos.objects.get(pk=producto_id)
        serProductos = ProductosSerializer(dataProductos)
        dataProductos.delete()
        return Response(serProductos.data)

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

class Tcontrol_plasticoView(APIView):
    def get(self, request):
        data = Tcontrol_plastico.objects.all()
        res = Tcontrol_plasticoSerializer(data, many=True)
        return Response(res.data)
    def post(self, request):
        res = Tcontrol_plasticoSerializer(data=request.data)
        res.is_valid(raise_exception=True)
        res.save()
        return Response(res.data)

class RplasticoView(APIView):
    def get(self, request, user_id):
        inicio = request.data['inicio']
        final = request.data['final']
        res = Tcontrol_plastico.objects.filter(user_id=user_id, reg_date__range=[inicio, final])
        res_final = Tcontrol_plasticoSerializer(res, many=True)
        return Response(res_final.data)


class Tcontrol_vidrioView(APIView):
    def get(self, request):
        data = Tcontrol_vidrio.objects.all()
        res = Tcontrol_vidrioSerializer(data, many=True)
        return Response(res.data)
    def post(self, request):
        res = Tcontrol_vidrioSerializer(data=request.data)
        res.is_valid(raise_exception=True)
        res.save()
        return Response(res.data)
class RvidrioView(APIView):
    def get(self, request, user_id):
        inicio = request.data['inicio']
        final = request.data['final']
        res = Tcontrol_vidrio.objects.filter(user_id=user_id, reg_date__range=[inicio, final])
        res_final = Tcontrol_vidrioSerializer(res, many=True)
        return Response(res_final.data)

class Tcontrol_papelView(APIView):
    def get(self, request):
        data = Tcontrol_papel.objects.all()
        res = Tcontrol_papelSerializer(data, many=True)
        return Response(res.data)
    def post(self, request):
        res = Tcontrol_papelSerializer(data=request.data)
        res.is_valid(raise_exception=True)
        res.save()
        return Response(res.data)
class RpapelView(APIView):
    def get(self, request, user_id):
        inicio = request.data['inicio']
        final = request.data['final']
        res = Tcontrol_papel.objects.filter(user_id=user_id, reg_date__range=[inicio, final])
        res_final = Tcontrol_papelSerializer(res, many=True)
        return Response(res_final.data)