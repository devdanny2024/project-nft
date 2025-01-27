import { Card } from "@/components/ui/card";

const stats = [
  {
    label: "ITEMS",
    value: "19.9K",
  },
  {
    label: "OWNERS",
    value: "5.53K",
  },
  {
    label: "VOL.",
    value: "117.43K",
  },
  {
    label: "FLOOR",
    value: "31.1",
  },
];

export function CollectionStats() {
  return (
    <div className="flex gap-12 mt-8 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col">
          <span className="text-sm text-muted-foreground">{stat.label}</span>
          <span className="text-2xl font-bold">{stat.value}</span>
        </div>
      ))}
    </div>
  );
}
