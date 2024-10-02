import React from "react";

export default function Hero() {
  return (
    <section className="">
      <div className="grid grid-cols-2 rounded-md min-h-[60vh] bg-[#f4f8f9]">
        <div className="flex flex-col justify-center p-16 gap-y-4">
          <span className="block rounded-full px-2 py-1 text-xs w-fit bg-[#febc26]">
            WEEKLY DISCOUNT
          </span>
          <h1 className="text-6xl font-semibold">
            Premium Product Online Shop
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos
            suscipit est autem quia? Voluptatem?
          </p>
          <a
            href="/"
            className="px-4 py-2 bg-black text-white font-medium rounded w-fit"
          >
            Shop Now
          </a>
        </div>
        <div className="relative">
          <img
            src="/assets/hero/hero.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
