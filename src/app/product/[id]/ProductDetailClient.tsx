"use client";

import { Product } from "@/app/context/CartContext";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";

interface ProductDetailClientProps {
  product: Product;
}

/**
 * Client component that uses React state or hooks (like `useCart`)
 * to handle "Add to Cart" functionality.
 */
export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { addItem } = useCart();

  function handleAddToCart() {
    addItem(product);
    alert(`${product.name} added to cart!`);
  }

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <Image
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover mb-4"
      />
      <p className="mb-2">{product.description}</p>
      <p className="font-bold">${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}