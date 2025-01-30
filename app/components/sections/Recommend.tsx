"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Icons } from "../icons";
import { useRef, useState, useEffect, useCallback } from "react";

const recommendedNFTs = [
  {
    id: 1,
    title: "ON1 Force",
    description:
      "0N1 Force is a non-fungible token (NFT) collection depicting 7,777 otherworldly warriors known as the 0N1 (pronounced OH-knee) ...",
    backgroundImage: "/recommend/recommend.jpg",
    nftImage: "/recommend/nft-1.jpg",
    profileImage: "/recommend/profile-1.jpg",
    lastSale: "1.8 ETH",
  },
  {
    id: 2,
    title: "Rebels",
    description:
      "DeGods is a digital art collection and global community of creators, developers, entrepreneurs, athletes, artists, experimenters and innovators.",
    backgroundImage: "/recommend/recommend-2.jpg",
    nftImage: "/recommend/nft-2.jpg",
    profileImage: "/recommend/profile-2.jpg",
    lastSale: "2.9 ETH",
  },
  {
    id: 3,
    title: "Azuki",
    description:
      "Azuki starts with a collection of 10,000 avatars that give you membership access to The Garden: a corner of the internet where artists, builders, and web3 enthusiasts meet to create a decentralized future.",
    backgroundImage: "/recommend/recommend-3.jpg",
    nftImage: "/recommend/nft-3.jpg",
    profileImage: "/recommend/profile-3.jpg",
    lastSale: "3.8 ETH",
  },
  {
    id: 4,
    title: "Bored Ape Yacht Club",
    description:
      "The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain ...",
    backgroundImage: "/recommend/recommend-4.jpg",
    nftImage: "/recommend/nft-4.jpg",
    profileImage: "/recommend/profile-4.jpg",
    lastSale: "3.8 ETH",
  },
];

export function Recommend() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const cardWidth = 380; // Width of each card
  const AUTO_SLIDE_INTERVAL = 5000; // 5 seconds

  const handleScroll = useCallback(
    (direction: "left" | "right") => {
      const newIndex =
        direction === "right"
          ? Math.min(activeIndex + 1, recommendedNFTs.length - 1)
          : Math.max(activeIndex - 1, 0);

      setActiveIndex(newIndex);
    },
    [activeIndex]
  );

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        if (activeIndex < recommendedNFTs.length - 1) {
          handleScroll("right");
        } else {
          setActiveIndex(0); // Reset to first slide
        }
      }, AUTO_SLIDE_INTERVAL);

      return () => clearInterval(interval);
    }
  }, [activeIndex, isPaused, handleScroll]);

  return (
    <section className=" py-8">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl font-bold mb-6 px-4">Recommend</h2>

        {/* Mobile View */}
        <div className="md:hidden relative min-h-[650px]">
          {/* NFT Image Cards */}
          <div className="absolute inset-0 z-10">
            {recommendedNFTs.map((item, index) => (
              <div
                key={`nft-${item.id}`}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="relative w-[90%] mx-auto h-[400px] rounded-2xl overflow-hidden mb-4 mt-4">
                  <Image
                    src={item.nftImage}
                    alt={`${item.title} NFT`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  {/* <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full border border-white/20">
                    Last Sale: {item.lastSale}
                  </div> */}
                  
                  {/* Navigation Buttons */}
                  <button
                    onClick={() => handleScroll("left")}
                    disabled={activeIndex === 0}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transition-all ${
                      activeIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-white"
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5 text-black" />
                  </button>
                  
                  <button
                    onClick={() => handleScroll("right")}
                    disabled={activeIndex === recommendedNFTs.length - 1}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transition-all ${
                      activeIndex === recommendedNFTs.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-white"
                    }`}
                  >
                    <ChevronRight className="w-5 h-5 text-black" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          {recommendedNFTs.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={item.backgroundImage}
                  alt={item.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <div className="relative w-16 h-16 mb-3 rounded-full overflow-hidden">
                  <Image src={item.profileImage} alt={item.title} fill />
                </div>
                <div className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <Icons.verify className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-white/80 text-sm line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {recommendedNFTs.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex
                    ? "bg-white"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Desktop View */}
        <div className="px-4">
          <Card
            className="hidden md:block overflow-hidden rounded-3xl bg-gradient-to-r from-[#3B2B3B] to-[#2B2B3B]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative aspect-[3/1] w-full">
              {/* Background Images with Fade Transition */}
              {recommendedNFTs.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={item.backgroundImage}
                    alt={item.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}

              {/* Description Overlay with Fade Transition */}
              {recommendedNFTs.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute left-8 bottom-8 max-w-[27rem] transition-opacity duration-500 ${
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="relative w-20 h-20 mb-3 rounded-full overflow-hidden">
                    <Image src={item.profileImage} alt={item.title} fill />
                  </div>
                  <div className="bg-white/10 backdrop-blur-lg p-4 rounded-3xl">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <Icons.verify className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-white/80 text-lg">{item.description}</p>
                  </div>
                </div>
              ))}

              {/* Cards Section with Slide Transition */}
              <div className="absolute bottom-0 right-0 w-[500px] h-full group">
                <div className="relative h-full">
                  {/* Navigation Buttons */}
                  <button
                    onClick={() => handleScroll("left")}
                    disabled={activeIndex === 0}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white backdrop-blur-sm flex items-center justify-center transition-all ${
                      activeIndex === 0
                        ? "opacity-0 cursor-not-allowed"
                        : "opacity-0 group-hover:opacity-100 hover:bg-white/20"
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5 text-black" />
                  </button>

                  <button
                    onClick={() => handleScroll("right")}
                    disabled={activeIndex === recommendedNFTs.length - 1}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white backdrop-blur-sm flex items-center justify-center transition-all ${
                      activeIndex === recommendedNFTs.length - 1
                        ? "opacity-0 cursor-not-allowed"
                        : "opacity-0 group-hover:opacity-100 hover:bg-white/20"
                    }`}
                  >
                    <ChevronRight className="w-5 h-5 text-black" />
                  </button>

                  {/* Single Card Display */}
                  <div className="flex items-center justify-center h-full px-8">
                    {recommendedNFTs.map((item, index) => (
                      <div
                        key={item.id}
                        className={`absolute transition-all duration-500 transform ${
                          index === activeIndex
                            ? "opacity-100 translate-x-0"
                            : index < activeIndex
                              ? "opacity-0 -translate-x-full"
                              : "opacity-0 translate-x-full"
                        }`}
                      >
                        <Card className="w-[380px] bg-white/5 backdrop-blur-sm overflow-hidden rounded-2xl border-0 hover:bg-white/10 transition-colors cursor-pointer">
                          <div className="relative aspect-square">
                            <Image
                              src={item.nftImage}
                              alt={`${item.title} NFT`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
