# Portal Swiss IT Design - July 2024
- client area where we will store all info on the client side
- authentication username password
- adding all bills, subscription and notes
- FR, DE, EN

# App design
- Frontend -> React with Vite - might use Tailwind, thailadmin, Daisyui for styling
- Backend -> Django rest API for CRUD - create, retrieve, update, delete
- Database -> postgresSQL from neon https://console.neon.tech/app/projects free tier
- Email with Zoho
- Storage of files with Azure Docs
- Deployment- Vercel or Azure, will test it accordingly - Choreo also possible

# Backend Setup and Installation
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
```
2. Adding the api_test.rest to test the request when authentication and others - make sure you install the extensions in VS code called REST CLIENT.

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