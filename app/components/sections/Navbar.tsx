"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";
import { useScroll } from "../../hooks/use-scroll";
import { usePathname } from "next/navigation";
import { Cart } from "../cart";
import { CustomConnectButton } from "../CustomConnectButton";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://btxevpafjemxndeddpeh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0eGV2cGFmamVteG5kZWRkcGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwMjA2MTEsImV4cCI6MjA0NDU5NjYxMX0.ky665HE9rFquDofLDNWi4TGxfjn0pW8tBhVhyuLLBT8";
const supabase = createClient(supabaseUrl, supabaseKey);

const API_KEY = "V4QidqQN3CnapxngEQGMGFl0ZEkS72Bg";
const ETH_BASE_URL = `https://eth-mainnet.alchemyapi.io/v2/${API_KEY}`;
const SOLANA_BASE_URL = `https://solana-mainnet.g.alchemy.com/v2/${API_KEY}`;

const address: string = "AwbJHBTKz82h9e2Epm45qGhX4r13FoXfzKCU7TJj3gbx";

interface NFTData {
  token_id: string;
  name: string;
  token_type: string;
  address: string;
  image: string | null;
  owner: string;
  owner_address: string;
  price: string | null;
  blockchain: "ethereum" | "solana";
}

const fetchEthereumNFTs = async (address: string): Promise<NFTData[]> => {
  const fetchUrl = `${ETH_BASE_URL}/getNFTs/?owner=${address}`;
  try {
    const response = await fetch(fetchUrl);
    const data = await response.json();

    return data.ownedNfts.map((nft: any) => ({
      name: nft.metadata?.name || "Unknown",
      token_type: nft.id.tokenMetadata?.tokenType || "Unknown",
      token_id: nft.id.tokenId,
      address: nft.contract.address,
      image: nft.metadata?.image || null,
      owner: nft.owner || null,
      owner_address: address,
      price: nft.price || null,
      blockchain: "ethereum",
    }));
  } catch (error) {
    console.error("Error fetching Ethereum NFTs:", error);
    return [];
  }
};

const fetchSolanaNFTs = async (address: string): Promise<NFTData[]> => {
  const fetchUrl = `${SOLANA_BASE_URL}/getNFTs?owner=${address}`;
  try {
    const response = await fetch(fetchUrl);
    const data = await response.json();

    if (!data.nfts || !data.nfts.length) {
      console.warn("No NFTs found for this address.");
      return [];
    }

    return data.nfts.map((nft: any) => ({
      token_id: nft.tokenAddress,
      name: nft.metadata?.name || "Unknown",
      token_type: "spl-token",
      address: nft.tokenAddress,
      image: nft.metadata?.image || null,
      owner: address,
      owner_address: address,
      price: null,
      blockchain: "solana",
    }));
  } catch (error) {
    console.error("Error fetching Solana NFTs:", error);
    return [];
  }
};

const fetchNFTs = async (): Promise<void> => {
  if (!address) return;

  try {
    let nftRows: NFTData[] = [];

    if (address.startsWith("0x")) {
      nftRows = await fetchEthereumNFTs(address);
    } else if (address.length === 44) {
      nftRows = await fetchSolanaNFTs(address);
    } else {
      console.error("Unsupported blockchain address format.");
      return;
    }

    const { error } = await supabase.from("nfts").insert(nftRows);
    if (error) {
      console.error("Error inserting data into Supabase:", error);
    } else {
      console.log("NFT data inserted successfully");
    }
  } catch (error) {
    console.error("Error fetching NFTs:", error);
  }
};

export function Navbar() {
  const { isConnected } = useAccount();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const scrolled = useScroll(10);
  const pathname = usePathname();
  const isLandingPage = pathname === "/";


  return (
    <>
      <nav
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          isOpen
            ? "bg-background border-b"
            : scrolled || !isLandingPage
              ? "bg-background/80 backdrop-blur-md border-b"
              : "bg-transparent"
        )}
      >
        {/* Desktop Container */}
        <div className="hidden md:block md:max-w-[1400px] md:mx-auto">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-8">
              <h1 className="text-xl font-bold text-[#00E0B9]">HASHIHIRO</h1>
            </div>
            <div className="flex flex-1 items-center gap-8 justify-center">
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
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Mobile Container */}
        <div className="md:hidden">
          <div className="flex items-center justify-between h-16 px-3 pt-3">
            <h1 className="text-xl font-bold text-[#00E0B9]">HASHIHIRO</h1>
            <div className="flex items-center gap-2">
              <CustomConnectButton
                isLandingPage={false}
                scrolled={true}
                className="w-full"
              />
              {/* <Cart
                className={cn(
                  "transition-colors",
                  scrolled || !isLandingPage
                    ? "text-foreground hover:bg-transparent"
                    : "text-white hover:bg-transparent"
                )}
              /> */}
              <Button
                variant="outline"
                size="icon"
                className={cn(
                  "transition-colors border-white/20 bg-white/10",
                  scrolled || !isLandingPage
                    ? "text-foreground hover:bg-muted border-border"
                    : "text-white hover:bg-white/20 hover:border-white/30"
                )}
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="h-5 w-5 text-black" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={cn(
            "md:hidden absolute top-[56px] inset-x-0 bg-background transition-all duration-300 overflow-hidden rounded-b-xl",
            isOpen
              ? "max-h-[500px] opacity-100 border-b shadow-lg"
              : "max-h-0 opacity-0"
          )}
        >
          <div className="px-3 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search items, collections..."
                className="w-full pl-10 bg-muted/50"
              />
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-4">
              <a
                href="#"
                className="block text-lg hover:text-[#00E0B9] transition-colors"
              >
                Trades
              </a>
              <a
                href="#"
                className="block text-lg hover:text-[#00E0B9] transition-colors"
              >
                Airdrops
              </a>
              <a
                href="#"
                className="block text-lg hover:text-[#00E0B9] transition-colors"
              >
                Collections
              </a>
            </div>

            {/* Mobile Connect Button and Theme Toggle */}
            <div className="space-y-4">
              {/* <CustomConnectButton
                isLandingPage={false}
                scrolled={true}
                className="w-full"
              /> */}

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Switch theme
                </span>
                <ThemeToggle />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Cart
                </span>
                <Cart
                  className={cn(
                    "transition-colors",

                    "text-foreground hover:bg-transparent"
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
