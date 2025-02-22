"use client";
import * as React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { WalletMinimal, X } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        mobile: "h-8 px-2 text-xs", 
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Generic Button Component
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          "md:h-10 md:px-4 md:text-sm sm:h-8 sm:px-2 sm:text-xs"
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// Custom Connect Button Component
interface ConnectButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLandingPage?: boolean;
  scrolled?: boolean;
}

export const CustomConnectButton: React.FC<ConnectButtonProps> = ({
  isLandingPage,
  scrolled,
  variant = "default",
  size = "default",
}) => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
      }) => {
        const connected = account && chain;
        return (
          <div>
            {(() => {
              if (!connected) {
                return (
                  <Button
                    variant="ghost"
                    size="mobile"
                    onClick={openConnectModal}
                    className={cn(
                      "relative transition-colors before:absolute before:inset-0 before:-z-10 before:rounded-full before:p-[1px] before:bg-gradient-to-bl before:from-[#614BC3] before:via-[#C8FFE0] before:to-[#33BBC5]",
                      scrolled || !isLandingPage
                        ? "text-foreground hover:bg-transparent"
                        : "text-white hover:bg-transparent"
                    )}
                  >
                    <div
                      className={cn(
                        "rounded-full p-2",
                        scrolled || !isLandingPage
                          ? "bg-background dark:bg-[#0D0D0D]"
                          : "bg-white/10 dark:bg-[#0D0D0D]/50"
                      )}
                    >
                      <WalletMinimal className="h-4 w-4 text-[#000] dark:text-white" />
                    </div>
                  </Button>
                );
              }
              if (chain.unsupported) {
                return (
                  <Button
                    onClick={openChainModal}
                    variant="ghost"
                    size="mobile"
                    className={cn(
                      "relative transition-colors before:absolute before:inset-0 before:-z-10 before:rounded-full before:p-[1px] before:bg-gradient-to-bl before:from-[#614BC3] before:via-[#C8FFE0] before:to-[#33BBC5]",
                      scrolled || !isLandingPage
                        ? "text-foreground hover:bg-transparent"
                        : "text-white hover:bg-transparent"
                    )}
                  >
                    <div
                      className={cn(
                        "rounded-full p-2",
                        scrolled || !isLandingPage
                          ? "bg-background dark:bg-[#0D0D0D]"
                          : "bg-white/10 dark:bg-[#0D0D0D]/50"
                      )}
                    >
                      <X className="h-4 w-4 text-red-600" />
                    </div>
                  </Button>
                );
              }
              return (
                <div style={{ display: "flex", gap: 8 }}>
                  <Button variant="ghost" onClick={openChainModal} size="mobile">
                    {chain.name}
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" onClick={openAccountModal} size="mobile">
                    {account.displayName}
                  </Button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export { Button, buttonVariants };
