import { Separator } from "@/components/ui/separator";
import { ArrowRightLeft } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useEnsAvatar, useEnsName } from "wagmi";

interface TransferEvent {
  from: `0x${string}`;
  to: `0x${string}`;
  tokenId: string;
  blockTimestamp: string;
  transactionHash: `0x${string}`;
  contractAddress: `0x${string}`;
  image: string | null;
}

interface DealsListItemsProps {
  transfer: TransferEvent;
}

const DealsListItems = ({ transfer }: DealsListItemsProps) => {
  const unixTimestamp = parseInt(transfer.blockTimestamp, 16);
  const from = transfer.from;
  const to = transfer.to;
  const transactionHash = transfer.transactionHash;

  const sender = useEnsName({
    address: from,
  });

  const receiver = useEnsName({
    address: to,
  });

  const senderAvatar = useEnsAvatar({
    name: sender.data as string,
  });

  const receiverAvatar = useEnsAvatar({
    name: receiver.data as string,
  });

  return (
    <div className="border p-4 rounded-lg ">
      <div className="flex flex-col md:flex-row items-center gap-3 text-xs">
        <div className="flex items-center gap-2">
          <div className="">
            <div className="h-8 w-8 rounded-full overflow-hidden">
              <Image
                src={senderAvatar.data || "/collections/c5.jpg"}
                alt={"akt"}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          </div>
          <div className="border border-[#33BBC5] p-1 px-2 text-[#33BBC5] text-[11px] font-bold rounded">
            Direct Deal
          </div>
          <div className="">
            <div className="h-8 w-8 rounded-full overflow-hidden">
              <Image
                src={senderAvatar.data || "/collections/c5.jpg"}
                alt={"akt"}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="font-bold">Completed Deal</div>
        <div className="text-gray-500">
          {new Date(unixTimestamp * 1000).toUTCString()}
        </div>
        {/* <div className="text-gray-500"></div> */}
        <a
          href={`https://etherscan.io/tx/${transactionHash}`}
          target="_blank"
          className="text-blue-400"
        >
          {transactionHash.slice(0, 8)}....
          {transactionHash.slice(-6)}
        </a>
      </div>
      <div className="mt-4 py-4 flex items-center justify-between">
        <div className=" md:flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <Image
                src={senderAvatar.data || "/collections/c5.jpg"}
                alt={"akt"}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div className="text-sm ">
              <div className="font-bold">
                {sender.data || "username not set"}
              </div>
              <div className="">
                {from && `${from.slice(0, 8)}....${from.slice(-4)}`}
              </div>
            </div>
          </div>

          <div className="bg-gray-400 w-[1px] h-10 mx-4"></div>

          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <Image
                src={receiverAvatar.data || "/collections/c6.jpg"}
                alt={"akt"}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div className="text-sm ">
              <div className="font-bold">
                {receiver.data || "username not set"}
              </div>
              <div className="">
                {to && `${to.slice(0, 8)}....${to.slice(-4)}`}
              </div>
            </div>
          </div>
        </div>
        {/* lhs */}
        {/* <ArrowRightLeft /> */}
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg overflow-hidden relative">
            <img
              src={transfer.image || "/collections/collectionItem.jpg"}
              alt={"akt"}
              // fill
              sizes=""
              className="object-cover"
              onError={(e) =>
                (e.currentTarget.src = "/collections/collectionItem.jpg")
              }
            />
            {/*sender nft image*/}
          </div>
          {/* <div className="">
            <ArrowRightLeft />
          </div>
          <div className="h-12 w-12 rounded-lg overflow-hidden relative">
            <Image
              src={"/collections/collectionItem.jpg"}
              alt={"akt"}
              fill
              className="object-cover"
            />
            reciever nft image
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DealsListItems;
