"use client";

import { ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemCount, onCartClick }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-void/80 backdrop-blur-md border-b border-grid">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-clash text-xl tracking-tighter">
            VASTRAAA
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#collection" className="font-mono text-xs hover:text-accent transition-colors">
              COLLECTION
            </Link>
            <Link href="#lookbook" className="font-mono text-xs hover:text-accent transition-colors">
              LOOKBOOK
            </Link>
            <Link href="#about" className="font-mono text-xs hover:text-accent transition-colors">
              ABOUT
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={onCartClick}
              className="relative p-2 hover:bg-grid transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-paper text-void text-xs font-mono flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 hover:bg-grid transition-colors"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-grid bg-void">
          <nav className="container mx-auto px-6 py-8 flex flex-col gap-6">
            <Link 
              href="#collection" 
              className="font-clash text-2xl tracking-tight"
              onClick={() => setMenuOpen(false)}
            >
              COLLECTION
            </Link>
            <Link 
              href="#lookbook" 
              className="font-clash text-2xl tracking-tight"
              onClick={() => setMenuOpen(false)}
            >
              LOOKBOOK
            </Link>
            <Link 
              href="#about" 
              className="font-clash text-2xl tracking-tight"
              onClick={() => setMenuOpen(false)}
            >
              ABOUT
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
