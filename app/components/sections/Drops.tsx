"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Icons } from "../icons";

export function Drops() {
  return (
    <section className="px-4 py-8">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl font-bold mb-6">Drops</h2>

        <Card className="relative overflow-hidden rounded-3xl">
          <div className="relative aspect-[3/1] w-full">
            <Image
              src="/drops/drops.jpg"
              alt="Drops background"
              fill
              className="object-cover"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-r from-[#3B2B3B]/80 to-[#2B2B3B]/80" /> */}
            <div className="relative flex items-center justify-between p-8 h-full">
              {/* Left Content */}
              <div className="space-y-4 h-full w-full flex flex-col justify-between">
                <div className="">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-white">
                      XOCIETY Frontier
                    </span>
                    <Icons.verify />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-300">
                      By XOSIETYofficial
                    </span>
                    <Icons.verify className="[&>path]:fill-white" />
                  </div>
                </div>

                <div className="mt-12 w-full space-y-4">
                  <div className="font-semibold flex gap-2">
                    <div className="text-gray-200">Open edition</div>
                    <div className="text-white">0.00269 ETH</div>
                  </div>
                  <div className="w-full flex items-center gap-4 justify-between">
                    <div className=" w-full flex justify-between gap-3">
                      <Button className="bg-zinc-800/50 hover:bg-zinc-800/70 text-white">
                        Minting now
                        <span className="ml-2 h-2 w-2 rounded-full bg-green-500"></span>
                      </Button>
                      <Button className="bg-primary" size={"lg"}>
                        View drop
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
