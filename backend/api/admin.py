from django.contrib import admin

# Register your models here.
# import the model Todo
from .models import Productos
  
# create a class for the admin-model integration
class ProductosAdmin(admin.ModelAdmin):
  
    # add the fields of the model here
    list_display = ("nombre","descripcion","categoria","precio","img")
  
# we will need to register the
# model class and the Admin model class
# using the register() method
# of admin.site class
admin.site.register(Productos,ProductosAdmin)