import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { ReactNode } from "react";
import { CartProvider } from "@/app/context/CartContext";

export const metadata = {
  title: "E-Commerce",
  description: "Basic e-commerce demo using Next.js App Router",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
        <Navbar />
        <main className="container mx-auto py-8">{children}</main>
        <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
