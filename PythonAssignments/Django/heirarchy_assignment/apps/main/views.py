# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from .models import Employee, Boss_relationship
from django.db.models import Count

# Create your views here.


def index(request):

    context = {
        "employees":Employee.objects.all().annotate(num_subordinates=Count('superior_relationship')),
        "relationships":Boss_relationship.objects.all()
    }

    return render(request, "main/index.html", context)


def process_new_employee(request):

    if request.method == "POST":
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        email = request.POST['email']
        Employee.objects.create(email=email, first_name=first_name, last_name=last_name)
    return redirect('/')

def process_add_subordinate(request, superior_id):
    if request.method == "POST":
        subordinate = Employee.objects.get(pk=request.POST['add_subordinate'])
        superior = Employee.objects.get(pk=superior_id)
        Boss_relationship.objects.create(boss=superior, underling=subordinate)
        return redirect('/employee/' + superior_id)

def process_add_superior(request, subordinate_id):
    if request.method == "POST":
        subordinate = Employee.objects.get(pk=subordinate_id)
        superior = Employee.objects.get(pk=request.POST['add_superior'])
        Boss_relationship.objects.create(boss=superior, underling=subordinate)
        return redirect('/employee/' + subordinate_id)

def show_employee_page(request, employee_id):

    context = {
        "employee":Employee.objects.filter(pk=employee_id).annotate(num_subordinates=Count('superior_relationship')).annotate(num_superiors=Count('subordinate_relationship'))[0],
        "other_employees":Employee.objects.all().exclude(pk=employee_id),
        "relationships":Boss_relationship.objects.filter(boss=employee_id) | Boss_relationship.objects.filter(underling=employee_id)


    }
    print context['employee']
    # print context['employee']['num_employees']
    # print context['employee']['num_superiors']

    return render(request, "main/employee_page.html", context)
