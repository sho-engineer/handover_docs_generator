from rest_framework import routers
from .views import UserViewSet, DocumentViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet, basename="users")
router.register(r'documents', DocumentViewSet, basename="documents")

urlpatterns = router.urls