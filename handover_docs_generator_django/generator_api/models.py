from distutils.archive_util import make_zipfile
from tkinter import N
from django.db import models
from django.contrib.auth.models import AbstractUser
from django_mysql.models import ListCharField

# Create your models here.

class User(AbstractUser):
    email = models.EmailField('メールアドレス', unique=True)


class Document(models.Model):
    title = models.TextField(name="title", null=False)
    genre = models.CharField(name="genre", max_length=255)
    author = models.CharField(name="author", max_length=255)
    date = models.TimeField(name="date", null=False)
    purpose = models.TextField(name="purpose", null=False)
    overview = models.TextField(name="overview", null=False)
    dev_environment = ListCharField(
                      models.CharField(max_length=255), max_length=(6 * 11))
    image = models.ImageField(upload_to='')
    references = ListCharField(
                      models.CharField(max_length=255), max_length=(6 * 11))
    
    def __str__(self):
        return self.title
