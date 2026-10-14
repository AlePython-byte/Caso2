import { ChevronDown } from "lucide-react";
import { footerColumns } from "@/data/content";
import { SubscribeForm } from "@/components/ui/SubscribeForm";

export function Footer() {
  return (
    <footer className="bg-blush px-[40px] pb-[4px] pt-[15px]">
      <p className="whitespace-nowrap rounded-full bg-wine transition hover:shadow-lg py-[15px] text-center text-[15px] font-extrabold text-white">
        Dakingo – Your Trusted FSSAI Certified Online Bakery for Every Celebration
      </p>
      <div className="mt-[14px] flex">
        <div className="w-[176px]">
          <p className="text-[23px] font-extrabold leading-none text-wine">Dakingo</p>
          <ul className="mt-2 space-y-[2px] text-[7.5px] leading-[11px] text-wine/80">
            <li>Our Story</li>
            <li>Contact Us</li>
            <li>Locatin Mess</li>
            <li>Moulla</li>
            <li>Cenmep</li>
          </ul>
        </div>
        <div className="flex-1">
          <div className="flex">
            {footerColumns.map((c, i) => (
              <div key={i} className="mr-[14px] w-[90px] text-[7.5px] text-wine/80">
                <p className="mb-[4px] font-extrabold text-wine">{c.title}</p>
                {c.links.map((l) => (
                  <p key={l} className="leading-[11px]">
                    {l}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-[10px] flex items-center gap-3 pl-[83px]">
            <SubscribeForm />
            <span className="flex w-[70px] flex-col items-center gap-[2px] text-center text-[7px] text-wine">
              <span className="flex h-[16px] w-[16px] items-center justify-center rounded-full border border-wine">
                <ChevronDown size={10} />
              </span>
              Hey, need any help?
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
