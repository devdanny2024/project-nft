import { Separator } from "@/components/ui/separator";
import { ArrowRightLeft } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useEnsAvatar, useEnsName } from "wagmi";
import axios from "axios";
import { useEffect, useState } from "react";

interface TransferEvent {
  from: `0x${string}`;
  to: `0x${string}`;
  tokenId: string;
  blockTimestamp: string;
  transactionHash: `0x${string}`;
  contractAddress: `0x${string}`;
}

interface DealsListItemsProps {
  transfer: TransferEvent;
}

const DealsListItems = ({ transfer }: DealsListItemsProps) => {
  const unixTimestamp = parseInt(transfer.blockTimestamp, 16);
  const from = transfer.from;
  const to = transfer.to;

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

  const [metadata, setMetadata] = useState("/collections/collectionItem.jpg");

  const API_KEY = "V4QidqQN3CnapxngEQGMGFl0ZEkS72Bg";

  const options = {
    method: "GET",
    url: `https://eth-mainnet.g.alchemy.com/nft/v3/${API_KEY}/getNFTMetadata`,
    params: {
      contractAddress: transfer.contractAddress,
      tokenId: transfer.tokenId,
      refreshCache: "false",
    },
    headers: { accept: "application/json" },
  };

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.request(options);
      // console.log(
      //   data.image.cachedUrl,
      //   data.image.originalUrl,
      //   data.image.thumbnailUrl
      // );
      setMetadata(data.image.originalUrl);
    };
    fetch();
  }, []);

  return (
    <div className="border p-4 rounded-lg ">
      <div className="flex items-center gap-3 text-xs">
        <div className="flex items-center">
          <div className=""></div>
          <div className="border border-[#33BBC5] p-1 px-2 text-[#33BBC5] text-[11px] font-bold rounded">
            Direct Deal
          </div>
          <div className=""></div>
        </div>
        <div className="font-bold">Completed Deal</div>
        <div className="text-gray-500">
          {new Date(unixTimestamp * 1000).toUTCString()}
        </div>
      </div>
      <div className="mt-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
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
            <Image
              src={metadata}
              alt={"akt"}
              fill
              sizes=""
              className="object-cover"
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
