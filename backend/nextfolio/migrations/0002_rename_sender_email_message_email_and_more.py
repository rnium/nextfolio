# Generated by Django 5.1.1 on 2024-09-23 17:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('nextfolio', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='message',
            old_name='sender_email',
            new_name='email',
        ),
        migrations.RenameField(
            model_name='message',
            old_name='sender_name',
            new_name='name',
        ),
    ]
