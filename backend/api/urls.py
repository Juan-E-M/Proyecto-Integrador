from django.urls import path
from . import views
urlpatterns = [
    path('',views.IndexView.as_view(),name='index'),
    path('user',views.UserView.as_view(),name='user'),
    path('user/<int:user_id>',views.UserDetailView.as_view())
]