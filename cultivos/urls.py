from django.urls import path, re_path
from .views import CultivoListView, CultivoDetailView, ControlView, SetCultivoView, EndCultivoView

app_name='cultivos'
urlpatterns = [
    path('cultivos/', CultivoListView.as_view(), name='listar_cultivos'),
    path('control/', ControlView.as_view(), name='control'),
    path('set-cultivo/', SetCultivoView.as_view(), name='set_cultivo'),
    path('end-cultivo', EndCultivoView.as_view(), name='end_cultivo'),
    re_path(r'^cultivos/(?P<pk>\d+)$', CultivoDetailView.as_view(), name='detalle_cultivo')
]
