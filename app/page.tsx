"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { Header, ManifestoMarquee, ProductCard, CartDrawer, LookbookCarousel } from "@/components";

// Dynamic import for R3F to avoid SSR issues
const LiquidSphere = dynamic(
  () => import("@/components/LiquidSphere").then((mod) => mod.LiquidSphere),
  { ssr: false }
);

// Product Data
const products = [
  { id: "1", name: "Shadow Knit Jumper", price: 4999, image: "/images/jumper.jpg", aspectRatio: "portrait" as const },
  { id: "2", name: "Archive Hoodie", price: 3499, image: "/images/hoodie.jpg", aspectRatio: "portrait" as const },
  { id: "3", name: "Distressed Leather", price: 12999, image: "/images/leatherjacket.jpg", aspectRatio: "portrait" as const },
  { id: "4", name: "Deconstructed Cardigan", price: 5999, image: "/images/cardigan.jpg", aspectRatio: "square" as const },
  { id: "5", name: "Bone White Knit", price: 4499, image: "/images/whitejumper.jpg", aspectRatio: "portrait" as const },
  { id: "6", name: "Atelier Set", price: 8999, image: "/images/chicoutfit.jpg", aspectRatio: "landscape" as const },
  { id: "7", name: "Rugged Black Denim", price: 6499, image: "/images/blackruggeddenim.jpg", aspectRatio: "portrait" as const },
];

const lookbookItems = [
  { id: "1", image: "/images/overcoat.jpg", title: "LOOK 01 — URBAN SILHOUETTE" },
  { id: "2", image: "/images/leatherjacket.jpg", title: "LOOK 02 — DISTRESSED EDGE" },
  { id: "3", image: "/images/chicoutfit.jpg", title: "LOOK 03 — ATELIER MOMENT" },
  { id: "4", image: "/images/hoodie.jpg", title: "LOOK 04 — ARCHIVE STUDY" },
];

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(cartItems.map((item) => 
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleAddToCart = (product: { id: string; name: string; price: number; image: string }) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  return (
    <main className="min-h-screen bg-void">
      {/* Header */}
      <Header cartItemCount={cartItems.length} onCartClick={() => setCartOpen(true)} />

      {/* ===== HERO SECTION ===== */}
      <section className="h-screen w-full relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Left: Liquid Chrome Sphere */}
          <div className="relative h-[50vh] md:h-full bg-void flex items-center justify-center border-r border-grid">
            <LiquidSphere />
          </div>

          {/* Right: Editorial Image */}
          <div className="relative h-[50vh] md:h-full">
            <Image
              src="/images/overcoat.jpg"
              alt="Urban Archive"
              fill
              className="object-cover grayscale contrast-125"
              priority
            />
          </div>
        </div>

        {/* Hero Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.h1 
            className="font-clash text-6xl md:text-8xl lg:text-[12rem] tracking-tighter text-paper mix-blend-difference text-center leading-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            URBAN<br/>
            <span className="text-paper/30">//</span> ARCHIVE
          </motion.h1>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-xs text-paper/50">SCROLL</span>
            <motion.div 
              className="w-px h-12 bg-paper/30"
              animate={{ scaleY: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* ===== MANIFESTO MARQUEE ===== */}
      <ManifestoMarquee />

      {/* ===== THE COLLECTION ===== */}
      <section id="collection" className="py-24">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="mb-16 flex items-end justify-between border-b border-grid pb-8">
            <div>
              <span className="font-mono text-xs text-paper/50 block mb-2">01 — ARCHIVE</span>
              <h2 className="font-clash text-5xl md:text-7xl tracking-tighter">THE COLLECTION</h2>
            </div>
            <span className="font-mono text-xs text-paper/50 hidden md:block">7 PIECES</span>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="break-inside-avoid"
              >
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  aspectRatio={product.aspectRatio}
                  onAddToCart={handleAddToCart}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOOKBOOK CAROUSEL ===== */}
      <section id="lookbook">
        <LookbookCarousel items={lookbookItems} />
      </section>

      {/* ===== PHILOSOPHY SECTION ===== */}
      <section className="py-32 border-y border-grid">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-mono text-xs text-paper/50 block mb-8">02 — MANIFESTO</span>
            <motion.p 
              className="font-clash text-3xl md:text-5xl tracking-tight leading-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              WE DON&apos;T FOLLOW SEASONS.<br/>
              <span className="text-paper/40">WE BUILD ARCHIVES.</span>
            </motion.p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-paper text-void py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="font-clash text-2xl tracking-tighter mb-4">VASTRAAA</h3>
              <p className="font-mono text-xs text-void/60 leading-relaxed">
                Post-digital wear for the urban architect. Est. 2026.
              </p>
            </div>

            {/* Sitemap */}
            <div>
              <h4 className="font-mono text-xs mb-4 text-void/50">SITEMAP</h4>
              <nav className="flex flex-col gap-2">
                <a href="#collection" className="font-mono text-sm hover:underline">Collection</a>
                <a href="#lookbook" className="font-mono text-sm hover:underline">Lookbook</a>
                <a href="#" className="font-mono text-sm hover:underline">About</a>
                <a href="#" className="font-mono text-sm hover:underline">Contact</a>
              </nav>
            </div>

            {/* Socials */}
            <div>
              <h4 className="font-mono text-xs mb-4 text-void/50">CONNECT</h4>
              <nav className="flex flex-col gap-2">
                <a href="#" className="font-mono text-sm hover:underline">Instagram</a>
                <a href="#" className="font-mono text-sm hover:underline">Twitter</a>
                <a href="#" className="font-mono text-sm hover:underline">LinkedIn</a>
              </nav>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-mono text-xs mb-4 text-void/50">NEWSLETTER</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="YOUR@EMAIL.COM"
                  className="flex-1 px-4 py-3 bg-transparent border border-void font-mono text-xs placeholder:text-void/40 focus:outline-none"
                />
                <button className="px-6 py-3 bg-void text-paper font-mono text-xs hover:bg-void/80 transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-void/20 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-mono text-xs text-void/50">© 2026 VASTRAAA. ALL RIGHTS RESERVED.</span>
            <span className="font-mono text-xs text-void/50">WORLDWIDE SHIPPING</span>
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      <CartDrawer
        open={cartOpen}
        onOpenChange={setCartOpen}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </main>
  );
}
