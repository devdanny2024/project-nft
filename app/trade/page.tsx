import React from "react";
import TradeTitle from "./components/trade-title";
import { Footer } from "../components/sections/Footer";
import TradeSwap from "./components/trade-swap";
import TradeData from "./components/trade-data";

const page = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="mt-20">
          <TradeTitle />
          <TradeSwap />
          <TradeData />
        </div>
      </div>
       <Footer />
    </div>
  );
};

export default page;
