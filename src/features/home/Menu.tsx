import {
  Cake,
  Cookie,
  IceCreamCone,
  Package,
  Heart,
  Gift,
  ShoppingBag,
} from "lucide-react";
import { menuCategories } from "@/data/content";

const icons = {
  cake: Cake,
  box: Package,
  dessert: IceCreamCone,
  cookie: Cookie,
};

export function Menu() {
  return (
    <section className="flex justify-between px-[28px] pt-[34px]">
      <div>
        <h2 className="text-[22px] font-bold leading-none text-wine">Menu</h2>
        <p className="mt-1 text-[10px] font-medium text-wine">
          What will you wish for?
        </p>
        <div className="mt-[14px] flex gap-2">
          {[Heart, Gift, ShoppingBag].map((Icon, i) => (
            <span
              key={i}
              className="flex h-[29px] w-[29px] items-center justify-center rounded-full bg-rose text-wine"
            >
              <Icon size={13} />
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-3">
        {menuCategories.map((c) => {
          const Icon = icons[c.icon];
          return (
            <div
              key={c.label}
              className="flex h-[77px] w-[78px] flex-col items-center justify-center gap-2 rounded-[14px] bg-white shadow-[0_2px_8px_rgba(157,31,42,0.12)]"
            >
              <Icon size={26} className="text-wine" strokeWidth={1.5} />
              <span className="text-[7.5px] font-bold text-wine">{c.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
