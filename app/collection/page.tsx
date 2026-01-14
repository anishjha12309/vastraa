import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Collection",
  description: "Shop the latest collection of avant-garde fashion at VASTRAAA. Explore our curated archive of post-digital wear including jumpers, hoodies, leather jackets, and more.",
  openGraph: {
    title: "The Collection | VASTRAAA",
    description: "Shop the latest collection of avant-garde fashion. Post-digital wear for the urban architect.",
    images: ["/images/jumper.jpg"],
  },
};

export default function CollectionPage() {
  return null; // This page redirects to home#collection
}
