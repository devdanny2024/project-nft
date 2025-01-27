import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Icons } from "@/app/components/icons";
import Image from "next/image";
import { Filter, Gem } from "lucide-react";

const items = Array(16).fill({
  id: "#5536",
  price: "0.95 ETH",
  image: "/collections/collectionItem.jpg",
});

export function CollectionGrid() {
  return (
    <div className="space-y-6">
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

      <div className="grid grid-cols-4 gap-4">
        {items.map((item, index) => (
          <Card key={index} className="overflow-hidden rounded-2xl">
            <div className="relative aspect-square">
              <Image
                src={item.image}
                alt={`ON1 ${item.id}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="text-sm text-muted-foreground">ON1 {item.id}</div>
              <div className="flex items-center justify-between">
                <div className="">{item.price}</div>
                <Badge variant="secondary" className="flex items-center gap-2 text-[#614BC3]">
                  <Gem className="h-3 w-3 " />
                  <div className="">839</div>
                </Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button variant="outline">Load more</Button>
      </div>
    </div>
  );
}
