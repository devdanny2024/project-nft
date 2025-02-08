import React from "react";
import DealTitle from "./components/deals-title";
import DealTabs from "./components/deals-tabs";
import { Footer } from "../components/sections/Footer";

const page = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="mt-20 px-4">
          <DealTitle />
          <DealTabs />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default page;
