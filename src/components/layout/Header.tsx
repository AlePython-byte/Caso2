import { ShoppingCart } from "lucide-react";
import { SearchBar } from "@/components/ui/SearchBar";
import { navItems } from "@/data/content";

export function Header() {
  return (
    <header className="bg-blush">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-3 md:h-[42px] md:flex-nowrap md:px-[40px] md:py-0">
        <span className="text-[23px] font-bold tracking-tight text-wine">
          Dakingo
        </span>
        <div className="order-last flex w-full items-center md:order-none md:w-auto md:gap-4">
          <SearchBar />
          <span className="ml-auto hidden cursor-pointer items-center gap-1.5 text-[9px] font-medium text-wine transition hover:opacity-70 md:flex">
            <ShoppingCart size={13} /> Login/Signup
          </span>
        </div>
        <span className="flex cursor-pointer items-center gap-1.5 text-[10px] font-medium text-wine transition hover:opacity-70 md:hidden">
          <ShoppingCart size={14} /> Login/Signup
        </span>
      </div>
      <nav className="flex items-center gap-5 overflow-x-auto whitespace-nowrap border-t border-wine/10 px-4 py-2 text-[10px] font-medium text-wine md:h-[43px] md:justify-between md:gap-0 md:overflow-visible md:px-[40px] md:py-0">
        {navItems.map((item, i) => (
          <a key={i} href="#" className="transition hover:-translate-y-0.5 hover:underline">
            {item}
          </a>
        ))}
        <a
          href="#"
          className="shrink-0 rounded-full bg-wine px-4 py-[7px] text-[10px] font-bold text-white transition hover:scale-105 hover:bg-wine-dark active:scale-95"
        >
          ORDER NOW
        </a>
      </nav>
    </header>
  );
}
