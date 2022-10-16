"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# add include to the path
from django.urls import path, include
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
# import views from todo
from api import views
  
# import routers from the REST framework
# it is neccessary for routing
from rest_framework import routers
  
# create a router object
router = routers.DefaultRouter()
  
# register the router
router.register(r'tasks',views.ProductosView, 'task')

urlpatterns = [
    path('', include('api.urls')),
    path('admin/', admin.site.urls),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
