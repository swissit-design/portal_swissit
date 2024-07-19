from ninja import Schema

class UserSchema(Schema):
    username : str
    password: str
