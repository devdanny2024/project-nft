import { Icons } from "@/app/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter } from "lucide-react";
import React from "react";
import DealsListItems from "./deals-List-Items";

const items = Array(10).fill({
    id:"#758767"
})
const DealsList = () => {
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
        {items.map((item, index)=>(
            <DealsListItems key={index}/>
        ))}
      </div>
    </div>
  );
};

export default DealsList;
