import { footerColumns } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-blush px-[40px] pb-[9px] pt-[30px]">
      <p className="whitespace-nowrap rounded-full bg-wine py-[15px] text-center text-[15px] font-semibold text-white">
        Dakingo – Your Trusted FSSAI Certified Online Bakery for Every Celebration
      </p>
      <div className="mt-[14px] flex">
        <div className="w-[176px]">
          <p className="text-[23px] font-bold leading-none text-wine">Dakingo</p>
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
                <p className="mb-[4px] font-bold text-wine">{c.title}</p>
                {c.links.map((l) => (
                  <p key={l} className="leading-[11px]">
                    {l}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-[18px] flex items-center gap-3">
            <div className="flex h-[26px] flex-1 items-center rounded-full border border-wine/50 bg-white px-3 text-[8px] text-neutral-400">
              Enter Email Address
            </div>
            <button className="h-[26px] rounded-full bg-wine px-4 text-[8px] font-bold text-white">
              SUBSCRIBE
            </button>
            <span className="w-[70px] text-center text-[7px] text-wine">
              Hey, need any help?
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
