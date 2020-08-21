# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect, loader
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.http.response import HttpResponse
from django.contrib.auth.decorators import login_required
# Create your views here.


def autenticar(request):
    if request.method == 'POST':
        usuario = request.POST.get('inputUsuario', None)
        contrasena = request.POST.get('inputContrasena', None)

        user = authenticate(username=usuario, password=contrasena)
        if user is not None:
            login(request, user)
            return redirect('cultivos:control')
        else:
            return HttpResponse('usuario no existe')

    return render(request, 'login.html', {})


def desautenticar(request):
    logout(request)
    return redirect('usuarios:autenticar')
