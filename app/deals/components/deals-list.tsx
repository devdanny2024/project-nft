import { Icons } from "@/app/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter } from "lucide-react";
import React from "react";
import DealsListItems from "./deals-List-Items";
import { useWatchContractEvent } from "wagmi";
import { useEffect, useState } from "react";
import { abi } from "@/app/assets/TransferABI";

interface TransferEvent {
  args: {
    from: `0x${string}`;
    to: `0x${string}`;
    tokenId: bigint;
  };
  address: `0x${string}`;
  blockTimestamp: string;
}

const addresses = [
  "0x23581767a106ae21c074b2276D25e5C3e136a68b", //moonbird
  "0x333814f5E16EEE61d0c0B03a5b6ABbD424B381c2", //bullas
  "0xB6a37b5d14D502c3Ab0Ae6f3a0E058BC9517786e", //elemental
  "0x306b1ea3ecdf94aB739F1910bbda052Ed4A9f949", //beanz
  "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D", //bored ape
  "0x60E4d786628Fea6478F785A6d7e704777c86a7c6", //mutant ape
  "0x716039AB9Ce2780e35450B86Dc6420f22460C380", //cool monke
  "0x1A92f7381B9F03921564a437210bB9396471050C", //cool cat
  "0xaAdBA140Ae5e4c8a9eF0Cc86EA3124b446e3E46A", //mutant cat
  "0x5af0d9827e0c53e4799bb226655a1de152a425a5",
  "0x521f9c7505005cfa19a8e5786a9c3c9c9f5e6f42",
  "0x71d1e9741da1e25ffd377be56d133359492b9c3b",
  "0xe6d48bf4ee912235398b96e16db6f310c21e82cb",
  "0xd098c59d5d4a1ac3909f6093d0cf565314ecd240",
  "0x12dd66366d45f44128083233c6fbadfe7cbae221",
  "0xcb0477d1af5b8b05795d89d59f4667b59eae9244",
] as const satisfies `0x${string}`[];

const DealsList = () => {
  const [transfers, setTransfers] = useState<TransferEvent[]>([]);

  useWatchContractEvent({
    address: addresses,
    abi,
    eventName: "Transfer",
    onLogs(logs) {
      // console.log("New logs: ", logs);
      setTransfers((prevTransfers) => [...logs, ...prevTransfers]);
    },
  });

  // useEffect(() => {
  //   console.log("New transfers:", transfers);
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
        {transfers.map((transfer, index) => (
          <DealsListItems key={index} transfer={transfer} />
        ))}
      </div>
    </div>
  );
};

export default DealsList;
