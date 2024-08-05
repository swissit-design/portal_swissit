import os
from os import getenv
from .settings import *
from .settings import BASE_DIR

ALLOWED_HOSTS = [os.environ['WEBSITE_HOSTNAME']]
CSRF_TRUSTED_ORIGINS = ['https://'+os.environ['WEBSITE_HOSTNAME']]
DEBUG = True

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',# Add whitenoise middleware after the security middleware  
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',
]

CORS_ALLOWS_ORIGINS = [os.path.join(BASE_DIR, 'REACT_DOMAIN')]

STORAGES = {
    "default": {
        "BACKEND": "django.core.files.storage.FileSystemStorage",
    },
    "staticfiles": {
        "BACKEND": "whitenoise.storage.CompressedManifestStaticFilesStorage",
    },
}

DATABASES = {
  'default': {
    'ENGINE': 'django.db.backends.postgresql',
    'NAME': getenv('PGDATABASE'),
    'USER': getenv('PGUSER'),
    'PASSWORD': getenv('PGPASSWORD'),
    'HOST': getenv('PGHOST'),
    'PORT': getenv('PGPORT', 5432),
    'OPTIONS': {
      'sslmode': 'require',
    },
  }
}

STATIC_ROOT = os.path.join(BASE_DIR, 'static')
REACT_DOMAIN = os.path.join(BASE_DIR, 'REACT_DOMAIN')