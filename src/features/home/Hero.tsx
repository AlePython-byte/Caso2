import Image from "next/image";

const bubble = "absolute rounded-full bg-white/[0.13]";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center gap-4 overflow-hidden bg-gradient-to-r from-[#e07a85] via-[#b83a42] to-[#a02530] px-4 pb-[70px] pt-5 text-white md:block md:h-[305px] md:p-0">
      {/* translucent decorative bubbles, as in the mockup */}
      <div className={`${bubble} -left-4 top-[40px] h-[120px] w-[120px]`} />
      <div className={`${bubble} left-[248px] -top-[40px] h-[76px] w-[76px]`} />
      <div className={`${bubble} left-[601px] top-[16px] h-[24px] w-[24px]`} />
      <div className={`${bubble} left-[17px] top-[167px] h-[28px] w-[28px]`} />
      <div className={`${bubble} left-[500px] top-[228px] h-[140px] w-[140px] bg-white/[0.10]`} />
      <div className={`${bubble} left-[616px] top-[203px] h-[80px] w-[80px] bg-white/[0.10]`} />

      <div className="relative h-[180px] w-[180px] shrink-0 overflow-hidden rounded-full border-[5px] border-white shadow-lg transition duration-500 hover:rotate-3 hover:scale-105 md:absolute md:left-[44px] md:top-[16px] md:h-[205px] md:w-[205px]">
        <Image
          src="/images/hero-main.jpg"
          alt="Chocolate cake with berries"
          width={384}
          height={384}
          className="h-full w-full object-cover"
          priority
        />
      </div>

      <div className="relative text-center md:absolute md:left-[270px] md:top-[46px] md:text-left">
        <h1 className="text-[29px] font-extrabold uppercase leading-[31px]">
          Decadent
          <br />
          Chocolate
          <br />
          Bliss!
        </h1>
        <span
          aria-hidden
          className="font-script pointer-events-none absolute left-[100px] top-[66px] hidden -rotate-6 text-[26px] leading-none text-white/80 md:block"
        >
          Dakingo
        </span>
        <p className="-mt-[1px] text-[17px] font-light leading-tight">
          Satisfy Your Sweet Cravings
        </p>
        <div className="relative mt-[20px] inline-block">
          <span className="absolute -top-[10px] left-[8px] z-10 -rotate-3 text-[9px] font-medium italic">
            Special Offer!
          </span>
          <span className="inline-block cursor-pointer rounded-full bg-wine-dark px-[14px] py-[6px] text-[17px] font-extrabold transition hover:scale-110">
            SAVE 20%
          </span>
        </div>
      </div>

      <div className="flex gap-4 md:contents">
        <div className="relative h-[90px] w-[90px] overflow-hidden rounded-full border-4 border-white transition duration-300 hover:scale-110 md:absolute md:right-[75px] md:top-[21px]">
          <Image
            src="/images/hero-lava.jpg"
            alt="Lava cake"
            width={168}
            height={168}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative h-[90px] w-[90px] overflow-hidden rounded-full border-4 border-white transition duration-300 hover:scale-110 md:absolute md:right-[75px] md:top-[128px]">
          <Image
            src="/images/hero-slice.jpg"
            alt="Chocolate slice"
            width={168}
            height={168}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
