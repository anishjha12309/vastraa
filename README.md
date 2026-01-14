# VASTRAAA

> Post-Digital Wear for the Urban Architect

A bleeding-edge fashion e-commerce platform built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**. Design aesthetic: *"Dark Zara meets Rick Owens"*.

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-v4.0-06B6D4?style=flat-square&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)

---

## ✨ Features

- **3D Hero** — React Three Fiber liquid chrome sphere with `MeshDistortMaterial`
- **Smooth Scroll** — Lenis integration for buttery page navigation
- **Cinematic Imagery** — Grayscale → brightness hover transitions with noise overlay
- **Cart System** — Vaul-powered bottom drawer with quantity management
- **Animated Prices** — NumberFlow for smooth number transitions
- **Lookbook Carousel** — Embla drag-to-scroll editorial carousel
- **Responsive** — Mobile-first design with desktop enhancements

---

## 🏗️ Architecture

```
vastraaa/
├── app/
│   ├── layout.tsx      # Root layout: Lenis + Sonner + Fonts
│   ├── page.tsx        # Homepage composition + cart state
│   └── globals.css     # Tailwind v4 @theme design tokens
├── components/
│   ├── LenisProvider   # Smooth scroll context wrapper
│   ├── LiquidSphere    # R3F 3D chrome sphere
│   ├── ProductCard     # Cinematic hover product cards
│   ├── CartDrawer      # Vaul bottom sheet cart
│   ├── Marquee         # Custom CSS infinite scroll
│   ├── Header          # Fixed nav with cart indicator
│   └── LookbookCarousel# Embla editorial carousel
└── public/images/      # Editorial product photography
```

---

## 🔄 State Flow

```mermaid
flowchart TD
    subgraph Page["page.tsx (State Owner)"]
        CS[cartItems: CartItem[]]
        CO[cartOpen: boolean]
    end

    subgraph Components
        H[Header]
        PC[ProductCard]
        CD[CartDrawer]
    end

    CS -->|cartItemCount| H
    CO -->|onCartClick| H
    CS -->|items| CD
    PC -->|onAddToCart| CS
    CD -->|onUpdateQuantity| CS
    CD -->|onRemoveItem| CS
```

**Cart State Interface:**
```typescript
interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
```

**Why Prop Drilling?**  
With a shallow component tree (3 levels max), prop drilling outperforms Context API by avoiding unnecessary re-renders and subscription overhead.

---

## 📚 Library Documentation

### React Three Fiber (R3F) v9
3D rendering in React. Used for the hero liquid sphere.

```tsx
// components/LiquidSphere.tsx
<Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
  <Sphere args={[1.8, 128, 128]}>
    <MeshDistortMaterial
      color="#EAEAEA"
      metalness={1}
      roughness={0.1}
      distort={0.4}
      speed={2}
    />
  </Sphere>
</Canvas>
```
📖 [R3F Docs](https://r3f.docs.pmnd.rs/)

---

### Lenis (Smooth Scroll)
Locomotive-style smooth scrolling library.

```tsx
// components/LenisProvider.tsx
<ReactLenis root options={{
  lerp: 0.1,
  duration: 1.2,
  smoothWheel: true,
}}>
  {children}
</ReactLenis>
```
📖 [Lenis Docs](https://lenis.darkroom.engineering/)

---

### Vaul (Drawer)
Accessible drawer component from Radix primitives.

```tsx
// components/CartDrawer.tsx
<Drawer.Root open={open} onOpenChange={onOpenChange}>
  <Drawer.Portal>
    <Drawer.Overlay />
    <Drawer.Content>
      <Drawer.Title className="sr-only">Cart</Drawer.Title>
      {/* Cart items */}
    </Drawer.Content>
  </Drawer.Portal>
</Drawer.Root>
```
📖 [Vaul Docs](https://vaul.emilkowal.ski/)

---

### Motion v12
Animation library (formerly Framer Motion).

```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
/>
```
📖 [Motion Docs](https://motion.dev/)

---

### Embla Carousel
Lightweight carousel with drag support.

```tsx
const [emblaRef, emblaApi] = useEmblaCarousel({
  loop: true,
  align: "start",
  dragFree: true,
});
```
📖 [Embla Docs](https://www.embla-carousel.com/)

---

### NumberFlow
Animated number transitions.

```tsx
<NumberFlow
  value={price}
  format={{ useGrouping: true }}
  animated={isHovered}
/>
```
📖 [NumberFlow Docs](https://number-flow.barvian.me/)

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--color-void` | `#050505` | Background |
| `--color-paper` | `#EAEAEA` | Text |
| `--color-grid` | `#262626` | Borders |
| `--color-accent` | `#FFFFFF` | Hover states |

**Typography:**
- Headers: Inter (Clash Display substitute)
- UI/Data: Space Mono

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## 📄 License

MIT © 2026 Vastraaa
