Recipe Management Full-Stack Application
This application allows users to create, view, edit, and delete recipes. It provides user authentication via JWT, where users can log in, create their own recipes, and manage them through an intuitive interface.

Live Demo
Frontend: Recipe Management Frontend
Backend: Recipe Management Backend
Table of Contents
Features
Tech Stack
Installation
Frontend
Backend
API Endpoints
Environment Variables
Deployment
Testing
License
Features
User Authentication: Register and log in using JWT-based authentication.
Recipe Management: Create, view, edit, and delete recipes.
Search Recipes: Filter recipes based on ingredients or cuisine type.
Responsive Design: User-friendly interface using Tailwind CSS for a modern look.
Integration: Seamless communication between frontend and backend using Axios.
Tech Stack
Frontend:

React.js
Tailwind CSS
Axios
Backend:

Node.js
Express.js
MongoDB
Mongoose
JWT (JSON Web Token) for authentication
Multer for image uploads
Deployment:

Frontend: Vercel
Backend: Render
Installation
To set up the project locally, follow these steps:

Prerequisites
Node.js (v14 or above)
MongoDB (local or cloud instance)
NPM or Yarn
2. Install dependencies
For both frontend and backend, you will need to install the dependencies. Run the following commands:

Frontend
bash
Copy code
cd frontend
npm install
Backend
bash
Copy code
cd backend
npm install
3. Set up environment variables
Frontend
Create a .env file in the frontend directory and add the following:

bash
Copy code
Backend
Create a .env file in the backend directory and add the following:

bash
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=7890
4. Running the Application
Frontend
To run the React frontend:

bash
Copy code
cd frontend
npm i
npm start
The application will run on http://localhost:3000.

Backend
To run the Express backend:

bash
Copy code
cd backend
npm i
npm start
The backend will run on http://localhost:7890.