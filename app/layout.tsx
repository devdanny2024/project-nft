import type { Metadata } from "next";
import RootLayout from "app/components/RootLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hashihiro NFT Marketplace",
  description: "Discover, collect and create your own digital masterpiece",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
