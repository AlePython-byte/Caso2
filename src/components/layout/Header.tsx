import { Search, ShoppingCart } from "lucide-react";
import { navItems } from "@/data/content";

export function Header() {
  return (
    <header className="bg-blush">
      <div className="flex h-[42px] items-center justify-between px-[40px]">
        <span className="text-[23px] font-bold tracking-tight text-wine">
          Dakingo
        </span>
        <div className="flex items-center gap-4">
          <div className="flex h-[23px] w-[168px] items-center overflow-hidden rounded-full border border-wine/70 bg-white">
            <span className="flex-1 pl-3 text-[9px] text-neutral-400">Search</span>
            <span className="flex h-full w-[24px] items-center justify-center bg-wine text-white">
              <Search size={10} />
            </span>
          </div>
          <span className="flex items-center gap-1.5 text-[9px] font-medium text-wine">
            <ShoppingCart size={13} /> Login/Signup
          </span>
        </div>
      </div>
      <nav className="flex h-[43px] items-center justify-between border-t border-wine/10 px-[40px] text-[10px] font-semibold text-wine">
        {navItems.map((item, i) => (
          <a key={i} href="#">
            {item}
          </a>
        ))}
        <a
          href="#"
          className="rounded-full bg-wine px-4 py-[7px] text-[10px] font-bold text-white"
        >
          ORDER NOW
        </a>
      </nav>
    </header>
  );
}
