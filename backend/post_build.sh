# Add manually the migration function when deploying migration as well
# This needs to be added manually to Azure Web APPS as new variable -> POST_BUILD_SCRIPT_PATH
# adding also this cmd linke to Startup Settings to install poetry
python manage.py migrate