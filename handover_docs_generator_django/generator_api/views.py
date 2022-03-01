from django.shortcuts import render

from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.views import(LoginView,LogoutView)
from forms import LoginForm

# Create your views here.
class Longin(LoginView):
    form_class = LoginForm

class Logout(LoginRequiredMixin,LogoutView):
    pass