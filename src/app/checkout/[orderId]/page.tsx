"use client";

import { useCart } from "@/app/context/CartContext";
import { notFound } from "next/navigation";

// For a server component approach, you'd mark it async. 
// But let's do a client approach so we can show the cart if we want:


import { useParams } from "next/navigation";

export default function CheckoutPage() {
  const params = useParams();
  const orderId = params?.orderId;

  // Optional: if you want to show final cart items, you can retrieve them:
  const { cart } = useCart();

  // If there's no orderId, show a 404 or some fallback
  if (!orderId) return notFound();

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Purchase.</h1>
      <p className="mb-2">
        Your order <strong>#{orderId}</strong> has been successfully processed.
      </p>

      {/* If you want to show summary of cart items or the final purchased items */}
      {cart.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mt-4 mb-2">Order Summary</h2>
          <ul className="mb-4">
            {cart.map((item) => (
              <li key={item.id} className="border-b py-2">
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        </>
      )}

      <p className="mb-4">
        We appreciate your business and will send an email with the order details
        soon. If you have any questions feel free to{" "}
        <a href="/contact" className="text-blue-500 underline">
          Contact us
        </a>.
      </p>
    </div>
  );
}