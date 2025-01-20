import { Card, CardContent } from "@/components/ui/card";

const TRENDING = [
  { name: "Bored Ape Yacht Club", price: "0.023 ETH" },
  { name: "Doodles Genesis", price: "0.013 ETH" },
  { name: "Meme Standard", price: "0.023 ETH" },
  { name: "NFT Genesis Format", price: "0.013 ETH" },
] as const;

export function TrendingCollections() {
  return (
    <section className="px-4 py-12 bg-[#141414]">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-2xl font-bold mb-6">Trending Collections</h2>
        <div className="grid grid-cols-4 gap-4">
          {TRENDING.map((item) => (
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