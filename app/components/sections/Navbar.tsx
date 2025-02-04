"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";
import { useScroll } from "../../hooks/use-scroll";
import { usePathname } from "next/navigation";
import { Cart } from "../cart";
import { CustomConnectButton } from "../CustomConnectButton";

export function Navbar() {
  const scrolled = useScroll(10);
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || !isLandingPage
            ? "bg-background/80 backdrop-blur-md border-b"
            : "bg-transparent"
        )}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold text-[#00E0B9]">HASHIHIRO</h1>
          </div>
          <div className="hidden md:flex flex-1 items-center gap-8 justify-center">
            <div className="flex items-center gap-4">
              <a
                href="#"
                className={cn(
                  "text-sm transition-colors",
                  scrolled || !isLandingPage
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/80 hover:text-white"
                )}
              >
                Trades
              </a>
              <a
                href="#"
                className={cn(
                  "text-sm transition-colors",
                  scrolled || !isLandingPage
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/80 hover:text-white"
                )}
              >
                Airdrops
              </a>
              <a
                href="#"
                className={cn(
                  "text-sm transition-colors",
                  scrolled || !isLandingPage
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/80 hover:text-white"
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
                    scrolled || !isLandingPage
                      ? "text-muted-foreground"
                      : "text-white/60"
                  )}
                />
                <Input
                  placeholder="Search items, collections, and accounts"
                  className={cn(
                    "pl-10 border-0 focus-visible:ring-0 transition-colors rounded-full",
                    scrolled || !isLandingPage
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
                scrolled || !isLandingPage
                  ? "text-foreground hover:bg-transparent"
                  : "text-white hover:bg-transparent"
              )}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Cart
              className={cn(
                "transition-colors",
                scrolled || !isLandingPage
                  ? "text-foreground hover:bg-transparent"
                  : "text-white hover:bg-transparent"
              )}
            />
            <CustomConnectButton
              isLandingPage={isLandingPage}
              scrolled={scrolled}
            />
            <ThemeToggle
            // className={cn(
            //   scrolled || !isLandingPage
            //     ? "text-foreground hover:bg-transparent"
            //     : "text-white hover:bg-transparent"
            // )}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
