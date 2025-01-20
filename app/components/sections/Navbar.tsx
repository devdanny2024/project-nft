import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search, ShoppingCart } from "lucide-react";
import { ThemeSwitcher } from "../theme-switcher";

export function Navbar() {
  return (
    <nav className="border-b border-border bg-background px-4 py-3">
      <div className="w-full flex items-center justify-between space-x-5">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold text-primary">Rare</h1>
        </div>
        <div className="hidden md:flex flex-1 items-center gap-8">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Rewards
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Airdrops
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Collections
            </a>
          </div>
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search items, collections, and accounts"
                className="pl-10 bg-background border-border focus:border-ring transition-colors"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-accent"
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-accent">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <ThemeSwitcher />
          <Button variant="ghost" size="icon" className="hover:bg-accent">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
