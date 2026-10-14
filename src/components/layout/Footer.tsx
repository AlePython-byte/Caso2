import { footerColumns } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-blush px-[40px] pb-6 pt-5">
      <p className="rounded-full bg-wine py-[14px] text-center text-[16px] font-semibold text-white">
        Dakingo – Your Trusted FSSAI Certified Online Bakery for Every
        Celebration
      </p>
      <div className="mt-6 flex">
        <div className="w-[176px]">
          <p className="text-[25px] font-bold leading-none text-wine">Dakingo</p>
          <ul className="mt-3 space-y-[3px] text-[7.5px] text-wine/80">
            <li>Our Story</li>
            <li>Contact Us</li>
            <li>Locatin Mess</li>
            <li>Moulla</li>
            <li>Cenmep</li>
          </ul>
        </div>
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
      <div className="mt-2 flex items-center gap-3 pl-[176px]">
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
    </footer>
  );
}
