import { Card, CardContent } from "@/components/ui/card";

const TOP_BUYS = [
  { name: "Doodles", price: "0.013 ETH" },
  { name: "Nakamigos", price: "0.013 ETH" },
  { name: "Rug Radio", price: "0.013 ETH" },
  { name: "Ducks", price: "0.013 ETH" },
] as const;

export function TopCollectorBuys() {
  return (
    <section className="px-4 py-12">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-2xl font-bold mb-6">Top Collector Buys Today</h2>
        <div className="grid grid-cols-4 gap-4">
          {TOP_BUYS.map((item) => (
            <Card key={item.name} className="bg-[#1A1A1A] border-[#2A2A2A] hover:border-[#3A3A3A] transition-colors overflow-hidden">
              <CardContent className="p-4">
                <div className="w-full h-[200px] bg-[#2A2A2A] rounded-lg mb-4" />
                <div>
                  <h3 className="font-semibold mb-1 text-[#E0E0E0]">{item.name}</h3>
                  <p className="text-sm text-[#808080]">{item.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 