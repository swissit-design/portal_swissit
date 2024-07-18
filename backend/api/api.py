from ninja_jwt.controller import NinjaJWTDefaultController
from ninja_extra import NinjaExtraAPI
from ninja.errors import HttpError

from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError

# Import the DB Schemas
from .schemas import UserSchema

api = NinjaExtraAPI()

## adding all JWT functions
api.register_controllers(NinjaJWTDefaultController)

@api.get('/test')
def test(request):
    return {'test':'success'}

@api.post("/register", auth=None)
def register(request, payload: UserSchema):
    if User.objects.filter(username=payload.username).exists():
        raise HttpError(400, "Username already exists")

    try:
        validate_password(payload.password)
    except ValidationError as e:
        raise HttpError(400, e.messages[0])

    User.objects.create_user(username=payload.username, password=payload.password)
    return {"message": "User created successfully"}