# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import messages
from django.db import models
import re, bcrypt


EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'^[a-zA-Z]+$')


class UserManager(models.Manager):
    def login(self, postData):
        print "running login function"

        failed_authentication = False

        try:
            found_user = User.objects.get(email=email)
        except:
            found_user = False

        if len(postData['email']) < 1:
            messages.error(request, "Email cannot be left blank!")
            failed_authentication = True
        elif not EMAIL_REGEX.match(postData['email']):
            messages.error(request, "Please enter a valid email!")
            failed_authentication = True
        elif not found_user:
            messages.error(request, "No user found with this email address. Please register new user.")
            failed_authentication = True

        if failed_authentication:
            return {'result':"failed_authentication"}

        if len(password) < 8:
            messages.error(request, "Password must be at least 8 characters")
            return {'result':"failed_authentication"}


        hashed_password = bcrypt.hashpw(str(password), str(found_user.salt))

        if found_user.password != hashed_password:
            messages.error(request, "Incorrect password! Please try again")
            failed_authentication = True


        if failed_authentication:
            return {'result':"failed_authentication"}
        else:
            messages.success(request, 'Successfully logged in!')
            request.session['current_user'] = found_user.id
            return {'result':'success'}

    def register(self, postData):
        print "running register function"

        pass



class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    salt = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

class Secret(models.Model):
    content = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, related_name="secrets")

class Like(models.Model):
    user = models.ForeignKey(User, related_name="likes")
    secret = models.ForeignKey(Secret, related_name="likes")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
