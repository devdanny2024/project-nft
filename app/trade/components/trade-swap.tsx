"use client";

import { useAccount, useWriteContract } from "wagmi";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRightLeft, Gem } from "lucide-react";
import Image from "next/image";
import React from "react";

const TradeSwap = () => {
    const { address, isConnected } = useAccount();
  
  return (
    <div className="flex justify-center items-center w-full min-h-96">
    {isConnected || address ? (

      <div className="flex flex-col md:flex-row items-center gap-12 my-5">
        <Card className="overflow-hidden rounded-2xl w-56">
          <div className="relative aspect-square">
            <Image
              src={"/collections/eth.png"}
              alt={`ON1 jn`}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="text-sm text-muted-foreground">2.0eth</div>
            <div className="flex items-center justify-between">
              <div className="">MAINET CHAIN</div>
              <Badge
                variant="secondary"
                className="flex items-center gap-2 text-[#614BC3]"
              >
                <Gem className="h-3 w-3 " />
                <div className=""></div>
              </Badge>
            </div>
          </div>
        </Card>
        <div className="">
          <ArrowRightLeft />
        </div>
        <Card className="overflow-hidden rounded-2xl w-56">
          <div className="relative aspect-square">
            <Image
              src={"/collections/aze00.png"}
              alt={`ON1 jn`}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="text-sm text-muted-foreground">Elemental #2044</div>
            <div className="flex items-center justify-between">
              <div className="">Azuki Elementals</div>
              <Badge
                variant="secondary"
                className="flex items-center gap-2 text-[#614BC3]"
              >
                <Gem className="h-3 w-3 " />
                <div className=""></div>
              </Badge>
            </div>
          </div>
        </Card>
        <Card className="overflow-hidden rounded-2xl w-56">
          <div className="relative aspect-square">
            <Image
              src={"/collections/ab001.png"}
              alt={`ON1 jn`}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="text-sm text-muted-foreground">Beanz #399</div>
            <div className="flex items-center justify-between">
              <div className="">BEANZ Official</div>
              <Badge
                variant="secondary"
                className="flex items-center gap-2 text-[#614BC3]"
              >
                <Gem className="h-3 w-3 " />
                <div className=""></div>
              </Badge>
            </div>
          </div>
        </Card>
      </div>
    ) : null}

    </div>
    
  );
};

export default TradeSwap;
