# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse

def index(request):

    return HttpResponse("Working")


def authenticate_login(request):

    if request.method == "POST":

        email = request.POST['email']
        password = request.POST['password']

        post_data = {
            'email':request.POST['email'],
            'password':request.POST['password']
        }

        login_result = User.objects.login(post_data)

        failed_authentication = False

        try:
            found_user = User.objects.get(email=email)
        except:
            found_user = False

        if len(email) < 1:
            messages.error(request, "Email cannot be left blank!")
            failed_authentication = True
        elif not EMAIL_REGEX.match(email):
            messages.error(request, "Please enter a valid email!")
            failed_authentication = True
        elif not found_user:
            messages.error(request, "No user found with this email address. Please register new user.")
            failed_authentication = True

        if failed_authentication:
            return redirect('/')

        if len(password) < 8:
            messages.error(request, "Password must be at least 8 characters")
            return redirect('/')

        hashed_password = bcrypt.hashpw(str(password), str(found_user.salt))

        if found_user.password != hashed_password:
            messages.error(request, "Incorrect password! Please try again")
            failed_authentication = True


        if failed_authentication:
            return redirect('/')
        else:
            messages.success(request, 'Successfully logged in!')
            request.session['current_user'] = found_user.id
            return redirect('/user_page')



def process_registration(request):

    if request.method == "POST":

        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        email = request.POST['email']
        salt = bcrypt.gensalt()
        hashed_password = bcrypt.hashpw(str(request.POST['password']), salt)

        failed_validation = False

        if len(first_name) < 2:
            messages.error(request, "First name must be at least 2 characters!")
            failed_validation = True
        elif not NAME_REGEX.match(first_name):
            messages.error(request, "First name can only contain letters!")
            failed_validation = True

        if len(last_name) < 2:
            messages.error(request, "Last name must be at least 2 characters!")
            failed_validation = True
        elif not NAME_REGEX.match(last_name):
            messages.error(request, "Last name can only contain letters!")
            failed_validation = True
        try:
            found_user = User.objects.get(email=email)
        except:
            found_user = False

        if len(email) < 1:
            messages.error(request, "Email is required!")
            failed_validation = True
        elif not EMAIL_REGEX.match(email):
            messages.error(request, "Please enter a valid email!")
            failed_validation = True
        elif found_user:
            messages.error(request, "This email is already registered!")
            failed_validation = True

        if len(request.POST['password']) < 1:
            messages.error(request, "Password is required!")
            failed_validation = True
        elif len(request.POST['password']) < 8:
            messages.error(request, "Password must be at least 8 characters")
            failed_validation = True
        elif request.POST['confirm-password'] != request.POST['password']:
            messages.error(request, "Password confirmation failed")
            failed_validation = True

        if failed_validation:
            return redirect('/register')

        User.objects.create(first_name=first_name, last_name=last_name, email=email, password=hashed_password, salt=salt)


        request.session['current_user'] = User.objects.get(email=email).id
        # print session['current_user']
        # print "^ Current user result ^"

        return redirect('/user_page')