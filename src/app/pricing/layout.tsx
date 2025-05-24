import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Plans and Premium Features",
  description: "Explore Kodular pricing plans. Upgrade to Premium for unrestricted access and build powerful mobile apps without limits. Free and Premium options available.",
  keywords: [
    "kodular pricing",
    "app builder pricing",
    "kodular premium",
    "app development cost",
    "android app maker pricing"
  ],
  openGraph: {
    title: "Kodular Pricing - Free and Premium Plans",
    description: "Upgrade to Premium for unrestricted access and build powerful mobile apps without limits.",
  }
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 