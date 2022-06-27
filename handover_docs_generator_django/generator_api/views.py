from winreg import QueryInfoKey
from rest_framework import viewsets, routers
from .models import Document, User
from .serializer import DocumentSerializer, UserSerializer

class UserApi(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class SendDocumentApi(viewsets.ModelViewSet):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer