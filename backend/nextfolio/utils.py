from django.conf import settings
from django.utils import timezone
from datetime import timedelta
from django.core.exceptions import ValidationError
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from .models import Message, VisitLog
from requests import get


sendgrid_api_key = settings.SG_API_KEY
sendgrid_from_email = settings.SG_FROM_EMAIL
owner_email = settings.OWNER_EMAIL
GLOBAL_MESSAGE_LIMIT = settings.GLOBAL_MESSAGE_LIMIT
PER_IP_MSG_LIMIT = settings.PER_IP_MESSAGE_LIMIT


def send_html_email(receiver, subject, body):
    message = Mail(
        from_email=(sendgrid_from_email, "SI Rony"),
        to_emails=receiver,
        subject=subject,
        html_content=body
    )

    sg = SendGridAPIClient(sendgrid_api_key)
    response = sg.send(message)
    status = response.status_code
    if status >= 400:
        raise ValidationError("API Error")


def send_new_message_email(msg_obj: Message):
    try:
        send_html_email(
            owner_email,
            f"New Message: {msg_obj.subject}",
            msg_obj.body
        )
    except:
        return
    msg_obj.mail_sent = True
    msg_obj.save()


def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip


def has_limit(sender_ip):
    todays_msg = Message.objects.filter(
        added_at__gte = timezone.now() - timedelta(days=1)
    )
    todays_msg_from_ip = todays_msg.filter(sender_ip=sender_ip)
    if (todays_msg.count() >= GLOBAL_MESSAGE_LIMIT or 
        todays_msg_from_ip.count() >= PER_IP_MSG_LIMIT):
        return False
    return True


def get_ip_info(ip):
    required_fields = ['city', 'region', 'country_name']
    res = get(f"https://ipapi.co/{ip}/json/")
    json_data = {}
    if res.ok:
        json_data = res.json()
    ip_info = {}
    for field in required_fields:
        ip_info[field] = json_data.get(field)
    return ip_info
      

def update_log(log: VisitLog):
    log.total_visits += 1
    log.last_visit = timezone.now()
    if not (log.city and log.region and log.country_name):
        ip_info = get_ip_info(log.ip_addr)
        for key, value in ip_info.items():
            setattr(log, key, value)
    log.save()