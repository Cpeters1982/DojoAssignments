from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.login_page),
    url(r'^register$', views.registration_page),
    url(r'^process_login$', views.authenticate_login),
    url(r'^process_registration$', views.process_registration),
    # url(r'^user_page$', views.show_user_home_page),
    url(r'^logout$', views.log_out_user),
    url(r'^secrets$', views.show_secret_page),
    url(r'^new_secret/(?P<user_id>\d+)$', views.create_new_secret),
    url(r'^delete_secret/(?P<secret_id>\d+)$', views.delete_secret),
    url(r'^like_secret/(?P<secret_id>\d+)/(?P<user_id>\d+)$', views.like_secret),
    url(r'^unlike_secret/(?P<secret_id>\d+)/(?P<user_id>\d+)$', views.unlike_secret)

]
