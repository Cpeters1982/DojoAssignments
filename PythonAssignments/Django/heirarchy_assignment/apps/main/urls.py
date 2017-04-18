from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^process_add', views.process_new_employee),
    url(r'^employee/(?P<employee_id>\d+)$', views.show_employee_page),
    url(r'^add_subordinate/(?P<superior_id>\d+)$', views.process_add_subordinate),
    url(r'^add_superior/(?P<subordinate_id>\d+)$', views.process_add_superior)
]
