from django.contrib import admin

# Register your models here.
# import the model Todo
from .models import Productos, Categorias
  
# create a class for the admin-model integration
class CategoriasAdmin(admin.ModelAdmin):
    # add the fields of the model here
    list_display = ("nombre","pub_date")

class ProductosAdmin(admin.ModelAdmin):
    # add the fields of the model here
    list_display = ("nombre","descripcion","categoria","precio","img1","img2","img3","pub_date")
  
# we will need to register the
# model class and the Admin model class
# using the register() method
# of admin.site class
admin.site.register(Categorias,CategoriasAdmin)
admin.site.register(Productos,ProductosAdmin)