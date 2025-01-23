"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const trendingCollections = [
  {
    id: 1,
    name: "DeGods",
    image: "/collections/degods.jpg",
    price: "0.03 ETH",
    isVerified: true,
  },
  {
    id: 2,
    name: "Pudgy Penguins",
    image: "/collections/pudgy.jpg",
    price: "0.03 ETH",
    isVerified: true,
  },
  {
    id: 3,
    name: "Azuki",
    image: "/collections/azuki.jpg",
    price: "0.03 ETH",
    isVerified: true,
  },
  {
    id: 4,
    name: "Clone X",
    image: "/collections/clonex.jpg",
    price: "0.03 ETH",
    isVerified: true,
  },
  {
    id: 5,
    name: "Milady",
    image: "/collections/milady.jpg",
    price: "0.03 ETH",
    isVerified: true,
  },
  {
    id: 6,
    name: "Potatoz",
    image: "/collections/potatoz.jpg",
    price: "0.03 ETH",
    isVerified: true,
  },
];

export function TrendingCollections() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = 300 + 16; // card width + gap
    const currentScroll = container.scrollLeft;
    const targetScroll =
      direction === "right"
        ? currentScroll + scrollAmount
        : currentScroll - scrollAmount;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-4 py-8">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl font-bold mb-6">Trending Collections</h2>

        {/* Slider Container */}
        <div className="relative group">
          {/* Navigation Buttons */}
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => handleScroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth"
          >
            {trendingCollections.map((item) => (
              <Card
                key={item.id}
                className="group relative bg-white rounded-[32px] cursor-pointer transition-all hover:shadow-xl overflow-hidden flex-shrink-0 w-[300px] snap-start"
              >
                {/* Image Container */}
                <div className="aspect-square relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info Container */}
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <Badge className="bg-blue-500/10 text-blue-400">✧</Badge>
                  </div>
                  <p className="text-lg font-medium mt-1">{item.price}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
