from unicodedata import name
from django.urls import path
from rest_framework import routers
from .views import SendDocumentApi, UserApi

router = routers.DefaultRouter()
router.register(r'users', UserApi)
router.register(r'send_documents', SendDocumentApi)