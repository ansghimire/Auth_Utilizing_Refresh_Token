from django.db import models

# Create your models here.
class NoteModel(models.Model):
    title = models.CharField(max_length=100)
    subject = models.CharField(max_length=100)
    body = models.TextField()


    def __str__(self):
        return self.title