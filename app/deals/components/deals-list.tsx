import { Icons } from "@/app/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter } from "lucide-react";
import React from "react";
import DealsListItems from "./deals-List-Items";
import { useWatchContractEvent } from "wagmi";
import { useEffect, useState } from "react";
import { abi } from "@/app/assets/TransferABI";
import { createClient } from "@supabase/supabase-js";
import { addresses } from "@/app/assets/Addresses";
import axios from "axios";

interface TransferEvent {
  from: `0x${string}`;
  to: `0x${string}`;
  tokenId: string;
  blockTimestamp: string;
  transactionHash: `0x${string}`;
  contractAddress: `0x${string}`;
  image: string | null;
}

const supabaseUrl = "https://dankbbqrzjuyxqjgrsjh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRhbmtiYnFyemp1eXhxamdyc2poIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg2MDc1OTEsImV4cCI6MjA1NDE4MzU5MX0.3G5p9e8qYw6CIfxYHZFKFcbVfojMYRGg3pSAe5_u6xA";
const supabase = createClient(supabaseUrl, supabaseKey);

const DealsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [transfers, setTransfers] = useState<TransferEvent[]>([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data, error } = await supabase
          .from("NFT Transfers")
          .select()
          .order("created_at", { ascending: false })
          .limit(20);
        const transfers: TransferEvent[] = data || [];
        setTransfers(transfers);
        setIsLoading(false);
        if (error) {
          console.log("Error: ", error);
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    fetch();
  }, []); //fetch from supabase

  const insert = async (transfer: TransferEvent[]): Promise<void> => {
    try {
      const { error } = await supabase.from("NFT Transfers").insert(transfer);
      if (error) {
        console.log(error);
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const fetchNFTImage = async (
    contractAddress: string,
    tokenId: string
  ): Promise<string | null> => {
    const options = {
      method: "GET",
      url: "https://eth-mainnet.g.alchemy.com/nft/v3/V4QidqQN3CnapxngEQGMGFl0ZEkS72Bg/getNFTMetadata",
      params: {
        contractAddress,
        tokenId,
        refreshCache: "false",
      },
      headers: { accept: "application/json" },
    };
    try {
      const { data } = await axios.request(options);
      return data.image.cachedUrl || null;
    } catch (error) {
      console.error("Error: ", error);
      return null;
    }
  };

  useWatchContractEvent({
    address: addresses,
    abi,
    eventName: "Transfer",
    async onLogs(logs) {
      let transfer: TransferEvent[] = await Promise.all(
        logs.map(async (log) => {
          const imageUrl = await fetchNFTImage(
            log.address,
            log.args.tokenId.toString()
          );
          return {
            from: log.args.from as `0x${string}`,
            to: log.args.to as `0x${string}`,
            tokenId: log.args.tokenId.toString(),
            blockTimestamp: log.blockTimestamp,
            transactionHash: log.transactionHash,
            contractAddress: log.address,
            image: imageUrl,
          };
        })
      );
      insert(transfer);
      setTransfers((prevTransfers) => [...transfer, ...prevTransfers]);
    },
  });

  // useEffect(() => {
  //   if (transfers.length > 20) {
  //     setTransfers((prevTransfers) => prevTransfers.slice(0, 20));
  //   }
  // }, [transfers]);

  return (
    <div>
      <div className="flex items-center gap-4">
        {/* Filter Button */}
        <Button variant="outline" size="lg" className="gap-2">
          <Filter className="h-4 w-4" />
          Price low to high
        </Button>

        {/* Search Input */}
        <div className="flex-1">
          <Input placeholder="Search by name or trait" className="max-w-md" />
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-2 border rounded-lg p-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Icons.list className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Icons.grid className="h-4 w-4" />
          </Button>
        </div>
      </div>
      {/* list items */}
      <div className="space-y-4 mt-5">
        {isLoading ? (
          <p>Loading</p>
        ) : (
          transfers.map((transfer, index) => (
            <DealsListItems key={index} transfer={transfer} />
          ))
        )}
      </div>
    </div>
  );
};

export default DealsList;
