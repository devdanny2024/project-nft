"use client";

import { Inter } from "next/font/google";
import { Navbar } from "app/components/sections/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import "@rainbow-me/rainbowkit/styles.css";
import Providers from "../providers";

const inter = Inter({ subsets: ["latin"] });

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
