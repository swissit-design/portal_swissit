from django.core.mail import EmailMultiAlternatives
from django.dispatch import receiver
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.shortcuts import render, redirect

from django_rest_passwordreset.signals import reset_password_token_created

@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):
    """
    Handles password reset tokens
    When a token is created, an e-mail needs to be sent to the user
    """
    redirect('api-portal-swissit:send_email_password_reset', token=reset_password_token.key, email=reset_password_token.user.email)