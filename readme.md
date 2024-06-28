# Portal Swiss IT Design - July 2024
- client area where we will store all info on the client side
- authentication username password
- adding all bills, subscription and notes
- FR, DE, EN

# App design
- Frontend -> React, Tailwind, thailadmin, Daisyui
- Backend -> Django rest API for CRUD - create, retrieve, update, delete
- Database -> trying MongoDB
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