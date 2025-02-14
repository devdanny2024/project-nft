"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { Icons } from "../icons";

type Platform = "Top" | "Opensea" | "Blur" | "LooksRare";
type TimeRange = "5m" | "15m" | "1h" | "1D" | "7D";

const collections = [
  {
    id: 1,
    rank: 1,
    name: "Bored Ape Yacht Club",
    image: "/collections/c1.jpg",
    floorPrice: "2.39",
    volume: "198.58",
    sales: "68",
    isVerified: true,
    platforms: ["Top", "Opensea", "Blur"] as Platform[],
  },
  {
    id: 2,
    rank: 2,
    name: "Openpen Edition",
    image: "/collections/c2.jpg",
    floorPrice: "2.39",
    volume: "198.58",
    sales: "68",
    isVerified: true,
    platforms: ["Top", "Opensea"] as Platform[],
  },
  {
    id: 3,
    rank: 5,
    name: "Azuki",
    image: "/collections/c3.jpg",
    floorPrice: "2.39",
    volume: "198.58",
    sales: "68",
    isVerified: true,
    platforms: ["Top", "Opensea", "LooksRare"] as Platform[],
  },
  {
    id: 4,
    rank: 3,
    name: "Pudgy Penguins",
    image: "/collections/c4.jpg",
    floorPrice: "2.39",
    volume: "198.58",
    sales: "68",
    isVerified: true,
    platforms: ["Top", "Blur", "LooksRare"] as Platform[],
  },
  {
    id: 5,
    rank: 4,
    name: "Mutant Ape Yacht Club",
    image: "/collections/c5.jpg",
    floorPrice: "2.39",
    volume: "198.58",
    sales: "68",
    isVerified: true,
    platforms: ["Top", "Opensea", "Blur"] as Platform[],
  },
  {
    id: 6,
    rank: 6,
    name: "Art Blocks",
    image: "/collections/c6.jpg",
    floorPrice: "2.39",
    volume: "198.58",
    sales: "68",
    isVerified: true,
    platforms: ["Top", "LooksRare"] as Platform[],
  },
  {
    id: 7,
    rank: 7,
    name: "Nouns",
    image: "/collections/c7.jpg",
    floorPrice: "2.39",
    volume: "198.58",
    sales: "68",
    isVerified: true,
    platforms: ["Top", "Opensea", "Blur"] as Platform[],
  },
];

const timeRangeData = {
  "5m": { volume: "98.58", sales: "28" },
  "15m": { volume: "128.58", sales: "38" },
  "1h": { volume: "158.58", sales: "48" },
  "1D": { volume: "198.58", sales: "68" },
  "7D": { volume: "258.58", sales: "88" },
};

export function Collections() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>("Top");
  const [selectedTimeRange, setSelectedTimeRange] = useState<TimeRange>("1D");

  // Filter collections based on selected platform
  const filteredCollections = collections.filter((collection) =>
    collection.platforms.includes(selectedPlatform)
  );

  // Get the current time range data
  const currentTimeData = timeRangeData[selectedTimeRange];

  return (
    <section className="px-4 py-8">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl font-bold mb-6">Collections</h2>

        {/* Mobile View */}
        <div className="md:hidden">
          {/* Platform Tabs */}
          <div className="flex gap-4 mb-6 overflow-x-auto pb-2 scrollbar-hide">
            {["Top", "Opensea", "Blur", "LooksRare"].map((platform) => (
              <Button
                key={platform}
                variant="ghost"
                className={`px-0 font-medium ${
                  selectedPlatform === platform
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
                onClick={() => setSelectedPlatform(platform as Platform)}
              >
                {platform}
              </Button>
            ))}
          </div>

          {/* Time Range Tabs */}
          <div className="flex gap-2 mb-6 bg-muted p-1 rounded-full w-fit">
            {["5m", "15m", "1h", "1D", "7D"].map((range) => (
              <Button
                key={range}
                variant="ghost"
                size="sm"
                className={`rounded-full px-4 ${
                  selectedTimeRange === range
                    ? "bg-background shadow-sm"
                    : "hover:bg-transparent hover:text-foreground"
                }`}
                onClick={() => setSelectedTimeRange(range as TimeRange)}
              >
                {range}
              </Button>
            ))}
          </div>

          {/* Collection List */}
          <div className="space-y-4">
            {filteredCollections.map((collection) => (
              <div
                key={collection.id}
                className="flex items-center gap-4 p-2 hover:bg-muted/50 rounded-lg transition-colors"
              >
                <span className="text-muted-foreground min-w-[24px]">
                  {collection.rank}
                </span>
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <h3 className="font-medium truncate">{collection.name}</h3>
                    {collection.isVerified && (
                      <Icons.verify className="w-4 h-4 text-[#00E0B9] flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Floor {collection.floorPrice}ETH
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">Vol {currentTimeData.volume}</p>
                  <p className="text-sm text-muted-foreground">
                    Sales {currentTimeData.sales}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* See All Button */}
          <Button
            variant="outline"
            className="w-full mt-6 border-muted-foreground/20"
          >
            See all collections
          </Button>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          {/* Tab Navigation */}
          <div className="flex gap-6 mb-6">
            {["Top", "Opensea", "Blur", "LooksRare"].map((platform) => (
              <button
                key={platform}
                onClick={() => setSelectedPlatform(platform as Platform)}
                className={`${
                  selectedPlatform === platform
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground transition-colors"
                }`}
              >
                {platform}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 text-sm font-medium text-muted-foreground">
                    # Collection
                  </th>
                  <th className="text-right py-4 text-sm font-medium text-muted-foreground">
                    Floor price
                  </th>
                  <th className="text-right py-4 text-sm font-medium text-muted-foreground">
                    Volume
                  </th>
                  <th className="text-right py-4 text-sm font-medium text-muted-foreground">
                    Sales
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredCollections.map((collection) => (
                  <tr
                    key={collection.id}
                    className="group hover:bg-muted/50 border-b border-border"
                  >
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-muted-foreground">
                          {collection.rank}
                        </span>
                        <div className="h-10 w-10 rounded-full overflow-hidden">
                          <Image
                            src={collection.image}
                            alt={collection.name}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{collection.name}</span>
                          {collection.isVerified && (
                            <Icons.verify className="w-4 h-4 text-[#00E0B9]" />
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="text-right py-4">{collection.floorPrice} ETH</td>
                    <td className="text-right py-4">{currentTimeData.volume}</td>
                    <td className="text-right py-4">{currentTimeData.sales}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* See All Button */}
          <div className="flex justify-center mt-8">
            <Button variant="outline" className="rounded-full px-8">
              See all collections
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}