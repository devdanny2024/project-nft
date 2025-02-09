import { Separator } from "@/components/ui/separator";
import { ArrowRightLeft } from "lucide-react";
import Image from "next/image";
import React from "react";

const DealsListItems = () => {
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
        <div className="font-bold">Ongoing Deal</div>
        <div className="text-gray-500">fri jan 31 2025 18:06</div>
      </div>
      <div className="mt-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <Image
                src={"/collections/c5.jpg"}
                alt={"akt"}
                width={40}
                height={40}
                className="object-cover"
              />{" "}
              {/*add comment*/}
            </div>
            <div className="text-sm ">
              <div className="font-bold">@DQ3</div> {/*add comment*/}
              <div className="">0x768765....987564ft</div> {/*add comment*/}
            </div>
          </div>

          <div className="bg-gray-400 w-[1px] h-10 mx-4"></div>

          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <Image
                src={"/collections/c6.jpg"}
                alt={"akt"}
                width={40}
                height={40}
                className="object-cover"
              />{" "}
              {/*add comment*/}
            </div>
            <div className="text-sm ">
              <div className="font-bold">@DQ3</div> {/*add comment*/}
              <div className="">0x768765....987564ft</div>
            </div>
          </div>
        </div>
        {/* lhs */}
        {/* <ArrowRightLeft /> */}
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg overflow-hidden relative">
            <Image
              src={"/collections/collectionItem.jpg"}
              alt={"akt"}
              fill
              className="object-cover"
            />
            {/*add comment*/}
          </div>
          <div className="">
            <ArrowRightLeft />
          </div>
          <div className="h-12 w-12 rounded-lg overflow-hidden relative">
            <Image
              src={"/collections/collectionItem.jpg"}
              alt={"akt"}
              fill
              className="object-cover"
            />
            {/*add comment*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsListItems;
