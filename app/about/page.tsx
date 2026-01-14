import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "VASTRAAA is a post-digital fashion label creating clothing as architecture. Learn about our manifesto: We don't follow seasons. We build archives.",
  openGraph: {
    title: "About | VASTRAAA",
    description: "Post-digital fashion label creating clothing as architecture.",
    images: ["/images/chicoutfit.jpg"],
  },
};

export default function AboutPage() {
  return null;
}
