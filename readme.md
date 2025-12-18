*Small Restaurant Order Management Systemgi


Overview
This project is a Small Restaurant Order Management System built using Node.js, Express.js, and MongoDB. It allows managing menus and orders, with a backend RESTful API following the MVC architecture.
________________________________________
Features
•	Add, view, and manage menu items.
•	Create and view customer orders.
•	Orders calculate total amounts automatically.
•	MVC architecture: Models, Controllers, Routes.
•	MongoDB integration using Mongoose.
•	Input validation and error handling.
•	JSON responses for API endpoints.
________________________________________
Tech Stack
•	Node.js: JavaScript runtime.
•	Express.js: Web framework.
•	MongoDB: Database.
•	Mongoose: MongoDB object modeling.
•	dotenv: Environment variable management.
•	nodemon: Development auto-reload.
________________________________________
Project Structure
├── models/
│   ├── Menu.js          # Mongoose schema for menu items
│   └── Order.js         # Mongoose schema for ordersg
├── controllers/
│   ├── menuController.js # Handles menu CRUD operations
│   └── orderController.js # Handles order creation
├── routes/
│   ├── menuRoutes.js     # Menu API routes
│   └── orderRoutes.js    # Order API routes
├── server.js             # Entry point for the server
└── .env                  # Environment variables
________________________________________
Installation
1.	Clone the repository.
2.	Install dependencies:
npm install
3.	Create a .env file:
PORT=3000
MONGODB_URI=mongodb://localhost:27017/restaurant_db
4.	Start MongoDB server.
5.	Run the application:
npm run dev
________________________________________
API Endpoints
Menu
•	Get all menu items: GET /api/menu
•	Add menu item: POST /api/menu
Request body example:
{
  "name": "Coke",
  "price": 1.5,
  "description": "Refreshing soda"
}
Orders
•	Create order: POST /api/orders
Request body example:
{
  "items": [
    {"menuId": "<menu_item_id>", "quantity": 2},
    {"menuId": "<menu_item_id>", "quantity": 1}
  ]
}
•	Get all orders: GET /api/orders
________________________________________
Usage Instructions
1.	Start the server.
2.	Use Postman or similar API tool to send requests to the endpoints.
3.	Add menu items first, then create orders using their menuId.
4.	Orders will automatically calculate the total amount.
________________________________________
Error Handling
•	Items must be a non-empty array: Ensure items is an array with at least one object.
•	Menu item not found: Ensure the menuId exists in the database.
•	Cannot GET /api/orders: Check that you are using the correct route and method.
•	Port in use error (EADDRINUSE): Stop any running server on port 3000.
________________________________________
Notes for Teacher Maray
•	The system demonstrates CRUD operations for menu and order management.
•	MVC structure separates business logic from routes.
•	MongoDB handles data persistence.
•	Proper error messages and JSON responses are implemented.
•	Tested with Postman to ensure all API endpoints work correctly.

