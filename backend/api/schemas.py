from ninja import Schema
from pydantic import EmailStr, Field

class UserSchema(Schema):
    email: EmailStr | None = Field(default=None)
    password: str
