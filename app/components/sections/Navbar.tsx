"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search, ShoppingCart, WalletMinimal } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";
import { useScroll } from "../../hooks/use-scroll";
import { useState } from "react";
import { WalletModal } from "../wallet-modal";

export function Navbar() {
  const scrolled = useScroll(10);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b"
            : "bg-transparent backdrop-blur-sm"
        )}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold text-[#00E0B9]">Rare</h1>
          </div>
          <div className="hidden md:flex flex-1 items-center gap-8 justify-center">
            <div className="flex items-center gap-4">
              <a
                href="#"
                className={cn(
                  "text-sm transition-colors",
                  scrolled
                    ? "text-muted-foreground hover:text-[#00E0B9]"
                    : "text-white/80 hover:text-[#00E0B9]"
                )}
              >
                Rewards
              </a>
              <a
                href="#"
                className={cn(
                  "text-sm transition-colors",
                  scrolled
                    ? "text-muted-foreground hover:text-[#00E0B9]"
                    : "text-white/80 hover:text-[#00E0B9]"
                )}
              >
                Airdrops
              </a>
              <a
                href="#"
                className={cn(
                  "text-sm transition-colors",
                  scrolled
                    ? "text-muted-foreground hover:text-[#00E0B9]"
                    : "text-white/80 hover:text-[#00E0B9]"
                )}
              >
                Collections
              </a>
            </div>
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search
                  className={cn(
                    "absolute left-3 top-2.5 h-4 w-4",
                    scrolled ? "text-muted-foreground" : "text-white/60"
                  )}
                />
                <Input
                  placeholder="Search items, collections, and accounts"
                  className={cn(
                    "pl-10 border-transparent focus:border-[#00E0B9] transition-colors rounded-full",
                    scrolled
                      ? "bg-muted/50 text-foreground placeholder:text-muted-foreground"
                      : "bg-white/10 text-white placeholder:text-white/60"
                  )}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "md:hidden transition-colors",
                scrolled
                  ? "text-foreground hover:text-[#00E0B9]"
                  : "text-white hover:text-[#00E0B9]"
              )}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "transition-colors",
                scrolled
                  ? "text-foreground hover:text-[#00E0B9]"
                  : "text-white hover:text-[#00E0B9]"
              )}
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsWalletModalOpen(true)}
              className={cn(
                "relative transition-colors before:absolute before:inset-0 before:-z-10 before:rounded-full before:p-[1px] before:bg-gradient-to-r before:from-[#00E0B9] before:via-purple-500 before:to-pink-500",
                scrolled
                  ? "text-foreground hover:text-[#00E0B9]"
                  : "text-white hover:text-[#00E0B9]"
              )}
            >
              <div
                className={cn(
                  "rounded-full p-2",
                  scrolled
                    ? "bg-background dark:bg-[#0D0D0D]"
                    : "bg-white/10 dark:bg-[#0D0D0D]/50"
                )}
              >
                <WalletMinimal className="h-5 w-5" />
              </div>
            </Button>
          </div>
        </div>
      </nav>

      <WalletModal
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
      />
    </>
  );
}
