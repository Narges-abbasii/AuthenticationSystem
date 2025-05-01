# JWT Authentication System with Django and React

A full-stack authentication system using Django REST Framework and React, with JWT tokens for secure user sessions.

## 🔧 Features

- User login with JWT (access and refresh tokens)
- Access token expiration: 1 minute
- Refresh token expiration: 3 minutes
- Auto-refreshing access token using refresh token
- Protected route for authenticated users
- Bootstrap-styled login form
- React frontend using `react-hook-form` and `yup` for validation

## 🛠 Technologies

- Django 5.x
- Django REST Framework
- Simple JWT (`djangorestframework-simplejwt`)
- React 18+
- Vite
- Bootstrap 5
- React Router DOM

## 📦 Back-end Setup

```bash
cd backend/
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

## ⚛️ Front-end Setup
```bash
cd frontend/
npm install
npm run dev
```
## 🔐 JWT Endpoints

- POST /login/: Obtain access & refresh tokens

- POST /refresh/: Refresh the access token

- GET /home/: Protected view (requires valid access token)

## 🗂️ Folder Structure
```
AuthenticationSystem/
├── backend/
│   ├── authapp/        # Django app
│   ├── backend/  # Django project
│   └── manage.py
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├──routes/
│   │   ├──services/
│   │   ├──styles/
│   │   └──utils/
│   └── index.html
```

## 🧪 Example Credentials

You can log in using a superuser or test user created via createsuperuser.

## 📌 Notes

- If the access token expires, a refresh request is automatically sent.

- If the refresh token also expires, the user is redirected to the login page.

- Tokens are stored in localStorage.

## 📄 License

This project is open source and available under the MIT License.

