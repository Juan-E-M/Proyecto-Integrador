from django.contrib import admin

# Register your models here.
# import the model Todo
from .models import Productos
from .models import Proyectos
  
# create a class for the admin-model integration
class ProductosAdmin(admin.ModelAdmin):
  
    # add the fields of the model here
    list_display = ("nombre","descripcion","categoria","precio","img","pub_date")
  
# we will need to register the
# model class and the Admin model class
# using the register() method
# of admin.site class
admin.site.register(Productos,ProductosAdmin)

class ProyectosAdmin(admin.ModelAdmin):
  
    # add the fields of the model here
    list_display = ("titulo","descripcion","imagen","fecha","pub_date")
  
# we will need to register the
# model class and the Admin model class
# using the register() method
# of admin.site class
admin.site.register(Proyectos,ProyectosAdmin)