Food Delivery App

This is a web application for food delivery, built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

Table of Contents

- Introduction
- Features
- Installation
- Usage
- Contributing
- License

Introduction

The Food Delivery App is a full-stack web application that allows users to  view menus, place orders, and track their deliveries. The application is built using the MERN stack, providing a robust and scalable solution for managing food delivery operations.

Features

- User registration and authentication
- Restaurant browsing and search functionality
- Menu exploration and item selection
- Cart management and order placement
- Admin dashboard for managing restaurants, menus, and orders

Installation

1. Clone the repository:

   git clone https://github.com/your-username/food-delivery-app.git

2. Navigate to the project directory:

   cd food-delivery-app

3. Install the dependencies for both the server and client:

   cd server && npm install
   cd ../client && npm install

4. Set up environment variables:

   - Create a .env file in the server directory.
   - Define the following variables in the .env file:
     ```
     PORT=3000
     
    

5. Populate the database with initial data ( menus, etc.):

   cd server && npm run seed

6. Start the development server:

   - Open a terminal and navigate to the server directory:

     cd server

   - Run the following command to start the server:

     npm run start

   - Open another terminal and navigate to the client directory:

     cd client

   - Run the following command to start the client:

     npm run start

7. Access the application by visiting http://localhost:3000 in your web browser.

Usage

- Sign up or log in to the application.
- Browse available restaurants and select a desired restaurant.
- Explore the menu, add items to your cart, and customize your order.
- Proceed to the checkout and complete the payment process.
- Track your order status in real-time.
-
- Admin users can access the admin dashboard to manage , menus, and orders.

Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please create a GitHub issue or submit a pull request.

1. Fork the repository.
2. Create your branch: git checkout -b feature/your-feature.
3. Commit your changes: git commit -am 'Add your feature'.
4. Push to the branch: git push origin feature/your-feature.
5. Open a pull request.

License

This project is licensed under the MIT License.
