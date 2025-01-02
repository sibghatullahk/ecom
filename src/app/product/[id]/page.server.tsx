// // /app/product/[id]/page.tsx

// import { notFound } from "next/navigation";
// import { products } from "./../../data/products"; 

// import ProductDetailClient from "./ProductDetailClient";

// export default async function ProductDetails({
//   params,
// }: {
//   params: { id: string };
// }) {
//   // We're still "using" params here but in an async function 
//   // that Next.js can handle properly.
//   const product = products.find((p) => p.id === params.id);

//   if (!product) return notFound();

//   // Return a client component, passing the product data.
//   return <ProductDetailClient product={product} />;
// }
// src/app/product/[id]/page.server.tsx
"use server"; // This line marks the component as a Server Component

import { notFound } from "next/navigation";
import { products } from "../../data/products";
import ProductDetailClient from "./ProductDetailClient";

interface Product {
  id: string;
  // ... other product details
}

export default async function ProductDetails({ params }: { params: { id: string }; }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return notFound();
  }

  return <ProductDetailClient product={product} />;
}