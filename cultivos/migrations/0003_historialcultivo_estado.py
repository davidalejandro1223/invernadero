# Generated by Django 3.1 on 2020-08-18 00:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cultivos', '0002_cultivo_tiempo_cosecha'),
    ]

    operations = [
        migrations.AddField(
            model_name='historialcultivo',
            name='estado',
            field=models.CharField(choices=[('C', 'Cosechado'), ('E', 'En progreso'), ('A', 'Cancelado')], default='A', max_length=1, verbose_name='Estado del cultivo'),
            preserve_default=False,
        ),
    ]
