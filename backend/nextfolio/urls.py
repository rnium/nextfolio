from django.urls import path
from . import views

urlpatterns = [
    path('logvisit/', views.log_vist, name='log_vist'),
    path('sendmessage/', views.send_message, name='send_message'),
    path('getresume/', views.download_resume, name='download_resume'),
]
