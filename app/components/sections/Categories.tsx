import { Card, CardContent } from "@/components/ui/card";

const CATEGORIES = ["Art", "Gaming", "Music", "Photography", "Membership"] as const;

export function Categories() {
  return (
    <section className="px-4 py-12 bg-[#141414]">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-2xl font-bold mb-6">Categories</h2>
        <div className="grid grid-cols-5 gap-4">
          {CATEGORIES.map((category) => (
            <Card key={category} className="bg-[#1A1A1A] border-[#2A2A2A] hover:border-[#3A3A3A] transition-colors">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#E0E0E0]">{category}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 