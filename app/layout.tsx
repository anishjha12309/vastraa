import type { Metadata } from "next";
import { Space_Mono, Inter } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";
import { Toaster } from "sonner";

// Inter as Clash Display alternative (clean, modern sans-serif)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-clash",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Space Mono - Google Font
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VASTRAAA // POST-DIGITAL WEAR",
  description: "Clothing as Architecture. Urban Archive 2026.",
  keywords: ["fashion", "avant-garde", "streetwear", "post-digital", "archive"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`}>
      <body className="bg-void text-paper antialiased">
        <LenisProvider>
          {children}
        </LenisProvider>
        <Toaster 
          position="bottom-right" 
          theme="dark"
          toastOptions={{
            style: {
              background: '#050505',
              border: '1px solid #262626',
              color: '#EAEAEA',
              fontFamily: 'var(--font-mono)',
            },
          }}
        />
      </body>
    </html>
  );
}
