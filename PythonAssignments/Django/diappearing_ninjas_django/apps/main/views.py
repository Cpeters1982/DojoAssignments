# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.

def index(request):
    return HttpResponse("There are no ninjas here")

def ninjas(request):
    return render(request, 'main/ninjas.html')


def ninja(request, color):
    print color;

    context = {'color':color}

    return render(request, 'main/ninja.html', context)
