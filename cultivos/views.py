from django.shortcuts import render
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views import View
from django.shortcuts import render
from .models import Cultivo, HistorialCultivo
from django.http import HttpResponse, HttpResponseBadRequest
from datetime import datetime
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from datetime import datetime, date
import json
from urllib import request as urlrequest
# Create your views here.

class CultivoListView(ListView):
    model = Cultivo

class CultivoDetailView(DetailView):
    model = Cultivo

class ControlView(View):
    
    def get(self, request):
        context = {}
        try:
            usuario = request.user
            historial_cultivo = HistorialCultivo.objects.filter(
                usuario=usuario
            ).get(
                estado='E'
            )
            cultivo = historial_cultivo.cultivo
            
            context['cultivo'] = cultivo
            context['historial_cultivo'] = historial_cultivo
        except:
            pass

        return render(request, 'control.html', context)

@method_decorator(csrf_exempt, name='dispatch')
class SetCultivoView(View):

    def post(self, request):
        conf = request.POST.get('conf')
        pk_cultivo = request.POST.get('pk')
        
        try:
            cultivo_actual = HistorialCultivo.objects.filter(usuario=request.user).get(estado='E')
        except:
            cultivo_actual = None

        if((cultivo_actual and conf=='true') or (not cultivo_actual and conf=='false')):
            if(cultivo_actual):
                cultivo_actual.estado = 'A'
                cultivo_actual.fecha_fin = datetime.now()
                cultivo_actual.save()
            
            cultivo_nuevo = Cultivo.objects.get(pk=pk_cultivo)

            urlrequest.urlopen('http://iot.laserud.co:8080/3RzhyagiSsL8n5V3LrYs40Sz8kv3UNCa/update/V9?value=%s' % (cultivo_nuevo.temp_max))
            urlrequest.urlopen('http://iot.laserud.co:8080/3RzhyagiSsL8n5V3LrYs40Sz8kv3UNCa/update/V10?value=%s' % (cultivo_nuevo.temp_min))
            urlrequest.urlopen('http://iot.laserud.co:8080/3RzhyagiSsL8n5V3LrYs40Sz8kv3UNCa/update/V11?value=%s' % (cultivo_nuevo.hum_aire_max))
            urlrequest.urlopen('http://iot.laserud.co:8080/3RzhyagiSsL8n5V3LrYs40Sz8kv3UNCa/update/V12?value=%s' % (cultivo_nuevo.hum_aire_min))
            urlrequest.urlopen('http://iot.laserud.co:8080/3RzhyagiSsL8n5V3LrYs40Sz8kv3UNCa/update/V13?value=%s' % (cultivo_nuevo.hum_suelo_max))
            urlrequest.urlopen('http://iot.laserud.co:8080/3RzhyagiSsL8n5V3LrYs40Sz8kv3UNCa/update/V14?value=%s' % (cultivo_nuevo.hum_suelo_min))
            
            siembra_nueva = HistorialCultivo()
            siembra_nueva.usuario = request.user
            siembra_nueva.cultivo = cultivo_nuevo
            siembra_nueva.estado = 'E'
            siembra_nueva.save()

            return HttpResponse(json.dumps({'response':'ok'}))
        return HttpResponseBadRequest('Not ok')

@method_decorator(csrf_exempt, name='dispatch')
class EndCultivoView(View):
    def post(self, request):
        cultivo_actual = HistorialCultivo.objects.filter(usuario=request.user).get(estado='E')
        cultivo_actual.estado = 'C'
        cultivo_actual.cantidad_cosechada = request.POST.get('can_cosechada')
        cultivo_actual.fecha_fin = date.today()
        cultivo_actual.save()
        return HttpResponse(json.dumps({'response':'ok'}))