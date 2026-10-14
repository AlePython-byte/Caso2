import Image from "next/image";
import { ChefHat, Ticket, Truck } from "lucide-react";
import { gallery } from "@/data/content";

const stats = [
  { label: "ON-TIME DELIVERY", icon: <Truck size={20} /> },
  { label: "5100+ DESIGNS", icon: <ChefHat size={20} /> },
  { label: "2 CR+ ORDERS", icon: <b className="text-[14px]">2</b> },
  { label: "BAKED FRESH", icon: <ChefHat size={20} /> },
];

const avatarColors = ["#c98a6b", "#7a4a3a", "#d4a373", "#3a2a2a", "#5a4a6a"];

export function OurPromise() {
  return (
    <section className="px-[25px] pt-[10px]">
      <h2 className="text-[22px] font-bold leading-none text-wine">Our Promise</h2>
      <p className="mt-1 text-[10px] font-medium text-wine">
        There&apos;s no secret spell – only honest the work!
      </p>
      <div className="mt-[26px] flex gap-[32px]">
        <div className="w-[268px] space-y-[15px]">
          <div className="h-[134px] rounded-[10px] bg-[#fbe2e0] p-3">
            <p className="text-[10px] font-semibold text-wine">
              A glimpse of no secret spell – only honest work!
            </p>
            <div className="mt-3 flex justify-between">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex w-[56px] flex-col items-center gap-[6px] text-center"
                >
                  <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full border-[1.5px] border-wine text-wine transition duration-300 hover:bg-wine hover:text-white">
                    {s.icon}
                  </span>
                  <span className="text-[6.5px] font-bold leading-[8px] text-wine">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex h-[144px] items-center gap-3 rounded-[10px] bg-[#fbe2e0] p-3">
            <Ticket size={44} className="animate-bounce text-amber-500" />
            <div>
              <p className="text-[13px] font-extrabold uppercase text-wine">
                The Magical Ticket
              </p>
              <p className="mt-1 text-[8px] leading-[10px] text-wine">
                Add 3 reminders in your account.
                <br />
                Win offers worth Rs. 750
              </p>
              <button className="mt-2 rounded-full bg-wine px-4 py-[6px] text-[8px] font-bold text-white transition hover:scale-105 hover:bg-wine-dark active:scale-95">
                UNLOCK NOW
              </button>
            </div>
          </div>
          <div className="flex h-[48px] items-center gap-3 rounded-[10px] bg-[#fbe2e0] px-3">
            <div className="flex -space-x-1">
              {avatarColors.map((c) => (
                <span
                  key={c}
                  className="h-[22px] w-[22px] rounded-full border-2 border-white"
                  style={{ background: c }}
                />
              ))}
            </div>
            <span className="text-[9px] font-semibold text-wine">
              Follow us on social!
            </span>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-x-[9px] gap-y-[11px]">
          {gallery.map((src) => (
            <div key={src} className="group h-[111px] overflow-hidden rounded-[10px]">
              <Image
                src={src}
                alt="Dakingo cakes"
                width={288}
                height={222}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
