"use client";

import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  reverse?: boolean;
  speed?: number;
}

export function Marquee({ 
  children, 
  className = "", 
  pauseOnHover = true,
  reverse = false,
  speed = 40
}: MarqueeProps) {
  return (
    <div 
      className={`flex overflow-hidden ${pauseOnHover ? '[&:hover_.marquee-track]:pause' : ''} ${className}`}
      style={{ 
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      }}
    >
      <div 
        className="marquee-track flex shrink-0 items-center gap-8"
        style={{
          animation: `marquee ${speed}s linear infinite ${reverse ? 'reverse' : ''}`,
        }}
      >
        {children}
      </div>
      <div 
        className="marquee-track flex shrink-0 items-center gap-8"
        style={{
          animation: `marquee ${speed}s linear infinite ${reverse ? 'reverse' : ''}`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
