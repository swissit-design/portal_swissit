import os
from .settings import *
from .settings import BASE_DIR

ALLOWED_HOSTS = [os.environ['WEBSITE_HOSTNAME']]
CSRF_TRUSTED_ORIGINS = ['https://'+os.environ['WEBSITE_HOSTNAME']]
DEBUG = False

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

CORS_ALLOWS_ORIGINS = []

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
    'ENGINE': 'mssql',
    'NAME': os.getenv('SQLDATABASE'),
    'USER': os.getenv('SQLUSER'),
    'PASSWORD': os.getenv('SQLPASSWORD'),
    'HOST': os.getenv('SQLHOST'),
    'PORT': os.getenv('SQLPORT'),
    'OPTIONS': {
      'sslmode': 'require',
    },
  }
}

STATIC_ROOT = os.path.join(BASE_DIR, 'static')