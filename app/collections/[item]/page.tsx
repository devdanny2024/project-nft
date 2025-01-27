"use client";

import { Footer } from "@/app/components/sections/Footer";
import { CollectionBanner } from "./components/collection-banner";
import { CollectionInfo } from "./components/collection-info";
import { CollectionStats } from "./components/collection-stats";
import { CollectionTabs } from "./components/collection-tabs";

const CollectionPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <CollectionBanner />
      <div className="max-w-[1400px] mx-auto px-4">
        <CollectionInfo />
        <CollectionStats />
        <CollectionTabs />
      </div>
      <Footer />
    </div>
  );
};

export default CollectionPage;
