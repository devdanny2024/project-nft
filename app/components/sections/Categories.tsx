"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const categories = [
  {
    id: 1,
    name: "Art",
    image: "/categories/addcat.jpg",
    description: "Digital art, paintings, and illustrations",
  },
  {
    id: 2,
    name: "Gaming",
    image: "/categories/gamecat.jpg",
    description: "Game assets, characters, and collectibles",
  },
  {
    id: 3,
    name: "Music",
    image: "/categories/musiccat.jpg",
    description: "Audio tracks, albums, and sound effects",
  },
  {
    id: 4,
    name: "Photography",
    image: "/categories/photography.jpg",
    description: "Digital photographs and collections",
  },
  {
    id: 5,
    name: "Sports",
    image: "/categories/sports.jpg",
    description: "Sports memorabilia and collectibles",
  },
  {
    id: 6,
    name: "Virtual Worlds",
    image: "/categories/virtual-worlds.jpg",
    description: "Virtual reality and metaverse assets",
  },
  {
    id: 7,
    name: "Trading Cards",
    image: "/categories/trading-cards.jpg",
    description: "Digital trading cards and collectibles",
  },
  {
    id: 8,
    name: "Domain Names",
    image: "/categories/domains.jpg",
    description: "Digital real estate and domain names",
  },
  {
    id: 9,
    name: "Memes",
    image: "/categories/memes.jpg",
    description: "Internet culture and meme collectibles",
  },
  {
    id: 10,
    name: "Fashion",
    image: "/categories/fashion.jpg",
    description: "Digital fashion and wearables",
  },
];

export function Categories() {
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
        <h2 className="text-3xl font-bold mb-6">Categories</h2>

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
            {categories.map((category) => (
              <Card
                key={category.id}
                className="group relative bg-[#F8F8F8] rounded-[32px] cursor-pointer transition-all hover:shadow-xl overflow-hidden flex-shrink-0 w-[300px] snap-start"
              >
                {/* Image Container */}
                <div className="aspect-square relative">
                  <div className="absolute inset-0 bg-[#F8F8F8]" />
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover mix-blend-multiply"
                  />
                </div>

                {/* Category Name Container */}
                <div className="absolute bottom-0 left-0 right-0 bg-white p-6">
                  <h3 className="text-2xl font-bold text-black">
                    {category.name}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
