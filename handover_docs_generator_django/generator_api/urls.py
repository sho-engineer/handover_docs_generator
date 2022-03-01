from unicodedata import name
from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.Longin.as_view(), name="login"),
    path('logout/', views.Logout.as_view(), name="logout")
]