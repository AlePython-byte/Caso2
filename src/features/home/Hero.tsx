import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[233px] overflow-hidden bg-gradient-to-r from-[#e07a85] via-[#b83a42] to-[#a02530] text-white">
      <div className="absolute -left-4 top-[40px] h-[120px] w-[120px] rounded-full bg-white/10" />
      <div className="absolute right-[-20px] top-[190px] h-[80px] w-[80px] rounded-full bg-white/10" />
      <div className="absolute left-[44px] top-[16px] h-[205px] w-[205px] overflow-hidden rounded-full border-[5px] border-white shadow-lg">
        <Image
          src="/images/hero-main.jpg"
          alt="Chocolate cake with berries"
          width={384}
          height={384}
          className="h-full w-full object-cover"
          priority
        />
      </div>
      <div className="absolute left-[270px] top-[40px]">
        <h1 className="text-[31px] font-extrabold uppercase leading-[33px]">
          Decadent
          <br />
          Chocolate
          <br />
          Bliss!
        </h1>
        <p className="mt-[2px] text-[17px] font-medium leading-tight">
          Satisfy Your Sweet Cravings
        </p>
        <span className="mt-[10px] inline-block rounded-full bg-wine-dark px-[14px] py-[6px] text-[17px] font-extrabold">
          SAVE 20%
        </span>
      </div>
      <div className="absolute right-[34px] top-[20px] h-[92px] w-[92px] overflow-hidden rounded-full border-4 border-white">
        <Image
          src="/images/hero-lava.jpg"
          alt="Lava cake"
          width={168}
          height={168}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute right-[34px] top-[129px] h-[92px] w-[92px] overflow-hidden rounded-full border-4 border-white">
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
