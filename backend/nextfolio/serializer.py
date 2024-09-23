from .models import Message
from rest_framework.serializers import ModelSerializer
from rest_framework import serializers


class MessageSerializer(ModelSerializer):
    class Meta:
        model = Message
        fields = "__all__"