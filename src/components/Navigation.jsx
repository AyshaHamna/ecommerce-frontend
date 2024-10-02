import { Menu, ShoppingCart, X } from "lucide-react";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";

const NavLinks = () => {
  return (
    <div className="flex gap-x-10 items-center">
      <Link to={"/"}>Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/profile/orders">My Orders</Link>
    </div>
  );
};

const UserProfile = () => {
  const { user } = useUser();
  return (
    <div className="flex gap-x-5 sm:gap-x-10 items-center">
      <SignedIn>
        <p>Hi, {user?.firstName}</p>
        <UserButton afterSignOutUrl="/sign-in" />
      </SignedIn>
      <SignedOut>
        <Link to={"/sign-in"}>Sign In</Link>
        <Link to={"/sign-up"}>Sign Up</Link>
      </SignedOut>
    </div>
  );
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const { cart } = useContext(CartContext);

  return (
    <>
      <nav className="flex items-center justify-between py-5 px-5 lg:px-16 gap-x-3">
        {/* lap screen */}
        <div className="flex items-center gap-x-16">
          <Link to="/" className="font-semibold text-3xl">
            DigiX
          </Link>
          <div className="hidden sm:flex items-center gap-x-4">
            <NavLinks />
          </div>
        </div>

        <div className="flex items-center gap-x-8">
          <div>
            <Link to="/cart" className="flex items-center gap-x-4 relative">
              <p className="text-lg">
                {cart.reduce((acc, el) => acc + el.count, 0)}
              </p>
              <div className="flex items-center gap-x-2">
                <ShoppingCart /> Cart
              </div>
            </Link>
          </div>
          <div className="hidden sm:flex items-center ">
            <UserProfile />
          </div>

          {/* menu icon for small screen */}
          <div className="sm:hidden">
            <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
      </nav>
      <div>
        {/* Show NavLinks in a dropdown for small screens */}
        {isOpen && (
          <div className="sm:hidden flex flex-col items-center gap-y-3 basis-full">
            <NavLinks />
            <UserProfile />
          </div>
        )}
      </div>
    </>
  );
}
