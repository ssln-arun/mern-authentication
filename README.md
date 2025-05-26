# MERN Authentication

<br>

## Overview

This is a full-stack MERN (MongoDB, Express, React, Node.js) authentication system. It includes user registration, login, protected routes, and logout, using JWT-based authentication and secure HTTP-only cookies. The backend is built with Express and MongoDB, while the frontend uses React, Redux Toolkit, and Tailwind CSS.
It follows modern best practices for handling authentication securely on both client and server sides. The project is structured for scalability and can serve as a solid foundation for any MERN-based application.

## Features

- **User Registration**  
  Create a new user account with secure password hashing using bcrypt.

- **Secure Login**  
  Authenticate users and manage sessions with JWT stored in HTTP-only cookies.

- **Protected Routes**  
  Access user-specific data only when authenticated, using middleware for JWT verification.

- **User Profile Management**  
  Fetch and update user profile information securely.
  
- **Logout Functionality**  
  Easily log out by clearing the authentication cookie on the client side.

- **Responsive UI**  
  Modern and mobile-friendly interface built with Tailwind CSS and React.

- **Real time Feedback**  
  Instant visual responses using React Toastify and loading indicators via React Spinners.


## Technologies Used

This project is built using the following technologies:

### Backend

- **Node.js & Express** for REST API  
- **MongoDB & Mongoose** for data modeling  
- **bcryptjs** for password hashing  
- **jsonwebtoken** for JWT creation & verification  
- **cookie-parser** for reading/writing HTTP-only cookies  
- **express-async-handler** for cleaner async route handlers  
- **dotenv** for environment configuration

### Frontend

- **React** (Vite) for UI  
- **Redux Toolkit** for global state  
- **Tailwind CSS** for utility-first styling  
- **react-toastify** for notifications  
- **react-spinners** for loading states  

### Utilities (Dev)

- **concurrently** to run client & server together  
- **nodemon** for automatic server restarts

---

## Project Preview

<p align="center">
  <img src="https://github.com/user-attachments/assets/d16d49f9-cdd2-4677-8f81-e84735580b64" alt="Screenshot 1" width="45%" />
  <img src="https://github.com/user-attachments/assets/ef3b372c-3f4a-4704-b315-d0ea6415e6f3" alt="Screenshot 2" width="45%" />
</p>
<p align="center">
  <img src="https://github.com/user-attachments/assets/a9318bc7-d95f-41f3-b51c-f03080b47170" alt="Screenshot 3" width="45%" />
  <img src="https://github.com/user-attachments/assets/b0b1488a-6e8a-4423-a57a-6c7e32c18883" alt="Screenshot 4" width="45%" />
</p>


## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) instance (local or Atlas)
  
  Clone this repository

    ```bash
    git clone https://github.com/ssln-arun/mern-authentication.git
    ```
    
## Backend Setup
1. Navigate to the backend folder:

    ```bash
    cd backend
    ```

2. Install backend dependencies:
    
    ```bash
    npm install
    ```

3. Create a .env file in backend/ directory and add the following:
   
    ```bash
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```
    Replace your_mongodb_connection_string with your actual MongoDB URI.


5. (Optional) Install nodemon for development:
   
    ```bash
    npm install --save-dev nodemon
    ```

6. Add or check this in backend/package.json to enable npm start:
   
    ```bash
    "scripts": {
    "start": "node server.js",
    "server": "nodemon server.js"
    }
    ```

7. Start the backend server:
   
     ```bash
     npm start
     ```
    or
   
    ```bash
    npm run server
    ```
   The backend will run on: http://localhost:5000

## Frontend Setup

1. Navigate to the frontend folder:
    
    ```bash
    cd ../frontend
    ```

2. Install frontend dependencies:
   
    ```bash
    npm install
    ```

3. Start the frontend app:
   
    ```bash
    npm run dev
    ```
   
   The frontend will run on: http://localhost:3000/

   Note: Make sure your backend (http://localhost:5000) is running before starting the frontend to avoid API errors.

## Running Frontend & Backend Together
To run both servers concurrently during development:

1. Install concurrently for development:

    ```bash
    npm install concurrently --save-dev
    ```

3. From the project root, add this script to your package.json:

    ```bash
    "scripts": {
    "dev": "concurrently \"npm run dev --prefix backend\" \"npm start --prefix frontend\""
    }
    ```
4. Start both with:

    ```bash
    npm run dev
    ```

## API Endpoints

This app provides the following authentication related API routes:

### Auth Routes

#### `POST /api/users/register`
Registers a new user.  
**Body Parameters:**
- `name`: string
- `email`: string
- `password`: string

#### `POST /api/users/login`
Authenticates a user and sets a JWT token in an HTTP-only cookie.  
**Body Parameters:**
- `email`: string
- `password`: string

#### `GET /api/users/profile`
Returns the current authenticated user's data.  
**Protected route** – requires a valid JWT in an HTTP-only cookie.

#### `PUT /api/users/profile`
Updated the current authenticated user's data.  
**Protected route** – requires a valid JWT in an HTTP-only cookie.

#### `POST /api/users/logout`
Logs the user out by clearing the JWT cookie on the client.


## Authentication Flow

### Registration
- Client sends name, email, and password.
- Server hashes the password using `bcryptjs` and stores the user.
- JWT is signed and sent via an HTTP-only cookie.

### Login
- Client sends email and password.
- Server verifies credentials and sends a new JWT cookie.

### Protected Routes
- Middleware extracts JWT from cookie, verifies it, and adds user to `req.user`.

### Logout
- Server clears the JWT cookie on logout request.
