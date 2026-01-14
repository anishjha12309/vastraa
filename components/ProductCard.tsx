"use client";

import Image from "next/image";
import NumberFlow from "@number-flow/react";
import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  aspectRatio?: "portrait" | "square" | "landscape";
  onAddToCart?: (product: { id: string; name: string; price: number; image: string }) => void;
}

export function ProductCard({ id, name, price, image, aspectRatio = "portrait", onAddToCart }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const aspectClasses = {
    portrait: "aspect-[3/4]",
    square: "aspect-square",
    landscape: "aspect-[4/3]",
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({ id, name, price, image });
    }
    toast.success(`${name} added to cart`, {
      description: `₹ ${price.toLocaleString("en-IN")}`,
    });
  };

  return (
    <div
      className="group relative overflow-hidden border border-grid cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className={`relative ${aspectClasses[aspectRatio]} overflow-hidden`}>
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover cinematic-default cinematic-hover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Noise Overlay */}
        <div className="noise-overlay" />
        
        {/* Quick Add Button */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 p-3 bg-paper text-void opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          aria-label="Add to cart"
        >
          <ShoppingBag className="w-5 h-5" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4 border-t border-grid bg-void">
        <h3 className="font-clash text-sm tracking-tight mb-2 group-hover:text-accent transition-colors">
          {name}
        </h3>
        <div className="font-mono text-xs text-paper/70">
          <span className="mr-1">₹</span>
          <NumberFlow
            value={price}
            format={{ useGrouping: true }}
            animated={isHovered}
          />
        </div>
      </div>
    </div>
  );
}
