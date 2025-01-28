import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CartProps {
  className?: string;
}

export function Cart({ className }: CartProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className={className}>
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px]">
        <SheetHeader>
          <div className="flex items-center justify-between">
            <SheetTitle>your cart</SheetTitle>
            <Button variant="ghost" className="text-base font-normal">
              Clear all
            </Button>
          </div>
        </SheetHeader>
        <div className="mt-8">
          <div className="flex justify-between items-center">
            <h2 className="text-xl">1 Item</h2>
          </div>
          <div className="mt-6">
            <div className="flex gap-4">
              <div className="relative h-20 w-20 rounded-lg overflow-hidden">
                <Image
                  src="/collections/collectionItem.jpg"
                  alt="NFT"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <p className="text-lg font-medium">#8779</p>
                    <p className="text-lg">Samurai Saga</p>
                  </div>
                  <p className="text-lg">0.098 ETH</p>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Creator earnings: 10%
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 space-y-4">
            <div className="flex justify-between text-lg">
              <p>Total price</p>
              <div>
                <p>0.098 ETH</p>
                <p className="text-right text-sm text-muted-foreground">
                  $158.88
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-lg font-medium">Payment method</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="crypto"
                    name="payment"
                    className="h-4 w-4"
                    defaultChecked
                  />
                  <label htmlFor="crypto" className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 784.37 1277.39"
                      fill="currentColor"
                    >
                      <path
                        d="M392.07 0l-8.57 29.11v844.63l8.57 8.55 392.06-231.75z"
                        fill="currentColor"
                        fillOpacity={0.4}
                      />
                      <path
                        d="M392.07 0L0 650.54l392.07 231.75V472.33z"
                        fill="currentColor"
                      />
                      <path
                        d="M392.07 956.52l-4.83 5.89v300.87l4.83 14.1 392.3-552.49z"
                        fill="currentColor"
                        fillOpacity={0.4}
                      />
                      <path
                        d="M392.07 1277.38V956.52L0 724.89z"
                        fill="currentColor"
                      />
                    </svg>
                    Crypto
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="card"
                    name="payment"
                    className="h-4 w-4"
                  />
                  <label htmlFor="card" className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="2"
                        y="5"
                        width="20"
                        height="14"
                        rx="2"
                        strokeWidth="2"
                      />
                      <path d="M2 10h20" strokeWidth="2" />
                    </svg>
                    Credit or debit card
                  </label>
                </div>
              </div>
            </div>
            <Button className="w-full bg-[#2E6EFF] hover:bg-[#2555CC] transition-colors text-white">
              Complete purchase
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
