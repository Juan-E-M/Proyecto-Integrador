from django.urls import path

from . import views

app_name = 'api'

urlpatterns = [
    #Usuarios
    path('api/usuarios/register', views.RegisterView.as_view()),
    path('api/usuarios/login', views.LoginView.as_view()),
    #Productos
    path('api/', views.ProductosView.as_view(),name='api'),
    path('api/<int:producto_id>', views.ProductosDetailView.as_view()),
    #Categorias
    path('api/categorias', views.CategoriasView.as_view()),
    path('api/categorias/<int:categoria_id>', views.CategoriasDetailView.as_view()),
    #Compras
    path('api/compras', views.ComprasView.as_view()),
    path('api/compras/<int:compra_id>', views.CompraDetailView.as_view()),
    #Proyectos
    path('api/proyectos', views.ProyectosView.as_view()),
    path('api/proyectos/<int:proyecto_id>', views.ProyectoDetailView.as_view()),
    #Registros
    path('api/rplastico/<int:user_id>', views.RplasticoView.as_view())
]