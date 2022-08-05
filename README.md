<img src="https://mohaimin1935.vercel.app/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fvw284w33rblo%2FN7vOJCd66kUkedWQFL4dl%2Fea3a5c9394e589a580dd8b2efb402eb3%2Fmern-shop.jpg&w=1920&q=75" />

# MERN SHOP
A complete MERN stack e-commerce application.

Visit demo website: https://mern-shop-35.herokuapp.com/

## Introduction
This is a mern-stack ecommerce web app. It has many logical operations used in real world, like, crud operation, user authentication and authorization with JWT, filtering and sorting dynamically, state management with Context API etc.

## Project Structure:
The code has mainly two parts - backend and frontend.

### Backend: 
Used technologies are Node JS, Express JS, Mongodb. It has models (using mongoose), middlewares (for authentication) and routes (including controllers). The Cart and Order model is incomplete. I made them for using in admin dashboard. But till now, I have not worked in admin dashboard. The rest codes are complete and fully functional. The middlewares are responsible for verifying token and role in protected routes. As there were simpler logics, so the controllers are implemented in the routes part.

### Frontend: 
Used technologies are react and tailwind css. I used modern functional components and context API for state management. Axios instances are used for api calls. The frontend mainly handles the filtering and sorting products except some heavy processes.


## Learning through this project

- Node and Express Backend
- MongoDB query and pipeline
- User Authentication
- Json Web Token
- Stripe Payment
- Context API
- Cart Operations
- Intermediate React JS
- Tailwind CSS
- Heroku Deployment

## Run in local machine

- Clone the project
- Go to backend directory and run `npm install`.
- The .env file contained mongo uri, passwork hashing, jwt and stripe keys.
- Run `npm start`.
- The backend server should in `localhost:5000`.
- Go to frontend directory and run `npm install`.
- Run `npm start`.
- The frontend application should in `localhost:3000`.
