import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Compass } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="px-4 py-8 md:py-12 bg-background">
      <div className="max-w-[1400px] mx-auto">
        {/* Featured NFT Card - Mobile Only */}
        <div className="md:hidden mb-8">
          <Card className="bg-card border-border overflow-hidden">
            <div className="relative">
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-background/80 backdrop-blur-sm text-foreground text-sm px-4 py-1.5 rounded-full">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Discover, collect and create
            <br className="hidden md:block" /> your own digital masterpiece.
          </h1>
          <p className="text-muted-foreground mb-6">
            Best marketplace for crypto collectibles
          </p>
          <div className="flex gap-3">
            <Button className="flex-1 md:flex-none bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              Create
            </Button>
            <Button
              variant="outline"
              className="flex-1 md:flex-none border-border hover:bg-accent"
            >
              <Compass className="mr-2 h-4 w-4" />
              Explore
            </Button>
          </div>
        </div>

        {/* Featured NFTs Grid - Desktop Only */}
        <div className="hidden md:grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="bg-card border-border overflow-hidden">
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
