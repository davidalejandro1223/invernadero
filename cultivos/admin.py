from django.contrib import admin
from .models import Cultivo, HistorialCultivo
# Register your models here.

@admin.register(Cultivo)
class CultivoAdmin(admin.ModelAdmin):
    list_display = ('pk', 'nombre', 'dificultad')

@admin.register(HistorialCultivo)
class HistorialCultivoAdmin(admin.ModelAdmin):
    list_display = ('pk', 'usuario', 'cultivo', 'fecha_inicio', 'fecha_fin')