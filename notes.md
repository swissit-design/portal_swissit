# Notes for Portal SwissIT Webapp
# Backend Setup and Installation 
- decided to use django-ninja instead of REACt FRAMEWORK
- https://django-ninja.dev/
- with ninja_extra and ninja_jwt as well

1. make sure you have venv install on your machine if not there, run
```bash
virtualenv venv -p=python3.10
source venv/bin/activate
pip install poetry
```
2. Use Poetry for the installation of all packages with pyprojects.toml. Poetry replaces setup.py, requirements.txt, setup.cfg, MANIFEST.in and Pipfile with a simple pyproject.toml based project format.
```bash
poetry install
poetry add django # to add dependency
poetry add  "djongo@*" --dry-run # if issue with dependcy
poetry export --without-hashes -f requirements.txt --output requirements.txt # when deploying to Azure, easier
```
2. Adding the api_test.rest to test the request when authentication and others - make sure you install the extensions in VS code called REST CLIENT.

2. Deployment.py added for Azure deployment. if you want to run a django with deployment/production script
```bash
python manage.py runserver --settings backend.deployment
```
2. Run server locally with django -> http://127.0.0.1:8000/api/docs
```bash
python manage.py runserver
```

# Frontend Setup and Installation
1. install React front end
```bash
npm create vite@latest frontend -- --template react
cd frontend/
npm install axios react-router-dom jwt-decode
```
1. Axios will help adding headers when calling api from django. All constants are in constants.js
1. We will be using Tailwind and Daisyui 
```bash
# https://tailwindcss.com/docs/guides/vite
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
1. run the dev server 
```bash
npm run dev
```
1. To change font
- go to google font and paste the whole ```<head>``` to index.html
- change tailwind.config.js
```javascript
fontFamily: {
'sans': ['"Playwrite US Modern"', ...defaultTheme.fontFamily.sans], //set main font
},
```
1. passowrd reset on django ninja
https://github.com/eadwinCode/django-ninja-passwordreset/tree/master

1. SVG Illustrations
    - taken from https://undraw.co/illustrations

1. My colors for SwissIT Design
    - REACT with tailwindcss: https://tailwindcss.com/docs/customizing-colors#default-color-palette
        - sky-800 for button -> #075985
        - sky-700 for button hover -> #0369a1


1. nice example to follow for my app
- https://fly.io/dashboard - using Tailwind CSS