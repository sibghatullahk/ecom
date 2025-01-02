"use client"; // Mark this as a client-side component

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { products } from "../../data/products";
import ProductDetailClient from "./ProductDetailClient";

export default function ProductDetails() {
  const { id } = useParams(); // Fetch dynamic route parameter
  const [product, setProduct] = useState<typeof products[0] | undefined>(undefined);

  useEffect(() => {
    if (id) {
      // Find the product using the dynamic route parameter
      const foundProduct = products.find((p) => p.id === id);
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) {
    // Handle the case where no product is found (404)
    return <div>Product not found</div>;
  }

  // Return the ProductDetailClient component with the product data
  return <ProductDetailClient product={product} />;
}