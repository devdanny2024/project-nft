import Hero from "@/components/hero";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Drops from "./components/Drops";
import Recommend from "./components/Recommend";
import Collection from "./components/Collection";
import Footer from "./components/Footer";

export default async function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <Hero />
      <Drops />
      <Recommend />
      <Collection />
      <Footer />
    </div>
  );
}
