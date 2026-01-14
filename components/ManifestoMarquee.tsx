"use client";

import { Marquee } from "./Marquee";

interface ManifestoMarqueeProps {
  text?: string;
}

export function ManifestoMarquee({ 
  text = "CLOTHING AS ARCHITECTURE // VASTRAAA 2026 // POST-DIGITAL WEAR" 
}: ManifestoMarqueeProps) {
  return (
    <div className="py-8 border-y border-grid bg-void overflow-hidden marquee-container">
      <Marquee pauseOnHover speed={35}>
        <span className="font-clash text-4xl md:text-6xl lg:text-7xl tracking-tighter text-paper">
          {text}
        </span>
        <span className="font-clash text-4xl md:text-6xl lg:text-7xl tracking-tighter text-paper/30">
          {text}
        </span>
      </Marquee>
    </div>
  );
}
