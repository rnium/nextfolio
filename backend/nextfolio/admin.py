from typing import Dict, Optional
from django.contrib import admin
from django.http.request import HttpRequest
from django.http.response import HttpResponse
from . import models

class MessageAdmin(admin.ModelAdmin):
    readonly_fields = ['name', 'email', 'added_at', 'sender_ip', 'subject', 'body', 'mail_sent']
    list_display = ['added_at', 'name', 'subject', 'seen']
    date_hierarchy = 'added_at'
    fieldsets = [
        (
            None,
            {
                'fields': ['mail_sent']
            }
        ),
        (
            'Sender Info',
            {
                'fields': ['name', 'email', 'sender_ip', 'added_at']
            }
        ),
        (
            'Message',
            {
                'fields': ['subject', 'body']
            }
        ),
        
    ]
    def change_view(self, request: HttpRequest, object_id: str, extra_context = None, *args, **kwargs) -> HttpResponse:
        extra_context = extra_context or {}
        extra_context['title'] = "View message"
        message = self.get_object(request, object_id)
        if message and not message.seen:
            message.seen = True
            message.save()
        return super().change_view(request, object_id, extra_context=extra_context, *args, **kwargs)

class ResumeAdmin(admin.ModelAdmin):
    readonly_fields = ['updated']
    

admin.site.register(models.Message, MessageAdmin)
admin.site.register(models.Resume, ResumeAdmin)