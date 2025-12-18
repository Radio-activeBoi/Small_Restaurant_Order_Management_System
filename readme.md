# Small Restaurant Order Management System

## Overview
This project is a Small Restaurant Order Management System built using Node.js, Express.js, and MongoDB. It allows managing menus and orders through a RESTful API that follows the MVC (Model–View–Controller) architecture.

________________________________________

## Features
• Add, view, and manage menu items.  
• Create and view customer orders.  
• Orders automatically calculate total amounts.  
• MVC architecture: Models, Controllers, Routes.  
• MongoDB integration using Mongoose.  
• Input validation and proper error handling.  
• Clean JSON responses for all API endpoints.

________________________________________

## Tech Stack
• Node.js – JavaScript runtime environment.  
• Express.js – Web application framework.  
• MongoDB – NoSQL database.  
• Mongoose – MongoDB object modeling.  
• dotenv – Environment variable management.  
• nodemon – Development auto-reload tool.

________________________________________

## Project Structure
├── models/  
│   ├── Menu.js           # Mongoose schema for menu items  
│   └── Order.js          # Mongoose schema for orders  
├── controllers/  
│   ├── menuController.js # Menu CRUD logic  
│   └── orderController.js# Order processing logic  
├── routes/  
│   ├── menuRoutes.js     # Menu API routes  
│   └── orderRoutes.js    # Order API routes  
├── server.js             # Server entry point  
└── .env                  # Environment variables  

________________________________________

## Installation
1. Clone the repository.  
2. Install dependencies:  
npm install  

3. Create a `.env` file:  
PORT=3000  
MONGODB_URI=mongodb://localhost:27017/restaurant_db  

4. Start the MongoDB server.  
5. Run the application:  
npm run dev  

________________________________________

## API Endpoints

Menu  
• Get all menu items: GET /api/menu  
• Add menu item: POST /api/menu  

Request body example:
```json
{
  "name": "Coke",
  "price": 1.5,
  "description": "Refreshing soda"
}

• Get all orders: GET /api/orders

Usage Instructions

Start the server.

Use Postman or similar API testing tools.

Add menu items before creating orders.

Use the menuId from the menu collection when ordering.

Orders automatically compute the total amount.

Error Handling

• Items must be a non-empty array – Items should contain at least one object.
• Menu item not found – Provided menuId does not exist.
• Cannot GET /api/orders – Incorrect route or HTTP method.
• EADDRINUSE – Port 3000 is already in use.