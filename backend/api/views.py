from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer
class IndexView(APIView):
    
    def get(self,request):
        context = {'mensaje':'servidor activo'}
        return Response(context)
    
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