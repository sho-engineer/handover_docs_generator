from rest_framework import routers
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework.decorators import action
from .models import Document, User
from .serializer import DocumentSerializer, UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(methods=['get'], detail=False)
    def get_users(self, request):
        return Response()

class DocumentViewSet(viewsets.ModelViewSet):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer