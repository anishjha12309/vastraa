"use client";

import { Drawer } from "vaul";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import NumberFlow from "@number-flow/react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export function CartDrawer({ 
  open, 
  onOpenChange, 
  items, 
  onUpdateQuantity, 
  onRemoveItem 
}: CartDrawerProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 bg-void border-t border-grid rounded-t-2xl">
          <Drawer.Title className="sr-only">Shopping Cart</Drawer.Title>
          <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-grid mt-4 mb-6" />
          
          <div className="px-6 pb-8 max-h-[80vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-clash text-2xl tracking-tight">YOUR CART</h2>
              <button 
                onClick={() => onOpenChange(false)}
                className="p-2 hover:bg-grid transition-colors rounded"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            {items.length === 0 ? (
              <p className="font-mono text-sm text-paper/50 text-center py-12">
                Your cart is empty
              </p>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 pb-6 border-b border-grid">
                    <div className="relative w-20 h-28 flex-shrink-0 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover grayscale"
                      />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-clash text-sm tracking-tight">{item.name}</h3>
                        <p className="font-mono text-xs text-paper/70 mt-1">
                          ₹ <NumberFlow value={item.price} format={{ useGrouping: true }} />
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 border border-grid">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                            className="p-2 hover:bg-grid transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-mono text-sm w-6 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-grid transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => onRemoveItem(item.id)}
                          className="p-2 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Footer */}
            {items.length > 0 && (
              <div className="mt-8 pt-6 border-t border-grid">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm text-paper/70">SUBTOTAL</span>
                  <span className="font-mono text-lg">
                    ₹ <NumberFlow value={total} format={{ useGrouping: true }} />
                  </span>
                </div>
                
                <button className="w-full py-4 bg-paper text-void font-mono text-sm tracking-wider hover:bg-accent transition-colors">
                  CHECKOUT
                </button>
              </div>
            )}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
