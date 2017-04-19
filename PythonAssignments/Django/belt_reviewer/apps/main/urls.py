from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^process_login$', views.process_login, name='process_login'),
    url(r'^process_registration', views.process_registration, name='process_registration'),
    url(r'^home$', views.show_home_page, name='home'),
    url(r'^logout$', views.logout, name='logout'),
    url(r'^new_book$', views.show_add_book_page, name='new_book'),
    url(r'^process_add_book$', views.process_add_book, name='process_add_book'),
    url(r'^user/(?P<user_id>\d+)$', views.show_user_profile, name='user_page'),
    url(r'^book/(?P<book_id>\d+)$', views.show_book_page, name='book_page'),
    url(r'^add_review/(?P<book_id>\d+)$', views.add_review, name='add_review'),
    url(r'^delete_review/(?P<review_id>\d+)$', views.delete_review, name='delete_review')
]
