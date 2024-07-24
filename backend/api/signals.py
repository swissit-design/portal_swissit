from django.core.mail import EmailMultiAlternatives
from django.dispatch import receiver
from django.template.loader import render_to_string
import os
from email.mime.image import MIMEImage
from django.conf import settings

from django_rest_passwordreset.signals import reset_password_token_created

@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):
    """
    Handles password reset tokens
    When a token is created, an e-mail needs to be sent to the user
    https://github.com/anexia-it/django-rest-passwordreset/tree/master
    """

    context = {
        'current_user': reset_password_token.user,
        'username': reset_password_token.user.username,
        'email': reset_password_token.user.email,
        # 'reset_password_url': "{}?token={}".format(
        #     instance.context.request.build_absolute_uri(reverse('api-portal-swissit:reset-password-confirm')),
        #     reset_password_token.key)
        'reset_password_url': str(settings.REACT_DOMAIN+'password-reset/') + str(reset_password_token.key)
        }
    print(reset_password_token.key)


    # render email text
    email_html_message = render_to_string('api/user_reset_password.html', context)
    email_plaintext_message = render_to_string('api/user_reset_password.txt', context)

    msg = EmailMultiAlternatives(
        # title:
        "Password Reset for {title}".format(title="Some website title"),
        # message title:
        email_plaintext_message,
        # from:
        "lucien.rey@swissit-design.com",
        # to:
        [reset_password_token.user.email]
    )
    msg.attach_alternative(email_html_message, "text/html")

    # adding image content
    msg.mixed_subtype = 'related'
    images = [
    {
        'path': os.path.join(settings.BASE_DIR,  'api/templates/api/image/image-1.png'),
        'cid': 'image1'
    },
    {
        'path': os.path.join(settings.BASE_DIR,  'api/templates/api/image/image-2.png'),
        'cid': 'image2'
    },
    # Add more images as needed
    ]# Attach images as inline
    for image in images:
        try:
            with open(image['path'], 'rb') as img_file:
                img_data = img_file.read()
                mime_image = MIMEImage(img_data)
                mime_image.add_header('Content-ID', '<{}>'.format(image['cid']))
                mime_image.add_header('Content-Disposition', 'inline', filename=os.path.basename(image['path']))
                msg.attach(mime_image)
        except FileNotFoundError:
            print(f"Error: Image file {image['path']} not found.")

    msg.send()