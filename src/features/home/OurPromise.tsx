import Image from "next/image";
import { ChefHat, Truck } from "lucide-react";
import { gallery } from "@/data/content";

const stats = [
  { label: "ON-TIME DELIVERY", icon: <Truck size={20} /> },
  { label: "5100+ DESIGNS", icon: <ChefHat size={20} /> },
  { label: "2 CR+ ORDERS", icon: <b className="text-[14px]">2</b> },
  { label: "BAKED FRESH", icon: <ChefHat size={20} /> },
];

const avatars = [1, 2, 3, 4, 5].map((n) => `/images/avatar-${n}.jpg`);

export function OurPromise() {
  return (
    <section className="px-4 pt-[10px] md:px-[25px]">
      <h2 className="text-[22px] font-bold leading-none text-wine">Our Promise</h2>
      <p className="mt-1 text-[10px] font-medium text-wine">
        There&apos;s no secret spell – only honest the work!
      </p>
      <div className="mt-[26px] flex flex-col gap-5 md:flex-row md:gap-[32px]">
        <div className="space-y-[15px] md:w-[268px] md:shrink-0">
          <div className="rounded-[10px] bg-[#fdefee] p-3 md:h-[134px]">
            <p className="text-[10px] font-semibold text-wine">
              A glimpse of no secret spell – only honest work!
            </p>
            <div className="mt-3 flex justify-between">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="flex w-[52px] flex-col items-center gap-[6px] text-center"
                >
                  <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full border-[1.5px] border-wine text-wine transition duration-300 hover:bg-wine hover:text-white">
                    {s.icon}
                  </span>
                  <span className="max-w-[44px] text-[7px] font-bold leading-[8.5px] text-wine">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-[10px] rounded-[10px] bg-[#fdefee] p-[10px] md:h-[144px]">
            <Image
              src="/images/ticket.jpg"
              alt="Magical ticket"
              width={300}
              height={294}
              className="h-auto w-[84px] shrink-0 [mask-image:radial-gradient(ellipse_at_center,#000_52%,transparent_100%)]"
            />
            <div>
              <p className="whitespace-nowrap text-[12.5px] font-extrabold uppercase text-wine">
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
          <div className="flex h-[48px] items-center gap-3 rounded-[10px] bg-[#fdefee] px-3">
            <div className="flex -space-x-1">
              {avatars.map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt="Dakingo customer"
                  width={72}
                  height={72}
                  className="h-[24px] w-[24px] rounded-full border-2 border-white object-cover"
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
            <div key={src} className="group h-[130px] overflow-hidden rounded-[10px] md:h-[111px]">
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
