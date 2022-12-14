from rest_framework import serializers
from .models import *


class UsuariosSerializer(serializers.ModelSerializer):
    # create a meta class
    class Meta:
        model = Usuarios
        fields = ['id', 'username', 'first_name', 'last_name', 'password', 'address', 'perfil_image', 'email', 'date_joined']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance



class ProductosSerializer(serializers.ModelSerializer):
    # create a meta class
    class Meta:
        model = Productos
        fields = ('id', 'nombre', 'descripcion', 'categoria', 'precio', 'img1', 'img2', 'img3', 'pub_date')


class ComprasSerializer(serializers.ModelSerializer):
    # create a meta class
    class Meta:
        model = Compras
        fields = ('id', 'user_id', 'username', 'descripcion_compra',
                  'distrito', 'provincia', 'departamento', 'first_name',
                  'total', 'last_name', 'send_address', 'send_email',
                  'full_name_card', 'card_number', 'exp_date', 'cod')


class ProyectosSerializer(serializers.ModelSerializer):
    # create a meta class
    class Meta:
        model = Proyectos
        fields = ('id', 'titulo', 'descripcion', 'lugar', 'imagen', 'fecha', 'pub_date')


class Tcontrol_plasticoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tcontrol_plastico
        fields = ('id', 'user_id', 'porcentaje', 'reg_date')
class RplasticoSerializer(serializers.ModelSerializer):
    total_count = serializers.IntegerField()
    class Meta:
        model = Tcontrol_plastico
        fields = ('reg_date','total_count')

class Tcontrol_vidrioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tcontrol_vidrio
        fields = ('id', 'user_id', 'porcentaje', 'reg_date')
class RvidrioSerializer(serializers.ModelSerializer):
    total_count = serializers.IntegerField()
    class Meta:
        model = Tcontrol_vidrio
        fields = ('reg_date','total_count')

class Tcontrol_papelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tcontrol_papel
        fields = ('id', 'user_id', 'porcentaje', 'reg_date')

class RpapelSerializer(serializers.ModelSerializer):
    total_count = serializers.IntegerField()
    class Meta:
        model = Tcontrol_papel
        fields = ('reg_date','total_count')

class ToptenSerializer (serializers.ModelSerializer):
    class Meta:
        model = T_all_register
        fields = ('id','user_id','type','reg_date')