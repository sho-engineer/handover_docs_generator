from rest_framework import viewsets, routers
from .models import User
from .serializer import UserSerializer

class UserApi(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer