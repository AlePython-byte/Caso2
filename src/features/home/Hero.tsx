import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[305px] overflow-hidden bg-gradient-to-r from-[#e07a85] via-[#b83a42] to-[#a02530] text-white">
      <div className="absolute -left-4 top-[40px] h-[120px] w-[120px] rounded-full bg-white/10" />
      <div className="absolute right-[-20px] top-[230px] h-[80px] w-[80px] rounded-full bg-white/10" />
      <div className="absolute left-[44px] top-[16px] h-[205px] w-[205px] overflow-hidden rounded-full border-[5px] border-white shadow-lg transition duration-500 hover:rotate-3 hover:scale-105">
        <Image
          src="/images/hero-main.jpg"
          alt="Chocolate cake with berries"
          width={384}
          height={384}
          className="h-full w-full object-cover"
          priority
        />
      </div>
      <div className="absolute left-[270px] top-[46px]">
        <h1 className="text-[29px] font-extrabold uppercase leading-[31px]">
          Decadent
          <br />
          Chocolate
          <br />
          Bliss!
        </h1>
        <p className="-mt-[1px] text-[17px] font-medium leading-tight">
          Satisfy Your Sweet Cravings
        </p>
        <span className="mt-[20px] inline-block animate-pulse cursor-pointer rounded-full bg-wine-dark px-[14px] py-[6px] text-[17px] font-extrabold transition hover:scale-110">
          SAVE 20%
        </span>
      </div>
      <div className="absolute right-[75px] top-[21px] h-[90px] w-[90px] overflow-hidden rounded-full border-4 border-white transition duration-300 hover:scale-110">
        <Image
          src="/images/hero-lava.jpg"
          alt="Lava cake"
          width={168}
          height={168}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute right-[75px] top-[128px] h-[90px] w-[90px] overflow-hidden rounded-full border-4 border-white transition duration-300 hover:scale-110">
        <Image
          src="/images/hero-slice.jpg"
          alt="Chocolate slice"
          width={168}
          height={168}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
