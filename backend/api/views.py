from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import User
from .serializers import UserSerializer
from django.http import JsonResponse

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token' ,
        '/api/token/refresh' ,
    ]

    return JsonResponse(routes , safe=False)
    
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





class UserView(APIView):
    
    def get(self,request):
        dataUser = User.objects.all()
        serUser = UserSerializer(dataUser,many=True)
        return Response(serUser.data)
    
    def post(self,request):
        serUser = UserSerializer(data=request.data)
        serUser.is_valid(raise_exception=True)
        serUser.save()
        
        return Response(serUser.data)
    
class UserDetailView(APIView):
    
    def get(self,request,user_id):
        dataUser = User.objects.get(pk=user_id)
        serUser = UserSerializer(dataUser)
        return Response(serUser.data)
    
    def put(self,request,user_id):
        dataUser = User.objects.get(pk=user_id)
        serUser = UserSerializer(dataUser,data=request.data)
        serUser.is_valid(raise_exception=True)
        serUser.save()
        return Response(serUser.data)
    
    def delete(self,request,user_id):
        dataUser = User.objects.get(pk=user_id)
        serUser = UserSerializer(dataUser)
        dataUser.delete()
        return Response(serUser.data)