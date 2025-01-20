import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export function Recommend() {
  return (
    <section className="px-4 py-8">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl font-bold mb-6">Recommend</h2>

        <div className="relative">
          {/* Navigation Dots */}


          {/* Next Button */}
          <button className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          <Card className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#3B2B3B] to-[#2B2B3B]">
            <div className="relative aspect-[3/1] w-full">
              <Image
                src="/oni-force-banner.jpg"
                alt="ON1 Force Collection"
                fill
                className="object-cover"
              />

              {/* Collection Logo */}
              <div className="absolute left-8 top-8 bg-black/50 backdrop-blur-sm rounded-full p-2">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-xl">⚡</span>
                </div>
              </div>

              {/* Description Overlay */}
              <div className="absolute left-8 bottom-8 max-w-xl">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white">ON1 Force</h3>
                  <Badge className="bg-blue-500/20 text-blue-400">✧</Badge>
                </div>
                <p className="text-white/80 text-sm line-clamp-2">
                  ON1 Force is a non-fungible token (NFT) collection depicting
                  7,777 otherworldly warriors known as the ON1 (pronounced
                  OH-knee) ...
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
