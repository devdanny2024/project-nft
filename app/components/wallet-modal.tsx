"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import Image from "next/image";
import { WalletMinimal, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const wallets = [
  {
    name: "MetaMask",
    icon: "/wallets/metamask.jpg",
  },
  {
    name: "TokenPocket",
    icon: "/wallets/tokenpocket.jpg",
  },
  {
    name: "OKX Wallet",
    icon: "/wallets/okx.jpg",
  },
  {
    name: "CoinBase",
    icon: "/wallets/coinbase.jpg",
  },
  {
    name: "WalletConnect",
    icon: "/wallets/walletconnect.jpg",
  },
  {
    name: "Trust Wallet",
    icon: "/wallets/trust.jpg",
  },
  {
    name: "OneKey Wallet",
    icon: "/wallets/onekey.jpg",
  },
  {
    name: "Fortmatic",
    icon: "/wallets/fortmatic.jpg",
  },
  {
    name: "imToken",
    icon: "/wallets/imtoken.jpg",
  },
];

export function WalletModal({ isOpen, onClose }: WalletModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md rounded-3xl p-0 overflow-hidden">
        <DialogHeader className="p-6 border-b">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">
              Connect your wallet
            </DialogTitle>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-3 gap-4 p-6">
          {wallets.map((wallet) => (
            <button
              key={wallet.name}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl hover:bg-muted/50 transition-colors"
            >
              <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                <Image
                  src={wallet.icon}
                  alt={wallet.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium">{wallet.name}</span>
            </button>
          ))}
        </div>

        <div className="p-6 border-t">
          <div className="text-center space-y-6">
            <h3 className="text-xl font-bold mb-2">What is Wallet ?</h3>
            <p className="text-muted-foreground">
              Wallets are essential for managing and accessing digital assets
              securely and conveniently.
            </p>
            <Button className="space-x-2">
              {" "}
              <span>Connect Wallet </span>
              <WalletMinimal className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
