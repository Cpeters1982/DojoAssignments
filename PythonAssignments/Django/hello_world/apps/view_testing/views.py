# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect

# Create your views here.

def index(request):
    return render(request, "view_testing/index.html")

def create(request):

    print request.method

    if request.method == "POST":
        print "*"*50
        print request.POST
        print request.POST['first_name']
        print "*"*50
        request.session['name'] = request.POST['first_name']
        return redirect('/')
    else:
        return redirect('/')
