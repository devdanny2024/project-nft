"use client";

import { Badge } from "@/components/ui/badge";
import { Icons } from "@/app/components/icons";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { CollectionVolumeChart } from "./collection-volume-chart";

const activities = [
  {
    type: "Sale",
    item: "#5536",
    price: "0.95 ETH",
    from: "0x1234...5678",
    to: "0x8765...4321",
    time: "2 minutes ago",
    image: "/collections/collectionItem.jpg",
  },
  {
    type: "List",
    item: "#2891",
    price: "1.2 ETH",
    from: "0x2468...1357",
    to: "-",
    time: "5 minutes ago",
    image: "/collections/collectionItem.jpg",
  },
  {
    type: "Transfer",
    item: "#7123",
    price: "-",
    from: "0x9876...5432",
    to: "0x3456...7890",
    time: "10 minutes ago",
    image: "/collections/collectionItem.jpg",
  },
] as const;

export function CollectionActivities() {
  return (
    <div className="space-y-6">
      <CollectionVolumeChart />
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs uppercase text-muted-foreground bg-muted/30">
            <tr>
              <th scope="col" className="px-6 py-3">
                Event
              </th>
              <th scope="col" className="px-6 py-3">
                Item
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                From
              </th>
              <th scope="col" className="px-6 py-3">
                To
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={index} className="border-b hover:bg-muted/50">
                <td className="px-6 py-4">
                  <Badge
                    variant={
                      activity.type === "Sale"
                        ? "default"
                        : activity.type === "List"
                          ? "secondary"
                          : "outline"
                    }
                    className="gap-1"
                  >
                    {activity.type === "Sale" && (
                      <Icons.verify className="h-3 w-3" />
                    )}
                    {activity.type === "List" && (
                      <ArrowUpRight className="h-3 w-3" />
                    )}
                    {activity.type === "Transfer" && (
                      <ArrowRight className="h-3 w-3" />
                    )}
                    {activity.type}
                  </Badge>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="relative h-10 w-10 rounded-lg overflow-hidden">
                      <Image
                        src={activity.image}
                        alt={`ON1 ${activity.item}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span>ON1 {activity.item}</span>
                  </div>
                </td>
                <td className="px-6 py-4">{activity.price}</td>
                <td className="px-6 py-4 text-muted-foreground">
                  {activity.from}
                </td>
                <td className="px-6 py-4 text-muted-foreground">
                  {activity.to}
                </td>
                <td className="px-6 py-4 text-muted-foreground">
                  {activity.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
