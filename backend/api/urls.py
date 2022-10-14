from django.urls import path

from . import views

app_name = 'api'

urlpatterns = [
    path('', views.ProductosView.as_view({'get': 'list'}),name='index')
]