import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/features/home/Hero";
import { Menu } from "@/features/home/Menu";
import { Bestsellers } from "@/features/home/Bestsellers";
import { OurPromise } from "@/features/home/OurPromise";

export default function HomePage() {
  return (
    <main className="mx-auto mb-[14px] w-full max-w-[679px] overflow-hidden bg-blush shadow-sm max-md:[zoom:1.15] md:mt-[22px] md:rounded-[14px]">
      <Header />
      <Hero />
      <div className="bg-blush">
        <div className="relative z-10 mx-3 -mt-[40px] rounded-[28px] bg-[#fff9f6] pb-[21px] shadow-[0_-4px_20px_rgba(157,31,42,0.08)] md:mx-4 md:-mt-[72px]">
          <Menu />
          <Bestsellers />
          <OurPromise />
        </div>
      </div>
      <Footer />
    </main>
  );
}
