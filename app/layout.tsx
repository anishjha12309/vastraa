import type { Metadata, Viewport } from "next";
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

// ===== SEO METADATA =====
export const metadata: Metadata = {
  // Basic
  title: {
    default: "VASTRAAA — Post-Digital Wear",
    template: "%s | VASTRAAA",
  },
  description: "Clothing as Architecture. Avant-garde fashion for the urban architect. Explore our curated archive of post-digital wear.",
  keywords: [
    "fashion",
    "avant-garde",
    "streetwear",
    "post-digital",
    "archive",
    "luxury fashion",
    "designer clothing",
    "urban wear",
    "Rick Owens style",
    "minimalist fashion",
  ],
  authors: [{ name: "VASTRAAA", url: "https://vastraaa.com" }],
  creator: "VASTRAAA",
  publisher: "VASTRAAA",
  
  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vastraaa.com",
    siteName: "VASTRAAA",
    title: "VASTRAAA — Post-Digital Wear",
    description: "Clothing as Architecture. Avant-garde fashion for the urban architect.",
    images: [
      {
        url: "/images/overcoat.jpg",
        width: 1200,
        height: 630,
        alt: "VASTRAAA - Urban Archive Collection",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "VASTRAAA — Post-Digital Wear",
    description: "Clothing as Architecture. Avant-garde fashion for the urban architect.",
    images: ["/images/overcoat.jpg"],
    creator: "@vastraaa",
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Icons (Next.js auto-detects icon.png and apple-icon.png)
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  
  // Manifest for PWA
  manifest: "/manifest.json",
  
  // Verification (add your IDs when ready)
  // verification: {
  //   google: "your-google-verification-id",
  // },
  
  // Category
  category: "fashion",
};

// Viewport configuration (separated in Next.js 14+)
export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable}`}>
      <head>
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "VASTRAAA",
              url: "https://vastraaa.com",
              logo: "https://vastraaa.com/icon.png",
              description: "Post-digital wear for the urban architect",
              sameAs: [
                "https://instagram.com/vastraaa",
                "https://twitter.com/vastraaa",
              ],
            }),
          }}
        />
        {/* Structured Data - WebSite (for sitelinks search) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "VASTRAAA",
              url: "https://vastraaa.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://vastraaa.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {/* Structured Data - SiteNavigationElement (for sitelinks) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "SiteNavigationElement",
                  "@id": "https://vastraaa.com/#collection-nav",
                  name: "The Collection",
                  description: "Shop the latest collection of avant-garde fashion",
                  url: "https://vastraaa.com/collection",
                },
                {
                  "@type": "SiteNavigationElement",
                  "@id": "https://vastraaa.com/#lookbook-nav",
                  name: "Lookbook",
                  description: "Editorial fashion photography and styling",
                  url: "https://vastraaa.com/lookbook",
                },
                {
                  "@type": "SiteNavigationElement",
                  "@id": "https://vastraaa.com/#about-nav",
                  name: "About",
                  description: "Our manifesto: Clothing as Architecture",
                  url: "https://vastraaa.com/about",
                },
              ],
            }),
          }}
        />
        {/* Structured Data - ItemList (product collection) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "VASTRAAA Collection",
              description: "Curated archive of post-digital fashion",
              numberOfItems: 7,
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Shadow Knit Jumper", url: "https://vastraaa.com/collection#jumper" },
                { "@type": "ListItem", position: 2, name: "Archive Hoodie", url: "https://vastraaa.com/collection#hoodie" },
                { "@type": "ListItem", position: 3, name: "Distressed Leather", url: "https://vastraaa.com/collection#leather" },
                { "@type": "ListItem", position: 4, name: "Deconstructed Cardigan", url: "https://vastraaa.com/collection#cardigan" },
                { "@type": "ListItem", position: 5, name: "Bone White Knit", url: "https://vastraaa.com/collection#whitejumper" },
                { "@type": "ListItem", position: 6, name: "Atelier Set", url: "https://vastraaa.com/collection#atelier" },
                { "@type": "ListItem", position: 7, name: "Rugged Black Denim", url: "https://vastraaa.com/collection#denim" },
              ],
            }),
          }}
        />
      </head>
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
