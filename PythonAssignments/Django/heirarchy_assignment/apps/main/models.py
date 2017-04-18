# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class EmployeeManager(models.Manager):
    pass


class Employee(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Boss_relationship(models.Model):
    boss = models.ForeignKey(Employee, related_name="superior_relationship")
    underling = models.ForeignKey(Employee, related_name="subordinate_relationship")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
