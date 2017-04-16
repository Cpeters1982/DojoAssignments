# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse

from .models import User, Message, Comment

def index(request):

    print User.objects.all()

    User.objects.create(first_name="Nick", last_name="deLannoy", password="123456789")

    print User.objects.all()

    # u = User.objects.get(id=1)

    # print u.first_name

    # u.first_name = "Evie"

    # u.save()

    # j = User.objects.get(id=1)

    # print j.first_name

    print User.objects.filter(first_name="Nick")

    users = User.objects.raw("SELECT * from wall_user")

    for user in users:
        print user.first_name

    # User.objects.all().delete()
    return HttpResponse("OK")
