from django.db import models
from os.path import join
from django.core.exceptions import ValidationError

def pdf_validator(value):
    if not value.name.endswith('.pdf'):
        raise ValidationError("Only PDF file is supported")

class Message(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=250)
    body = models.TextField("Message body")
    sender_ip = models.GenericIPAddressField('IP')
    mail_sent = models.BooleanField(default=False)
    seen = models.BooleanField(default=False)
    added_at = models.DateTimeField('Added', auto_now_add=True)
    


class Resume(models.Model):
    def filepath(self, filename):
        return join('files', filename)
    file = models.FileField('Resume File', upload_to=filepath, validators=[pdf_validator])
    updated = models.DateTimeField(auto_now=True)
    
