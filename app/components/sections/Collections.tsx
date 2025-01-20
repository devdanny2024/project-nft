"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

type Platform = "Top" | "Opensea" | "Blur" | "LooksRare";

const collections = [
  {
    id: 1,
    rank: 1,
    name: "Bored Ape Yacht Club",
    image: "/collections/bayc.png",
    floorPrice: "29.15",
    change: "-0.1%",
    isPositive: false,
    volume: "198.58",
    sales: "6",
    owners: "5.53k",
    items: "10k",
    platforms: ["Top", "Opensea", "Blur"] as Platform[],
  },
  {
    id: 2,
    rank: 2,
    name: "Openpen Edition",
    image: "/collections/openpen.png",
    floorPrice: "0.5444",
    change: "+6.1%",
    isPositive: true,
    volume: "102.3",
    sales: "71",
    owners: "4.07k",
    items: "16k",
    platforms: ["Top", "Opensea"] as Platform[],
  },
  {
    id: 3,
    rank: 5,
    name: "Azuki",
    image: "/collections/azuki.png",
    floorPrice: "4.2488",
    change: "0.0%",
    isPositive: true,
    volume: "32.73",
    sales: "4",
    owners: "4.57k",
    items: "8.89k",
    platforms: ["Top", "Opensea", "LooksRare"] as Platform[],
  },
  {
    id: 4,
    rank: 3,
    name: "Pudgy Penguins",
    image: "/collections/pudgy.png",
    floorPrice: "5.416",
    change: "-1.6%",
    isPositive: false,
    volume: "101.48",
    sales: "16",
    owners: "11.09k",
    items: "19.48k",
    platforms: ["Top", "Blur", "LooksRare"] as Platform[],
  },
  {
    id: 5,
    rank: 4,
    name: "Mutant Ape Yacht Club",
    image: "/collections/mayc.png",
    floorPrice: "29.15",
    change: "-0.1%",
    isPositive: false,
    volume: "198.58",
    sales: "6",
    owners: "5.53k",
    items: "10k",
    platforms: ["Top", "Opensea", "Blur"] as Platform[],
  },
  {
    id: 6,
    rank: 6,
    name: "Art Blocks",
    image: "/collections/artblocks.png",
    floorPrice: "0.5444",
    change: "+6.1%",
    isPositive: true,
    volume: "102.3",
    sales: "71",
    owners: "4.07k",
    items: "16k",
    platforms: ["Top", "LooksRare"] as Platform[],
  },
  {
    id: 7,
    rank: 7,
    name: "Nouns",
    image: "/collections/nouns.png",
    floorPrice: "4.2488",
    change: "0.0%",
    isPositive: true,
    volume: "32.73",
    sales: "4",
    owners: "4.57k",
    items: "8.89k",
    platforms: ["Top", "Opensea", "Blur"] as Platform[],
  },
];

const tabs: Platform[] = ["Top", "Opensea", "Blur", "LooksRare"];

export function Collections() {
  const [activeTab, setActiveTab] = useState<Platform>("Top");

  const filteredCollections = collections.filter((collection) =>
    collection.platforms.includes(activeTab)
  );

  return (
    <section className="px-4 py-8">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl font-bold mb-6">Collections</h2>

        {/* Tab Navigation */}
        <div className="flex gap-6 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground transition-colors"
              }`}
            >
              {tab}
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
                  1D Change
                </th>
                <th className="text-right py-4 text-sm font-medium text-muted-foreground">
                  Volume
                </th>
                <th className="text-right py-4 text-sm font-medium text-muted-foreground">
                  Sales
                </th>
                <th className="text-right py-4 text-sm font-medium text-muted-foreground">
                  Owners
                </th>
                <th className="text-right py-4 text-sm font-medium text-muted-foreground">
                  Items
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
                        <Badge className="bg-blue-500/10 text-blue-400">
                          ✧
                        </Badge>
                      </div>
                    </div>
                  </td>
                  <td className="text-right py-4">{collection.floorPrice}</td>
                  <td
                    className={`text-right py-4 ${
                      collection.isPositive
                        ? "text-green-500"
                        : collection.change === "0.0%"
                          ? "text-muted-foreground"
                          : "text-red-500"
                    }`}
                  >
                    {collection.change}
                  </td>
                  <td className="text-right py-4">{collection.volume}</td>
                  <td className="text-right py-4">{collection.sales}</td>
                  <td className="text-right py-4">{collection.owners}</td>
                  <td className="text-right py-4">{collection.items}</td>
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
    </section>
  );
}
