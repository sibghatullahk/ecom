"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
// If alias doesn't work, do relative: import { Product } from "./context/CartContext";
import { Product } from "./types"; // or wherever you store your TS interfaces

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="
          relative w-full h-[60vh] bg-blue-600 bg-center bg-no-repeat bg-cover
          bg-[url('/hero.jpg')] flex items-center justify-center
        "
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Welcome to Shopeeyy!
          </h1>
          <p className="max-w-xl mx-auto mb-6 text-sm md:text-lg">
            Discover our latest collection of amazing products.
            Shop now for the best deals!
          </p>
          <Link href="#products" scroll={false}>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold
                         py-2 px-4 rounded transition-colors"
            >
              Shop Now
            </button>
          </Link>
        </div>
      </section>

      {/* Main Container */}
      <div className="container mx-auto px-4 py-8">
        {/* Products Section */}
        <h2 id="products" className="text-3xl font-bold mb-6">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold mt-2">{product.name}</h3>
              <p className="mt-1">${product.price}</p>
              <Link href={`/product/${product.id}`}>
                <button
                  className="mt-2 bg-blue-500 text-white py-1 px-4 
                             rounded hover:bg-blue-600 transition-colors"
                >
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Example: Newsletter Signup */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="mb-4">
            Subscribe to our newsletter to get the latest deals.
          </p>
          <form className="max-w-md mx-auto flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-2 border rounded-l focus:outline-none"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-r
                         hover:bg-blue-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
}