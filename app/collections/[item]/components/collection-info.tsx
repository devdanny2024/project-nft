import { Icons } from "@/app/components/icons";
import { Globe, Twitter, Share2, Heart } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function CollectionInfo() {
  return (
    <div>
      {/* Profile Image - Positioned to overlap banner */}
      <div className="relative -mt-[72px] mb-6">
        <div className="relative h-36 w-36 rounded-full overflow-hidden border-8 border-background">
          <Image
            src="/collections/c1.jpg"
            alt="Collection profile"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex gap-8">
        {/* Left side - Info */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-bold">ON1 Force</h1>
            <Icons.verify className="w-6 h-6" />
          </div>
          <div className="flex items-center gap-2 mt-1 text-muted-foreground">
            <span>By NullAddress</span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Globe className="h-5 w-5" />
            </Button>
            <Separator orientation="vertical" className="h-5" />
            <Button variant="ghost" size="icon" className="rounded-full">
              <Share2 className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Right side - Social Links */}
        <div className="flex items-start gap-2">
          {/* Description */}
          <div className="">
            <p className="mt-1 text-muted-foreground max-w-xl">
              ON1 Force is a non-fungible token (NFT) collection depicting 7,777
              otherworldly warriors known as the ON1 (pronounced OH-knee). Each
              of the monsters, demons and ghost spirits that make ...
            </p>
            <button className="text-primary mt-1">See more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
