import { ShoppingCart } from "lucide-react";
import { SearchBar } from "@/components/ui/SearchBar";
import { navItems } from "@/data/content";

export function Header() {
  return (
    <header className="bg-blush">
      <div className="flex h-[42px] items-center justify-between px-[40px]">
        <span className="text-[23px] font-bold tracking-tight text-wine">
          Dakingo
        </span>
        <div className="flex items-center gap-4">
          <SearchBar />
          <span className="flex cursor-pointer items-center gap-1.5 text-[9px] font-medium text-wine transition hover:opacity-70">
            <ShoppingCart size={13} /> Login/Signup
          </span>
        </div>
      </div>
      <nav className="flex h-[43px] items-center justify-between border-t border-wine/10 px-[40px] text-[10px] font-semibold text-wine">
        {navItems.map((item, i) => (
          <a key={i} href="#" className="transition hover:-translate-y-0.5 hover:underline">
            {item}
          </a>
        ))}
        <a
          href="#"
          className="rounded-full bg-wine px-4 py-[7px] text-[10px] font-bold text-white transition hover:scale-105 hover:bg-wine-dark active:scale-95"
        >
          ORDER NOW
        </a>
      </nav>
    </header>
  );
}
