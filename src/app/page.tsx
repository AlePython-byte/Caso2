import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/features/home/Hero";
import { Menu } from "@/features/home/Menu";
import { Bestsellers } from "@/features/home/Bestsellers";
import { OurPromise } from "@/features/home/OurPromise";

export default function HomePage() {
  return (
    <main className="mx-auto my-[22px] w-full max-w-[679px] overflow-hidden rounded-[14px] bg-blush shadow-sm">
      <Header />
      <Hero />
      <div className="bg-blush">
        <div className="mx-4 -mt-[0px] rounded-t-[22px] bg-[#fff8f6] pb-6 shadow-[0_-4px_20px_rgba(157,31,42,0.08)]">
          <Menu />
          <Bestsellers />
          <OurPromise />
        </div>
      </div>
      <Footer />
    </main>
  );
}
