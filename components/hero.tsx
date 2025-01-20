import Image from "next/image";
import NextLogo from "./next-logo";
import SupabaseLogo from "./supabase-logo";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Compass } from "lucide-react";

export default function Header() {
  return (
    <section className="px-4 py-8 md:py-12">
    <div className="max-w-[1400px] mx-auto">
      {/* Featured NFT Card - Mobile Only */}
      <div className="md:hidden mb-8">
        <Card className="bg-[#1A1A1A] border-[#2A2A2A] overflow-hidden">
          <div className="relative">
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-[#1A1A1A]/80 backdrop-blur-sm text-sm px-4 py-1.5 rounded-full">
                Ekos Genesis
              </span>
            </div>
            <Image
              src="/placeholder-nft-1.jpg"
              alt="Featured NFT"
              width={600}
              height={600}
              className="w-full aspect-square object-cover"
            />
          </div>
        </Card>
      </div>

      {/* Hero Content */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover, collect and create<br className="hidden md:block" /> your own digital masterpiece.
        </h1>
        <p className="text-[#808080] mb-6">
          Best marketplace for crypto collectibles
        </p>
        <div className="flex gap-3 ">
          <Button className="flex-1 md:flex-none bg-[#2E6EFF] hover:bg-[#2555CC] transition-colors">
            Create
          </Button>
          <Button variant="outline" className="flex-1 md:flex-none border-[#2A2A2A] hover:border-[#3A3A3A] hover:bg-[#1A1A1A]">
            <Compass className="mr-2 h-4 w-4" />
            Explore
          </Button>
        </div>
      </div>

      {/* Featured NFTs Grid - Desktop Only */}
      <div className="hidden md:grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((item) => (
          <Card key={item} className="bg-[#1A1A1A] border-[#2A2A2A] overflow-hidden">
            <Image
              src={`/placeholder-nft-${item}.jpg`}
              alt="NFT"
              width={300}
              height={300}
              className="w-full h-[300px] object-cover"
            />
          </Card>
        ))}
      </div>
    </div>
  </section>
  );
}
