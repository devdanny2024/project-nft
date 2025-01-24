import { Categories } from "./components/sections/Categories";
import { Collections } from "./components/sections/Collections";
import { Drops } from "./components/sections/Drops";
import { Footer } from "./components/sections/Footer";
import { Hero } from "./components/sections/Hero";
import { NFTLoan } from "./components/sections/NFTLoan";
import { TrendingCollections } from "./components/sections/TrendingCollections";
import { TopCollectorBuys } from "./components/sections/TopCollectorBuys";
import { Recommend } from "./components/sections/Recommend";
import { Navbar } from "./components/sections/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Drops />
        <Recommend />
        <Collections />
        <Categories />
        <TopCollectorBuys />
        <TrendingCollections />
        <NFTLoan />
        <Footer />
      </main>
    </>
  );
}
