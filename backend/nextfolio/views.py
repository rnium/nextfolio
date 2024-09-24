from django.conf import settings
from django.http import FileResponse, HttpResponseServerError
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializer import MessageSerializer
from . import utils
from .models import Resume
import time


@api_view(['POST'])
def send_message(request):
    data = request.data.copy()
    sender_ip = utils.get_client_ip(request)
    if not utils.has_limit(sender_ip):
        return Response({
            'title': 'Today\'s Limit Reached',
            'description': f'Please use other medium or try again tomorrow'
        }, status=status.HTTP_429_TOO_MANY_REQUESTS)
    data['sender_ip'] = sender_ip
    serializer = MessageSerializer(data=data)
    if serializer.is_valid():
        msg_obj = serializer.save()
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if settings.EMAIL_NOTIF_ON:
        utils.send_new_message_email(msg_obj)
    return Response('Message Sent')


def download_resume(request):
    time.sleep(1)
    resume = Resume.objects.all().first()
    if not resume:
        return HttpResponseServerError("<h1>Resume is not in the server</h1>")
    return FileResponse(
        open(resume.file.path, 'rb'),
        filename=f"{settings.OWNER_NAME.lower()}_resume.pdf"
    )