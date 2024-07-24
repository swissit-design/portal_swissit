from ninja_jwt.controller import NinjaJWTDefaultController
from django_rest_passwordreset.controller import ResetPasswordController

from ninja_extra import NinjaExtraAPI
from ninja.errors import HttpError

from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.conf import settings

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
    print(settings.REACT_DOMAIN+'forget-password/')
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