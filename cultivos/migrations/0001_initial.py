# Generated by Django 3.1 on 2020-08-17 16:41

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Cultivo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50, verbose_name='Nombre del cultivo')),
                ('descripcion', models.TextField(blank=True, verbose_name='Descripcion del cultivo')),
                ('foto', models.ImageField(upload_to='fotos_cultivos/', verbose_name='Foto')),
                ('temp_max', models.DecimalField(decimal_places=2, max_digits=4, verbose_name='Temperatura maxima del cultivo')),
                ('temp_min', models.DecimalField(decimal_places=2, max_digits=4, verbose_name='Temperatura minima del cultivo')),
                ('hum_aire_max', models.DecimalField(decimal_places=2, max_digits=4, verbose_name='Humedad del aire maxima')),
                ('hum_aire_min', models.DecimalField(decimal_places=2, max_digits=4, verbose_name='Humedad del aire minima')),
                ('hum_suelo_max', models.DecimalField(decimal_places=2, max_digits=4, verbose_name='Humedad del suelo maxima')),
                ('hum_suelo_min', models.DecimalField(decimal_places=2, max_digits=4, verbose_name='Humedad del suelo minima')),
                ('recomendaciones_generales', models.TextField(blank=True, verbose_name='Recomendaciones generales para el cultivo')),
                ('dificultad', models.CharField(choices=[('F', 'Fácil'), ('M', 'Medio'), ('E', 'Experimentado')], max_length=50, verbose_name='Dificultad del cultivo')),
            ],
        ),
        migrations.CreateModel(
            name='HistorialCultivo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_inicio', models.DateField(verbose_name='Fecha de siembra')),
                ('fecha_fin', models.DateField(null=True, verbose_name='Fecha de cosecha')),
                ('cantidad_cosechada', models.DecimalField(decimal_places=2, max_digits=5, null=True, verbose_name='Cantidad cosechada (Kg)')),
                ('cultivo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='cultivos.cultivo', verbose_name='Cultivo')),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Usuario')),
            ],
        ),
    ]