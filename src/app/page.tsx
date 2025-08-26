import Hero from "@/components/homepage/hero";
import Highlights from "@/components/homepage/hightlights";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Highlights />
    </div>
  );
}
