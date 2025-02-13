"use client";


import { Button } from "@/components/ui/button";
import React from "react";
import { useAccount } from "wagmi";
import { CustomConnectButton } from "../../components/CustomConnectButton"; // Import the connect button

const TradeTitle = () => {
  const { address, isConnected, chainId } = useAccount();

  return (
  <div className="flex items-center justify-between pt-10">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Initiate Swap</h1>
          {!isConnected || !address ? (
            <div className="text-gray-400">Kindly connect wallet</div>
          ) : null}
        </div>

        <div>
          {isConnected && address ? (
            <Button className="text-sm bg-[#33BBC5]" size="lg">
              Approve Trade
            </Button>
          ) : (
            <CustomConnectButton />
          )}
        </div>
      </div>
    );
  };

export default TradeTitle;
