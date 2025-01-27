"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
// import {
//   Tabs,
//   TabsList,
//   TabsTrigger,
//   TabsContent,
// } from "../../../../components/ui/tabs";
import { CollectionGrid } from "./collection-grid";
import { CollectionActivities } from "./collection-activities";
import { useSearchParams, useRouter } from "next/navigation";

export function CollectionTabs() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "items";

  const handleTabChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", value);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <Tabs value={tab} onValueChange={handleTabChange} className="mt-8 ">
      <div className="flex items-center justify-between border-b">
        <TabsList className="bg-transparent border-o">
          <TabsTrigger
            value="items"
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none"
          >
            Items
          </TabsTrigger>
          <TabsTrigger
            value="activities"
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none text-muted-foreground"
          >
            Activities
          </TabsTrigger>
        </TabsList>
        <div className="flex items-center gap-2 text-sm text-muted-foreground ">
          <div className="bg-green-500/40 h-4 w-4 rounded-full flex items-center justify-center">
            <div className="bg-green-600 h-2 w-2 rounded-full"></div>
          </div>
          <span className="text-muted-foreground">19,481 results</span>
        </div>
      </div>

      <TabsContent value="items" className="mt-6">
        <CollectionGrid />
      </TabsContent>

      <TabsContent value="activities">
        <CollectionActivities />
      </TabsContent>
    </Tabs>
  );
}
