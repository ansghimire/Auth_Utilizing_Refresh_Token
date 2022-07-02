from django.urls import path 
from rest_framework import routers

from .views import NoteViewset

router = routers.DefaultRouter()
router.register('note', NoteViewset)


urlpatterns = [
    
]

urlpatterns += router.urls
