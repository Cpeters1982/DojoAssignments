from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^ninja/$', views.ninjas),
    url(r'^ninja/(?P<color>\w+)$', views.ninja)
]
