import { ShoppingCart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";

export default function Navigation() {
  const {user} = useUser();
  const { cart } = useContext(CartContext);
  return (
    <nav className="flex items-center justify-between py-8 px-16">
      <div className="flex items-center gap-x-16">
        <Link to="/" className="font-semibold text-3xl">
          Melbius
        </Link>
        <div className="flex items-center gap-x-4">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
        </div>
      </div>
      <div className="flex items-center gap-x-8">
        <div>
          <Link to="/cart" className="flex items-center gap-x-4 relative2">
            <p className="text-lg">
              {cart.reduce((acc, el) => {
                return acc + el.count;
              }, 0)}
            </p>
            <div className="flex items-center gap-x-2">
              <ShoppingCart /> Cart
            </div>
          </Link>
        </div>

        <SignedIn>
          <div className="flex items-center gap-x-4">
            Hi, {user?.firstName}
          <UserButton />
          </div>
          
        </SignedIn>

        <SignedOut>
          <div className="flex items-center gap-x-4">
            <Link to="/sign-in" className="flex items-center gap-x-4 relative">
              Sign In
            </Link>
            <Link to="/sign-up" className="flex items-center gap-x-4 relative">
              Sign Up
            </Link>
          </div>
        </SignedOut>
      </div>
    </nav>
  );
}
