"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeItem } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // Example: generate a random order ID for demonstration
  function handleCheckout() {
    const orderId = Math.floor(Math.random() * 90000 + 10000).toString();
    // In a real scenario, you'd probably call an API to create the order 
    // and then get the actual orderId
    window.location.href = `/checkout/${orderId}`;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between border-b py-2">
              <span>{item.name}</span>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <p className="font-bold mt-2">Total: ${total}</p>
          <button
            onClick={handleCheckout}
            className="bg-blue-500 text-white px-4 py-2 mt-4"
          >
            Checkout
          </button>
        </div>
      )}
      <Link href="/">
        <span className="text-blue-500 underline">Continue Shopping</span>
      </Link>
    </div>
  );
}