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
    <section className="flex justify-between pl-[25px] pr-[47px] pt-[30px]">
      <div>
        <h2 className="text-[22px] font-extrabold leading-none text-wine">Menu</h2>
        <p className="mt-1 text-[10px] font-bold text-wine">
          What will you wish for?
        </p>
        <div className="mt-[14px] flex gap-2">
          {[Heart, Gift, ShoppingBag].map((Icon, i) => (
            <span
              key={i}
              className="flex h-[29px] w-[29px] items-center justify-center rounded-full bg-rose text-wine transition hover:scale-110 hover:bg-wine hover:text-white"
            >
              <Icon size={13} />
            </span>
          ))}
        </div>
      </div>
      <div className="flex gap-[13px]">
        {menuCategories.map((c) => {
          const Icon = icons[c.icon];
          return (
            <div
              key={c.label}
              className="group flex h-[72px] w-[78px] cursor-pointer flex-col items-center justify-center gap-2 rounded-[14px] bg-white shadow-[0_2px_8px_rgba(157,31,42,0.12)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(157,31,42,0.25)] active:scale-95"
            >
              <Icon size={26} className="text-wine transition group-hover:scale-125" strokeWidth={1.5} />
              <span className="text-[7.5px] font-extrabold text-wine">{c.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
