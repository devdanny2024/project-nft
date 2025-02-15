"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { CustomConnectButton } from "../../components/CustomConnectButton"; // Import the connect button
import abi from "@/app/assets/abi/ContractABI.json";
import { useAccount, useWriteContract } from "wagmi";

const TradeTitle = () => {
  const contractAddress =
    "0xbbbaa48aef31079e12882be294032efcc4145cfc" as `0x${string}`;
  const { writeContractAsync } = useWriteContract();

  const handleClick = async () => {
    const res = await writeContractAsync({
      abi,
      address: contractAddress,
      functionName: "safeTransferMultipleERC721Tokens",
      args: [
        [], //array for tokenContracts
        [], //array for tokenIds
        "", //address of recipient
      ],
    });
  };
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
          <Button
            className="text-sm bg-[#33BBC5]"
            size="lg"
            onClick={handleClick}
          >
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
