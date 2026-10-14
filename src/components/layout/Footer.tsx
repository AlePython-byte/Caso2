import { ChevronDown } from "lucide-react";
import { footerColumns } from "@/data/content";
import { SubscribeForm } from "@/components/ui/SubscribeForm";

export function Footer() {
  return (
    <footer className="bg-blush px-4 pb-4 pt-[15px] md:px-[40px] md:pb-[4px]">
      <p className="rounded-[24px] bg-wine px-4 py-[15px] text-center text-[13px] font-semibold text-white transition hover:shadow-lg md:whitespace-nowrap md:rounded-full md:px-0 md:text-[15px]">
        Dakingo – Your Trusted FSSAI Certified Online Bakery for Every Celebration
      </p>
      <div className="mt-[14px] flex flex-col gap-4 md:flex-row md:gap-0">
        <div className="md:w-[176px]">
          <p className="text-[23px] font-bold leading-none text-wine">Dakingo</p>
          <ul className="mt-2 space-y-[2px] text-[8px] leading-[11px] text-wine/80 md:text-[7.5px]">
            <li>Our Story</li>
            <li>Contact Us</li>
            <li>Locatin Mess</li>
            <li>Moulla</li>
            <li>Cenmep</li>
          </ul>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4 md:flex md:gap-0">
            {footerColumns.map((c, i) => (
              <div key={i} className="text-[8px] text-wine/80 md:mr-[14px] md:w-[90px] md:text-[7.5px]">
                <p className="mb-[4px] font-bold text-wine">{c.title}</p>
                {c.links.map((l) => (
                  <p key={l} className="leading-[11px]">
                    {l}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-3 md:mt-[10px] md:pl-[83px]">
            <SubscribeForm />
            <span className="flex w-[70px] shrink-0 flex-col items-center gap-[2px] text-center text-[7px] text-wine">
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
