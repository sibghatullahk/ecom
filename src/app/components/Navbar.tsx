"use client";

import { useState } from "react";
import Link from "next/link";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";
import { useCart } from "../context/CartContext"; // adjust relative path if needed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Access cart items for the cart count
  const { cart } = useCart();
  const cartCount = cart.length;

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left side: brand + mobile menu toggle */}
        <div className="flex items-center space-x-2">
          <button
            className="mr-2 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <FaBars className="text-2xl" />
          </button>
          <Link href="/">
            <span className="text-xl font-bold cursor-pointer">
              Shopeeyy
            </span>
          </Link>
        </div>

        {/* Center: nav links */}
        <div
          className={`absolute left-0 top-[72px] w-full bg-blue-600 
            md:bg-transparent md:relative md:top-auto md:w-auto md:flex 
            ${isOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-6 p-4 md:p-0">
            <li>
              <Link
                href="/"
                className="block py-2 md:py-0 cursor-pointer hover:text-gray-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 md:py-0 cursor-pointer hover:text-gray-200"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 md:py-0 cursor-pointer hover:text-gray-200"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right side: search + cart */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center bg-white text-black rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 focus:outline-none"
            />
            <button
              aria-label="Search"
              className="px-2 text-blue-600 hover:text-blue-700"
            >
              <FaSearch />
            </button>
          </div>

          <Link href="/cart" className="relative cursor-pointer">
            <FaShoppingCart className="text-2xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white px-1 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile search bar (shown if isOpen) */}
      {isOpen && (
        <div className="bg-white text-black p-2 md:hidden">
          <div className="flex items-center rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 focus:outline-none flex-grow"
            />
            <button
              aria-label="Search"
              className="px-2 text-blue-600 hover:text-blue-700"
            >
              <FaSearch />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}