from django.contrib import admin
from .models import *

class ProductosAdmin(admin.ModelAdmin):
    list_display = ("nombre", "descripcion", "categoria", "precio", "img1", "img2", "img3", "pub_date")


class ProyectosAdmin(admin.ModelAdmin):
    list_display = ("titulo", "descripcion", "lugar", "imagen", "fecha", "pub_date")

class Tcontrol_plasticoAdmin(admin.ModelAdmin):
    list_display = ("user_id", "porcentaje", "reg_date")

class Tcontrol_vidrioAdmin(admin.ModelAdmin):
    list_display = ("user_id", "porcentaje", "reg_date")

class Tcontrol_papelAdmin(admin.ModelAdmin):
    list_display = ("user_id", "porcentaje", "reg_date")

class T_all_registerAdmin(admin.ModelAdmin):
    list_display = ("user_id", "type", "reg_date")


admin.site.register(Tcontrol_plastico, Tcontrol_plasticoAdmin)
admin.site.register(Tcontrol_vidrio, Tcontrol_vidrioAdmin)
admin.site.register(Tcontrol_papel, Tcontrol_papelAdmin)
admin.site.register(Proyectos, ProyectosAdmin)
admin.site.register(Productos, ProductosAdmin)
admin.site.register(T_all_register, T_all_registerAdmin)