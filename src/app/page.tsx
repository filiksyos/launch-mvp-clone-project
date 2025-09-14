import { PricingSection } from "@/components/PricingSection";
import { TopBar } from "@/components/TopBar";

export default function Home() {
  return (
    <div>
      <TopBar />
      <main>
        <PricingSection />
      </main>
    </div>
  );
}
