# 🛍️ BuyGo – Fullstack E-commerce App (Django + React)

**BuyGo** is a full-featured single-vendor e-commerce platform built with **Django** (backend) and **React** (frontend). The app includes user authentication, product browsing, cart management, secure checkout, and real payment integrations via **Flutterwave** and **PayPal**.

---

## ✨ Core Features

- 🧑 User registration & login
- 📦 Product listing & detail views
- 🛍️ Add/remove/update cart items
- 💰 Checkout process with real payments
- 🔐 JWT authentication and route protection
- 📋 Order history and user profile
- 🌍 Payment via **Flutterwave** & **PayPal**
- ⚙️ Full backend + frontend deployment
- ⚠️ Error components, loading states, alerts (Toastify)

---

## 🛠️ Tech Stack

| Layer       | Tech                         |
|-------------|------------------------------|
| Frontend    | React, React Router, Axios   |
| Backend     | Django, Django REST Framework|
| Auth        | JWT (Simple JWT)             |
| DB          | MariaDB / SQLite             |
| Payment     | Flutterwave, PayPal          |
| Styling     | Tailwind CSS / CSS Modules   |


---
## 🎬Demo available at: https://buygo.onrender.com
---
## 🔐 Test Credentials

| Type | Credential   |
|------|--------------|
| User | `TestNet`    |
| Pass | `test123456` |

---

## 💳 Test Payment Details

> ⚠️ Use these only in **test/sandbox mode**. Provided by **Flutterwave** for testing payment flows.

| Field        | Value                 |
|--------------|-----------------------|
| Card Type    | Mastercard            |
| Card Number  | `5531 8866 5214 2950` |
| Expiry Date  | `09/32`               |
| CVV          | `564`                 |
| OTP          | `12345`               |
| PIN          | `3310`                |

## 🚀 Getting Started Locally
---

## 📦 Requirements

- Python 3.8+
- Node.js v16+
- npm / yarn
- SQLite
- pip + virtualenv (recommended)
---

### Comand Prompts

```bash
## Backend setup
git clone https://github.com/kubadewerenda/BuyGo-Single-vendor-Django-React.git
cd BuyGo-Single-vendor-Django-React
cd buygo

# Create virtual environment
python -m venv venv
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Migrate database
python manage.py migrate

# Start server
python manage.py runserver

## Frontend setup
cd buygo_app

# Install dependencies
npm install

# Start development server
npm run dev


