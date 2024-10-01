# E-commerce Frontend

### Built with React.js, TailwindCSS, Clerk

This is the frontend service for a full-featured e-commerce platform. It handles user interaction, product displays, shopping cart management, and order placement. It is connected to a backend API built with Node.js, Express, and MongoDB. Authentication is handled using Clerk, while the styling is built with TailwindCSS.

---

## Features

- **User Authentication**: Managed using Clerk for secure sign-up, login, and user authentication.
- **Product Display**: View available products, detailed product information, and categories.
- **Shopping Cart**: Add and remove products from the cart, update quantities, and view cart details.
- **Order Placement**: Place orders, review order history.
- **Responsive Design**: Mobile-first design implemented with TailwindCSS for responsiveness.
- **Payment Integration (In Progress)**: Cash on Delivery and Credit Card buttons added (payment functionality not implemented).

---

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **TailwindCSS**: Utility-first CSS framework for styling the app.
- **Clerk**: For managing user authentication.
- **React Router**: For managing navigation and routing between pages.

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/AyshaHamna/ecommerce-frontend.git
cd ecommerce-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
Create a .env file in the root directory and add the following variables:

```bash
VITE_CLERK_PUBLISHABLE_KEY=<your-vite-clerk-publishable-key>
```

4. Start the application:

```bash
npm run dev
```

---

## Routing
The application uses react-router-dom for managing navigation between different pages. Below are the defined routes:

### Main Routes

- **`/`**: Renders the **HomePage** component.
- **`/cart`**: Renders the **CartPage** component, where users can view and manage their shopping cart.
- **`/checkout`**: Renders the **CheckoutPage** component, where users can proceed with their order.
- **`/payment`**: Renders the **PaymentPage** component for handling payment information.

### Authentication Routes

- **`/sign-in`**: Renders the **SigninPage** component for user sign-in.
- **`/sign-up`**: Renders the **SignupPage** component for user registration.

---

## Future Enhancements

- Consider implementing a 404 Not Found route to handle unknown URLs.
- Potentially add route protection for sensitive pages like **`/checkout`** and **`/payment`** using Clerk for authentication checks.
- **Search and Filter**: Implement search functionality for products and category filters.
- **Reviews and Ratings**: Add review and rating features for products.
- **Admin Dashboard**: Create an admin dashboard for product, category, and order management.
- **Payment**: Payment Gateway

---

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

---

## Contact

For any questions or feedback, feel free to reach out:

- GitHub: [AyshaHamna](https://github.com/AyshaHamna)
- Email: [ayshahamna57@gmail.com]

---
