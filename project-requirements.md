# Requirement Document for React.js Project: Blog and E-Commerce Platform

## Objective:
You are tasked with building a basic Blog and E-commerce platform using React.js. The project will involve fetching data from fake APIs to display blog posts and products, implement authentication, manage a shopping cart, and implement a user dashboard with authentication protection.

---

## Project Scope:
This project will test your ability to:
1. Create a multi-page React application.
2. Implement user authentication (login, signup, logout).
3. Fetch and display data from APIs.
4. Implement routing and dynamic pages.
5. Manage user interaction with a cart.
6. Protect certain routes based on authentication.
7. Use state management to control the data flow.

---

## Requirements:

### 1. Setup & Project Structure
- Use **Next.js 14** or **Create React App** to set up the project.
- Follow the standard React project structure with separate folders for:
  - `components`: Reusable UI components.
  - `pages` or `views`: Pages for blog, product listing, cart, authentication, and user dashboard.
  - `services`: Axios or Fetch logic for making API requests.
  - `assets`: For storing static assets like images or fonts (if any).
  - `auth`: Logic for managing user authentication state (either using Firebase, JWT, or custom logic).

---

### 2. Authentication Pages

#### **2.1. Sign Up Page**
- Create a **Sign Up** page where users can create an account.
- Fields required: **Username**, **Email**, **Password**, and **Confirm Password**.
- Show validation errors for:
  - Password length (minimum 6 characters).
  - Passwords not matching.
  - Invalid email format.

#### **2.2. Login Page**
- Create a **Login** page where users can log in using their email and password.
- If the login is successful, redirect the user to the **User Dashboard** page.

#### **2.3. Logout**
- Create a **Logout** functionality that logs the user out and redirects them back to the home page.

#### **Authentication API (for Simplicity)**:
You can either create a custom authentication mechanism or use a simple fake authentication flow for this project.

- Use [Fake Authentication API](https://reqres.in/api/login) for login testing:
  - **POST** `https://reqres.in/api/login` with body: `{ "email": "eve.holt@reqres.in", "password": "cityslicka" }` to get a token.
  
Alternatively, you can mock the authentication process in the app state using **localStorage** or **Redux**.

---

### 3. Blog Section

- **API Source**: Use the [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) API for blog posts.
  
- **Features**:
  - Create a **Blog Home Page** that displays a list of blog posts (fetch from `/posts` endpoint).
  - Each post should show a **title** and a **short description** (use a slice of the body for the description).
  - Add a **"Read More"** button for each post. When clicked, the user should navigate to a **Blog Detail Page**.
  
- **Blog Detail Page**:
  - This page should fetch the specific post's details using its **ID** and display the full title and body of the post.
  - API for fetching a single post: `https://jsonplaceholder.typicode.com/posts/{id}`.

---

### 4. E-Commerce Section

- **API Source**: Use the [Fake Store API](https://fakestoreapi.com/products) for the product data.
  
- **Features**:
  - Create a **Product Listing Page** that fetches and displays products.
  - For each product, display the **image, title, price**, and a **"View Details"** button.
  - When "View Details" is clicked, navigate to a **Product Detail Page**.

- **Product Detail Page**:
  - Fetch detailed information for the selected product (API: `https://fakestoreapi.com/products/{id}`).
  - Display the **title, price, description**, and **image** of the product.
  - Add an **"Add to Cart"** button to add the product to the cart.

---

### 5. Shopping Cart Section

- **Features**:
  - Implement a **Shopping Cart** page that allows users to view products they added to the cart.
  - Display the **product name**, **price**, and **quantity**.
  - Add functionality to **increase/decrease quantity** or **remove a product** from the cart.
  - The cart data should persist in the **browser's local storage**.

---

### 6. User Dashboard (Protected Route)

- **Dashboard Features**:
  - After successful login, users should be redirected to the **User Dashboard**.
  - The dashboard page should display a welcome message with the user’s name.
  - Display a list of **recently added products** and **recently viewed blog posts** (you can mock this data or store the information in localStorage).

- **Route Protection**:
  - Users should not be able to access the dashboard unless they are logged in.
  - Implement route protection to restrict access to certain pages like the dashboard. If the user is not authenticated, they should be redirected to the login page.

---

### 7. Routing

- Implement proper routing between different pages:
  - **Home Page**: A landing page with links to the **Blog Home Page** and **Product Listing Page**.
  - **Blog Home Page**: `/blogs`.
  - **Blog Detail Page**: `/blogs/{id}`.
  - **Product Listing Page**: `/products`.
  - **Product Detail Page**: `/products/{id}`.
  - **Shopping Cart Page**: `/cart`.
  - **Login Page**: `/login`.
  - **Sign Up Page**: `/signup`.
  - **User Dashboard Page**: `/dashboard` (protected route).

---

### 8. Bonus Features (Optional)
- Add a **search bar** on both the Blog and Product pages to filter blog posts and products.
- Add **pagination** to the Blog section (fetching a limited number of posts per page).
- Implement a **responsive design** using Tailwind CSS or any other CSS framework.
- Save the user’s **recently viewed products** and **blog posts** in localStorage and display them on the dashboard.

---

## APIs to Use:

1. **Blog Posts API**: [JSONPlaceholder Posts](https://jsonplaceholder.typicode.com/posts)
   - Get all posts: `https://jsonplaceholder.typicode.com/posts`
   - Get a single post by ID: `https://jsonplaceholder.typicode.com/posts/{id}`

2. **Product API**: [Fake Store API](https://fakestoreapi.com/products)
   - Get all products: `https://fakestoreapi.com/products`
   - Get a single product by ID: `https://fakestoreapi.com/products/{id}`

3. **Authentication API**: [Fake Auth API](https://reqres.in/api/login)
   - Login API: `https://reqres.in/api/login` (Mock login)

---

## Deliverables:
- A complete React.js application with the following pages:
  - **Home Page**
  - **Blog Home Page** and **Blog Detail Page**
  - **Product Listing Page** and **Product Detail Page**
  - **Shopping Cart Page**
  - **Login Page**, **Sign Up Page**, and **Logout functionality**
  - **User Dashboard Page** (protected route)
- All functionality should be working, including fetching data from APIs, navigation, and cart management.
- The code should be clean, modular, and follow React best practices.

---

## Submission:
- Submit the GitHub repository link for your project.
- Ensure the project is well-documented, with clear instructions on how to run it locally.

---

This task will help you become familiar with routing, API integration, managing state, and implementing authentication in React.js. Focus on clean code and user-friendly design.
