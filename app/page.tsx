import Footer from "@/components/landing/footer";
import HeroSection from "@/components/landing/hero";
import HowItWorks from "@/components/landing/how-it-works";
import Navbar from "@/components/landing/navbar";
import OurStory from "@/components/landing/our-story";

export default async function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 m-2">
        <HeroSection />
        <HowItWorks />
        <OurStory />
      </main>
      <Footer />
    </div>
  );
}
