# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.contrib.messages import get_messages
from django.contrib import messages
import re, bcrypt
from .models import User


EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'^[a-zA-Z]+$')


def login_page(request):
    if "current" in request.session.keys():
        print request.session['current_user']
    else:
        print "There is no user currently logged in"

    context = {
        'messages':get_messages(request)
    }

    return render(request, 'main/index.html', context)


def registration_page(request):

    context = {
        'messages':get_messages(request)
    }

    return render(request, 'main/register.html', context)


def authenticate_login(request):

    if request.method == "POST":

        post_data = {
            'email':request.POST['email'],
            'password':request.POST['password']
        }

        login_result = User.objects.login(post_data)


        if login_result['result'] == "failed_authentication":
            if 'messages' in login_result.keys():
                for message in login_result['messages']:
                    messages.error(request, message)
            return redirect('/')
        else:
            if 'user' in login_result.keys():
                request.session['current_user'] = login_result['user'].id
                if 'messages' in login_result.keys():
                    for message in login_result['messages']:
                        messages.success(request, message)
            else:
                messages.error(request, "Something went wrong")
                return redirect('/')

            return redirect('/user_page')



def process_registration(request):

    if request.method == "POST":

        post_data = {
            'first_name':request.POST['first_name'],
            'last_name':request.POST['last_name'],
            'email':request.POST['email'],
            'password':request.POST['password'],
            'confirm_password':request.POST['confirm_password']
        }

        register_result = User.objects.register(post_data)

        if register_result['result'] == "failed_validation":
            if 'messages' in register_result.keys():
                for message in register_result['messages']:
                    messages.error(request, message)
            return redirect('/register')
        else:
            if 'user' in register_result.keys():
                request.session['current_user'] = login_result['user'].id
                if 'messages' in register_result.keys():
                    for message in register_result['messages']:
                        messages.success(request, message)
            else:
                messages.error(request, "Something went wrong")
                return redirect('/register')
            return redirect('/user_page')

    return redirect('/register')


def show_user_home_page(request):

    if "current_user" in request.session.keys():

        context = {
            "user":User.objects.get(pk=request.session['current_user']),
            'messages':get_messages(request)
        }
        return render(request, 'main/user_page.html', context)

    return render(request, 'main/user_page.html')

def log_out_user(request):
    request.session.clear()
    messages.success(request, "Successfully logged out")

    return redirect('/')
