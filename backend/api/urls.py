from django.urls import path

from . import views

app_name = 'api'

urlpatterns = [
    path('',views.IndexView.as_view(),name='index'),

    path('api/', views.ProductosView.as_view(),name='api'),
    path('api/<int:producto_id>', views.ProductosDetailView.as_view()),
    #Usuarios
    path('api/usuarios', views.UsuariosView.as_view()),
    path('api/usuarios/<int:usuario_id>', views.UsuarioDetailView.as_view()),
    #Compras
    path('api/compras', views.ComprasView.as_view()),
    path('api/compras/<int:compra_id>', views.CompraDetailView.as_view()),

]
'''
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
'''