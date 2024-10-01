import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/home.page";
import CartPage from "./pages/cart/cart.page";
import RootLayout from "./layouts/root.layout";
import CheckoutPage from "./pages/checkout/checkout.page";
import { ClerkProvider } from "@clerk/clerk-react";
import SigninPage from "./pages/auth/sign-in/sign-in.page";
import SignupPage from "./pages/auth/sign-up/sign-up.page";
import PaymentPage from "./pages/payment/payment.page";
import { Toaster } from "sonner";
import ShopPage from "./pages/shop/shop.page";
import ProductPage from "./pages/product/product.page";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) throw new Error("Missing Publishable Key");

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/shop/product/:productId",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/payment",
        element: <PaymentPage />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SigninPage />,
  },
  {
    path: "sign-up",
    element: <SignupPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
      <Toaster richColors/>
    </ClerkProvider>
  </React.StrictMode>
);
