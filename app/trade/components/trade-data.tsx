"use client";
import React, { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EthIcon, Icons } from "../../components/icons";
import TradeChart from "./trade-chart";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Gem } from "lucide-react";

const TradeData = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = 300 + 16; // card width + gap
    const currentScroll = container.scrollLeft;
    const targetScroll =
      direction === "right"
        ? currentScroll + scrollAmount
        : currentScroll - scrollAmount;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };
  return (
    <div className=" w-full grid grid-cols-12 gap-4 my-4">
      <div className="col-span-12 md:col-span-5">
        <Accordion type="single" collapsible className=" w-full space-y-2">
          <AccordionItem
            value={`item-traits`}
            className="border rounded-md px-4"
          >
            <AccordionTrigger>Traits</AccordionTrigger>
            <AccordionContent>
              <hr />
              <ul className="my-2 space-y-3">
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <li key={index} className="w-full">
                    <div className="w-full flex justify-between items-center">
                      <div className="uppercase">Trait count</div>
                      <div className="flex items-center gap-1">
                        <p className="">7</p>
                        <span className="text-gray-500">(18.8%)</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value={`item-$`} className="border rounded-md px-4">
            <AccordionTrigger>Details</AccordionTrigger>
            <AccordionContent>
              <hr />
              <ul className="my-2 space-y-3">
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <li key={index} className="w-full">
                    <div className="w-full flex justify-between items-center">
                      <div className="uppercase">Contract address</div>
                      <div className="flex items-center gap-1">
                        <p className="text-blue-500">BC4C...FL3D</p>
                        {/* <span className="text-gray-500">(18.8%)</span> */}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value={`item-desc`} className="border rounded-md px-4">
            <AccordionTrigger>Description</AccordionTrigger>
            <AccordionContent>
              <div className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
                ab illo est ipsam modi, fugiat officiis enim ex deserunt, earum
                impedit dolorem? Eaque architecto fuga accusamus fugiat totam
                provident possimus.
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="col-span-12 md:col-span-7">
        <Accordion type="single" collapsible className="w-full space-y-2">
          <AccordionItem
            value={`item-offer`}
            className="border rounded-md px-4"
          >
            <AccordionTrigger>
              <div className="w-full flex justify-between">
                <div className="">Offers</div>
                <div className="flex items-center gap-1">
                  <div className="text-sm text-gray-500">Top Offer</div>
                  <div className="">
                    <span className=""></span>
                    <p className="">4.5</p>
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="">
                <hr />
                <ul className="my-2 divide-y divide-gray-100">
                  <li className="w-full">
                    <div className="w-full flex justify-between items-center">
                      <div className="flex flex-col  gap-1">
                        <div className="flex gap-2 items-center">
                          {" "}
                          <p className="flex items-center gap-2">
                            <EthIcon /> <span>4.5</span>
                          </p>
                          <span className="text-gray-500">($8324.98)</span>
                        </div>
                        <div className="text-gray-500 text-xs">
                          By 0x77C0,Expires in 3 Months
                        </div>
                      </div>
                      <div className="uppercase text-sm">4% Below</div>
                    </div>
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value={`item-$`} className="border rounded-md px-4">
            <AccordionTrigger>Price History</AccordionTrigger>
            <AccordionContent>
              <TradeChart />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="col-span-12 mt-10">
        <div className="space-y-10">
          <h3 className="text-3xl font-semibold">More from this Collection</h3>

          {/* <div className="flex gap-3 flex-wrap">
            {[1, 2, 3, 4].map((item, index) => (
              <Card key={index} className="overflow-hidden rounded-2xl w-56">
                <div className="relative aspect-square">
                  <Image
                    src={"/collections/collectionItem.jpg"}
                    alt={`ON1 jn`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-sm text-muted-foreground">ON1hbiu</div>
                  <div className="flex items-center justify-between">
                    <div className="">kbguhlj</div>
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-2 text-[#614BC3]"
                    >
                      <Gem className="h-3 w-3 " />
                      <div className="">839</div>
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div> */}
          <div className="relative group">
            {/* Navigation Buttons */}
            <button
              onClick={() => handleScroll("left")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => handleScroll("right")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth"
            >
              {[1, 2, 3, 4].map((item, index) => (
                <Card key={index} className="overflow-hidden rounded-2xl w-56 flex flex-shrink-0 ">
                <div className="relative w-full h-full">
                  <Image
                    src={"/collections/collectionItem.jpg"}
                    alt={`ON1 jn`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-sm text-muted-foreground">ON1hbiu</div>
                  <div className="flex items-center justify-between">
                    <div className="">kbguhlj</div>
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-2 text-[#614BC3]"
                    >
                      <Gem className="h-3 w-3 " />
                      <div className="">839</div>
                    </Badge>
                  </div>
                </div>
              </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeData;
