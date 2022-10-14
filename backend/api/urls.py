from django.urls import path

from . import views

app_name = 'api'

urlpatterns = [
    path('',views.IndexView.as_view(),name='index'),
    path('api/', views.ProductosView.as_view(),name='api'),
    path('api/<int:producto_id>', views.ProductosDetailView.as_view())
]