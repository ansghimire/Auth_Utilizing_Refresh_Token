from math import perm
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin
from rest_framework.viewsets import GenericViewSet
from rest_framework import permissions
from .models import NoteModel
from .serializers import NoteSerializer


class NoteViewset(ListModelMixin, RetrieveModelMixin, GenericViewSet):
   queryset = NoteModel.objects.all()
   serializer_class = NoteSerializer
   permission_classes = [permissions.IsAuthenticated]
   
