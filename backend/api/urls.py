from django.urls import path

from . import views

app_name = 'api'

urlpatterns = [
    path('',views.IndexView.as_view(),name='index'),
    #Productos
    path('api/', views.ProductosView.as_view(),name='api'),
    path('api/<int:producto_id>', views.ProductosDetailView.as_view()),
    #Usuarios
    path('api/usuarios', views.UsuariosView.as_view()),
    path('api/usuarios/<int:usuario_id>', views.UsuarioDetailView.as_view()),
    #Proyectos
    path('api/proyectos', views.ProyectosView.as_view()),
    path('api/usuarios/<int:usuario_id>', views.ProyectoDetailView.as_view())
]