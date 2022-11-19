from django.urls import path

from . import views

app_name = 'api'

urlpatterns = [
    #Usuarios
    path('api/usuarios/register', views.RegisterView.as_view()),
    path('api/usuarios/login', views.LoginView.as_view()),
    path('api/usuarios', views.UsuariosView.as_view()),
    path('api/usuarios/<int:usuario_id>', views.UsuariosDetailView.as_view()),
    path('api/usuarios/loginandroid', views.LoginAndroidView.as_view()),
    #Productos
    path('api/', views.ProductosView.as_view(),name='api'),
    path('api/<int:producto_id>', views.ProductosDetailView.as_view()),
    path('api/ultimo_producto', views.UltimoProductoView.as_view()),
    #Compras
    path('api/compras', views.ComprasView.as_view()),
    path('api/compras/<int:compra_id>', views.CompraDetailView.as_view()),
    #Proyectos
    path('api/proyectos', views.ProyectosView.as_view()),
    path('api/proyectos/<int:proyecto_id>', views.ProyectoDetailView.as_view()),
    path('api/proyectos/ultimo_proyecto', views.UltimoProyectoView.as_view()),
    #Registros
    path('api/rplastico/', views.Tcontrol_plasticoView.as_view()),
    path('api/rplastico/<int:user_id>', views.RplasticoView.as_view()),
    path('api/rvidrio/', views.Tcontrol_vidrioView.as_view()),
    path('api/rvidrio/<int:user_id>', views.RvidrioView.as_view()),
    path('api/rpapel/', views.Tcontrol_papelView.as_view()),
    path('api/rpapel/<int:user_id>', views.RpapelView.as_view())
]