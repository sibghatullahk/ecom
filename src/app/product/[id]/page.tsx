// /app/product/[id]/page.tsx

import { notFound } from "next/navigation";
import { products } from "./../../data/products"; 

import ProductDetailClient from "./ProductDetailClient";

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  // We're still "using" params here but in an async function 
  // that Next.js can handle properly.
  const product = products.find((p) => p.id === params.id);

  if (!product) return notFound();

  // Return a client component, passing the product data.
  return <ProductDetailClient product={product} />;
}