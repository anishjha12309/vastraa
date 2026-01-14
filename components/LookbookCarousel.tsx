"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface LookbookItem {
  id: string;
  image: string;
  title: string;
}

interface LookbookCarouselProps {
  items: LookbookItem[];
}

export function LookbookCarousel({ items }: LookbookCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 border-y border-grid">
      {/* Header */}
      <div className="container mx-auto px-6 mb-12 flex items-end justify-between">
        <div>
          <span className="font-mono text-xs text-paper/50 block mb-2">EDITORIAL</span>
          <h2 className="font-clash text-5xl md:text-6xl tracking-tighter">LOOKBOOK</h2>
        </div>
        
        <div className="hidden md:flex gap-2">
          <button 
            onClick={scrollPrev}
            className="p-3 border border-grid hover:bg-paper hover:text-void transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={scrollNext}
            className="p-3 border border-grid hover:bg-paper hover:text-void transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex gap-6 pl-6">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="flex-none w-[80vw] md:w-[50vw] lg:w-[35vw] group"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover cinematic-default cinematic-hover"
                />
                <div className="noise-overlay" />
              </div>
              <p className="font-mono text-xs text-paper/50 mt-4">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
