from django.db import models
from datetime import datetime, timedelta, date
# Create your models here.

from usuarios.models import Usuario


class Cultivo(models.Model):
    
    dificultades = (
        ('F', 'Fácil'),
        ('M', 'Medio'),
        ('E', 'Experimentado')
    )

    nombre = models.CharField(verbose_name='Nombre del cultivo', max_length=50)
    descripcion = models.TextField(verbose_name='Descripcion del cultivo', blank=True)
    foto = models.ImageField(verbose_name='Foto', upload_to='fotos_cultivos/', height_field=None, width_field=None, max_length=None)
    
    temp_max = models.DecimalField(verbose_name='Temperatura maxima del cultivo', max_digits=4, decimal_places=2)
    temp_min = models.DecimalField(verbose_name='Temperatura minima del cultivo', max_digits=4, decimal_places=2)
    hum_aire_max = models.DecimalField(verbose_name='Humedad del aire maxima', max_digits=4, decimal_places=2)
    hum_aire_min = models.DecimalField(verbose_name='Humedad del aire minima', max_digits=4, decimal_places=2)
    hum_suelo_max = models.DecimalField(verbose_name='Humedad del suelo maxima', max_digits=4, decimal_places=2)
    hum_suelo_min = models.DecimalField(verbose_name='Humedad del suelo minima', max_digits=4, decimal_places=2)
    tiempo_cosecha = models.IntegerField(verbose_name="Tiempo estimado de cosecha")
    
    recomendaciones_generales = models.TextField(verbose_name='Recomendaciones generales para el cultivo', blank=True)
    dificultad = models.CharField(verbose_name='Dificultad del cultivo', choices=dificultades, max_length=50)

    def __str__(self):
        return self.nombre
    


class HistorialCultivo(models.Model):
    estados = (
        ('C', 'Cosechado'),
        ('E', 'En progreso'),
        ('A', 'Cancelado')
    )

    usuario = models.ForeignKey(Usuario, verbose_name='Usuario', on_delete=models.CASCADE)
    cultivo = models.ForeignKey(Cultivo, verbose_name='Cultivo', on_delete=models.CASCADE)
    fecha_inicio = models.DateField(verbose_name='Fecha de siembra', auto_now=False, auto_now_add=False)
    fecha_fin = models.DateField(verbose_name='Fecha de cosecha', auto_now=False, auto_now_add=False, null=True, blank=True)
    cantidad_cosechada = models.DecimalField(verbose_name='Cantidad cosechada (Kg)', max_digits=5, decimal_places=2, null=True, blank=True)
    estado = models.CharField(verbose_name='Estado del cultivo', choices=estados, max_length=1)

    def save(self, *args, **kwargs):
        hoy = date.today()
        if(self.fecha_inicio==None):
            self.fecha_inicio = datetime.now()
            self.fecha_fin = self.fecha_inicio + timedelta(days=self.cultivo.tiempo_cosecha)
        super(HistorialCultivo, self).save(*args, **kwargs)

    def __str__(self):
        return '%s %s' % (self.usuario, self.cultivo)
