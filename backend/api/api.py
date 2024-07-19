from ninja_jwt.controller import NinjaJWTDefaultController
from django_rest_passwordreset.controller import ResetPasswordController

from ninja_extra import NinjaExtraAPI
from ninja.errors import HttpError

from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError

# Import the DB Schemas
from .schemas import UserSchema

# Import CustomUser
User = get_user_model()


api = NinjaExtraAPI()

## adding all JWT functions
api.register_controllers(NinjaJWTDefaultController)

## adding the password reset path
api.register_controllers(ResetPasswordController)

@api.get('/test')
def test(request):
    return {'test':'success'}

@api.post("/register", auth=None)
def register(request, payload: UserSchema):
    if User.objects.filter(email=payload.email).exists():
        raise HttpError(400, "Email already exists")

    try:
        validate_password(payload.password)
    except ValidationError as e:
        raise HttpError(400, e.messages[0])

    User.objects.create_user(email=payload.email, password=payload.password)
    return {"message": "Email created successfully"}