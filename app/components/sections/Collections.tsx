const COLLECTIONS = [
  { name: "Bored Ape Yacht Club", floor: "29.95", change: "-0.1%", volume: "198.58" },
  { name: "Doodles", floor: "5.044", change: "+4.1%", volume: "102.3" },
  { name: "Azuki", floor: "4.2688", change: "0.0%", volume: "32.73" },
] as const;

export function Collections() {
  return (
    <section className="px-4 py-12">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-2xl font-bold mb-6">Collections</h2>
        <div className="space-y-4">
          {COLLECTIONS.map((collection) => (
            <div key={collection.name} className="flex items-center justify-between p-4 bg-[#1A1A1A] rounded-lg border border-[#2A2A2A]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#2A2A2A] rounded-full" />
                <span>{collection.name}</span>
              </div>
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-sm text-[#808080]">Floor</p>
                  <p>{collection.floor}</p>
                </div>
                <div>
                  <p className="text-sm text-[#808080]">24h%</p>
                  <p className={collection.change.startsWith("+") ? "text-[#4CAF50]" : "text-[#F44336]"}>
                    {collection.change}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#808080]">Volume</p>
                  <p>{collection.volume}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 