from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed

from .models import *
from .serializers import *
import jwt, datetime
from django.db.models import Count

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
            'id':serUser.data,
            'exp':datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat':datetime.datetime.utcnow()
        }
        token = jwt.encode(payload, 'secret', algorithm='HS256')
        return Response({
            'access':token
        })

class LoginAndroidView(APIView):
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
        return Response(
           serUser.data
        )

class UsuariosView(APIView):
    def get(self, request):
        dataUsuarios = Usuarios.objects.all()
        serUsuarios = UsuariosSerializer(dataUsuarios, many=True)
        return Response(serUsuarios.data)

class UsuariosDetailView(APIView):

    def get(self, request, usuario_id):
        dataUsuarios = Usuarios.objects.get(pk=usuario_id)
        serUsuarios = UsuariosSerializer(dataUsuarios)
        return Response(serUsuarios.data)
    def patch(self,request, usuario_id):
        dataUsuarios = Usuarios.objects.get(pk=usuario_id)
        serializer = UsuariosSerializer(dataUsuarios, data=request.data,
                                         partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)


    def delete(self,request,usuario_id):
        data_user = Usuarios.objects.get(pk=usuario_id)
        serSerie = UsuariosSerializer(data_user)
        data_user.delete()
        return Response(serSerie.data)


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

class UltimoProductoView(APIView):
    
    def get(self, request):
        prim_productos = Productos.objects.all().order_by('-pub_date')[:1]
        serProductos = ProductosSerializer(prim_productos, many=True)
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

class UltimoProyectoView(APIView):
    
    def get(self, request):
        prim_proyectos = Proyectos.objects.all().order_by('-pub_date')[:1]
        serProyectos = ProyectosSerializer(prim_proyectos, many=True)
        return Response(serProyectos.data)

#########################################################################
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
        res = Tcontrol_plastico.objects.filter(user_id=user_id).values('reg_date').annotate(total_count=Count('reg_date')).order_by('reg_date')
        res_final = RplasticoSerializer(res, many=True)
        return Response(res_final.data)
class RplasticoTopTenView(APIView):
    def get(self, request):
        inicio = next_DMY()[0]
        final = next_DMY()[1]
        data = Tcontrol_plastico.objects.filter(reg_date__range=[inicio, final]).values('user_id','user_id__username').annotate(total_count=Count('user_id')).order_by('-total_count')[:10]
        return Response({'data':data})


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
        res = Tcontrol_vidrio.objects.filter(user_id=user_id).values('reg_date').annotate(total_count=Count('reg_date')).order_by('reg_date')
        res_final = RvidrioSerializer(res, many=True)
        return Response(res_final.data)
class RvidrioTopTenView(APIView):
    def get(self, request):
        inicio = next_DMY()[0]
        final = next_DMY()[1]
        data = Tcontrol_vidrio.objects.filter(reg_date__range=[inicio, final]).values('user_id','user_id__username').annotate(total_count=Count('user_id')).order_by('-total_count')[:10]
        return Response({'data':data})


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
        res = Tcontrol_papel.objects.filter(user_id=user_id).values('reg_date').annotate(total_count=Count('reg_date')).order_by('reg_date')
        res_final = RpapelSerializer(res, many=True)
        return Response(res_final.data)

class RpapelTopTenView(APIView):
    def get(self, request):
        inicio = next_DMY()[0]
        final = next_DMY()[1]
        data = Tcontrol_papel.objects.filter(reg_date__range=[inicio, final]).values('user_id','user_id__username').annotate(total_count=Count('user_id')).order_by('-total_count')[:10]
        return Response({'data':data})


class TopTenView (APIView):

    def get (self, request):
        inicio = next_DMY()[0]
        final = next_DMY()[1]
        data = T_all_register.objects.filter(reg_date__range=[inicio, final]).values('user_id','user_id__username').annotate(total_count=Count('user_id')).order_by('-total_count')[:10]
        rpta = [dict(q) for q in data]
        return Response(rpta)

    def post(self, request):
        res = ToptenSerializer(data=request.data)
        res.is_valid(raise_exception=True)
        res.save()
        return Response(res.data)



def next_DMY():
    day = int(datetime.datetime.strftime(datetime.datetime.now(), '%d'))
    month = int(datetime.datetime.strftime(datetime.datetime.now(), '%m'))
    year = int(datetime.datetime.strftime(datetime.datetime.now(), '%Y'))

    #day = 1
    #month = 12
    #year = 2022

    months31 = (1, 3, 5, 7, 8, 10)
    months30 = (4, 6, 9, 11)

    next_day = day + 1
    next_month = month
    if month == 12 and day == 31:
        next_day = 1
        next_month = 1
        next_year = year + 1
    else:
        next_year = year
    for i in range(len(months31)):
        if day == 31 and month == months31[i]:
            next_day = 1
            next_month = month + 1
    # Validation: Last Day of Months with 30 days
    for i in range(len(months30)):
        if day == 30 and month == months30[i]:
            next_day = 1
            next_month = month + 1
    if month == 2 and day == 28:
        next_day = 1
        next_month = month + 1
    leap_year = year % 4
    if day == 29 and month == 2 and leap_year == 0:
        next_day = 1
        next_month = month + 1
    return [datetime.datetime(year,month,day),datetime.datetime(next_year,next_month,next_day)]