import Image from "next/image";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { bestsellers } from "@/data/content";

export function Bestsellers() {
  return (
    <section className="px-4 pt-[22px] md:px-[25px]">
      <h3 className="text-[15px] font-bold text-wine">
        Bestsellers from Across the Country
      </h3>
      <div className="mt-[17px] grid grid-cols-2 gap-[11px] md:flex">
        {bestsellers.map((p) => (
          <article
            key={p.name}
            className="group relative h-[138px] w-full cursor-pointer rounded-[10px] bg-white p-2 shadow-[0_2px_10px_rgba(157,31,42,0.12)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_20px_rgba(157,31,42,0.25)] md:w-[143px]"
          >
            <Heart
              size={9}
              className="absolute left-[9px] top-[58px] fill-wine text-wine"
            />
            <div className="mx-auto h-[74px] w-[100px] overflow-hidden rounded">
              <Image
                src={p.image}
                alt={p.name}
                width={200}
                height={148}
                className="h-full w-full object-contain transition duration-300 group-hover:scale-110"
              />
            </div>
            <p className="mt-[6px] text-[9px] font-semibold leading-[11px] text-wine/90">
              {p.name}
            </p>
            <p className="mt-[2px] text-[9px] font-bold text-wine">₹{p.price}</p>
            <div className="flex items-center gap-[1px] text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={7} className="fill-current" />
              ))}
              <span className="ml-1 text-[6px] text-wine">{p.reviews}</span>
            </div>
            <span className="absolute bottom-2 right-2 flex h-[14px] w-[14px] items-center justify-center rounded-full bg-wine text-white">
              <ShoppingCart size={7} />
            </span>
          </article>
        ))}
      </div>
      <div className="mt-[10px] flex justify-end">
        <button className="rounded-full bg-wine px-[18px] py-[7px] text-[9px] font-bold text-white transition hover:scale-105 hover:bg-wine-dark active:scale-95">
          VIEW ALL
        </button>
      </div>
    </section>
  );
}
