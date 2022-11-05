from django.urls import path

from . import views

app_name = 'api'

urlpatterns = [
    path('',views.IndexView.as_view(),name='index'),
    path('api/', views.ProductosView.as_view(),name='api'),
    path('api/<int:producto_id>', views.ProductosDetailView.as_view()),
    #Categorias
    path('api/categorias', views.CategoriasView.as_view()),
    path('api/categorias/<int:categoria_id>', views.CategoriasDetailView.as_view()),
    #Usuarios
    path('api/usuarios', views.UsuariosView.as_view()),
    path('api/usuarios/<int:usuario_id>', views.UsuarioDetailView.as_view())
]