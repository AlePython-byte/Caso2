import Image from "next/image";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { bestsellers } from "@/data/content";

export function Bestsellers() {
  return (
    <section className="px-[25px] pt-[22px]">
      <h3 className="text-[15px] font-bold text-wine">
        Bestsellers from Across the Country
      </h3>
      <div className="mt-[17px] flex gap-[11px]">
        {bestsellers.map((p) => (
          <article
            key={p.name}
            className="relative h-[138px] w-[143px] rounded-[10px] bg-white p-2 shadow-[0_2px_10px_rgba(157,31,42,0.12)]"
          >
            <Heart
              size={9}
              className="absolute left-[10px] top-[10px] fill-wine text-wine"
            />
            <div className="mx-auto h-[74px] w-[100px] overflow-hidden rounded">
              <Image
                src={p.image}
                alt={p.name}
                width={200}
                height={148}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-[6px] text-[9px] font-bold leading-[11px] text-wine">
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
        <button className="rounded-full bg-wine px-[18px] py-[7px] text-[9px] font-bold text-white">
          VIEW ALL
        </button>
      </div>
    </section>
  );
}
