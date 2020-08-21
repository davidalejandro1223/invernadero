# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.


class Usuario(AbstractUser):
    token = models.CharField(verbose_name='Token de conexión API Blynk', max_length=50)

    def __str__(self):
        return ("%s %s" % (self.first_name, self.last_name))
