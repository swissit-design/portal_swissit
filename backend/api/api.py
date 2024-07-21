from ninja_jwt.controller import NinjaJWTDefaultController
from django_rest_passwordreset.controller import ResetPasswordController

from ninja_extra import NinjaExtraAPI
from ninja.errors import HttpError

from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError

from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.urls import reverse

# Import the DB Schemas
from .schemas import UserSchema

# adding urlnamespace for future use with reverse url now called -> api-portal-swissit:token_obtain_pair
# to see all urls - pip install django-extensions - python manage.py show_urls
api = NinjaExtraAPI(urls_namespace='api-portal-swissit')

## adding all JWT functions
api.register_controllers(NinjaJWTDefaultController)

## adding the password reset path
api.register_controllers(ResetPasswordController)

@api.get('/test')
def test(request):
    return {'test':'success'}

@api.post("/register", auth=None)
def register(request, payload: UserSchema):
    if User.objects.filter(username=payload.username).exists():
        raise HttpError(400, "User already exists")

    try:
        validate_password(payload.password)
    except ValidationError as e:
        raise HttpError(400, e.messages[0])

    User.objects.create_user(username=payload.username, password=payload.password, email=payload.username)
    return {"message": "User created successfully"}

@api.post("/send_email_password_reset", auth=None)
def send_email_password_reset(request, token, email):
    try:
        context = {
            'email': email,
            'reset_password_url': "{}?token={}".format(
                request.build_absolute_uri(reverse('api-portal-swissit:reset-password-confirm')),
                token)
        }
        
        # render email text
        email_html_message = render_to_string('api/user_reset_password.html', context)
        email_plaintext_message = strip_tags(email_html_message)

        msg = EmailMultiAlternatives("Password Reset for SwissIT Design", email_plaintext_message, "lucien.rey@swissit-design.com", [email])
        msg.attach_alternative(email_html_message, "text/html")
        msg.send()
        return {"message": "Email password reset sent successfully"}
    
    except ValidationError as e:
        raise HttpError(400, e.messages[0])