import HeroSection from "@/components/landing/hero";
import Navbar from "@/components/landing/navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 m-2">
        <HeroSection />
      </main>
    </div>
  );
}
