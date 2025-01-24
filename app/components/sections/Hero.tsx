"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Compass } from "lucide-react";
import Image from "next/image";
import { Icons } from "../../components/icons";

const heroCard = [
  {
    title: "Ekos Genesis",
    image: "/hero/i1.jpg",
  },
  {
    title: "DI Animals",
    image: "/hero/i2.jpg",
  },
  {
    title: "Kursed society",
    image: "/hero/i3.jpg",
  },
  {
    title: "San origin",
    image: "/hero/i4.jpg",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Dark Gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero/hero.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent" />
        {/* Bottom fade to white */}
        <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-white via-white/40  to-transparent dark:from-[#0D0D0D] dark:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 pt-24 pb-8 w-full">
        <div className="max-w-[1400px] mx-auto">
          {/* Hero Content */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-9">
              Discover, collect and create your own
              <br className="hidden md:block" /> digital masterpiece.
            </h1>
            <p className="text-3xl text-white/80 mb-8 mt-5">
              Best marketplace for crypto collectibles
            </p>
            <div className="flex gap-4">
              <Button className="bg-[#00E0B9] hover:bg-[#00E0B9]/90 text-black font-semibold px-8 py-6 rounded-lg">
                Create
              </Button>
              <Button
                variant="outline"
                className="border-white/20 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-6 rounded-lg"
              >
                <Compass className="mr-2 h-5 w-5" />
                Explore
              </Button>
            </div>
          </div>

          {/* Featured NFTs Grid - Desktop Only */}
          <div className="hidden md:block relative">
            {/* Cards grid */}
            <div className="relative z-10 grid grid-cols-4 gap-4">
              {heroCard.map((item, index) => (
                <Card
                  key={index}
                  className="bg-black/20 backdrop-blur-sm border-white/10 overflow-hidden rounded-3xl"
                >
                  <div className="relative">
                    <div className="absolute bottom-7 left-4 z-10">
                      <div className="bg-black/60 backdrop-blur-sm text-white text-sm px-4 py-4 rounded-full border border-white/20 flex items-center gap-2">
                        <span>{item.title}</span>
                        <Icons.verify className="w-4 h-4" />
                      </div>
                    </div>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={400}
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
