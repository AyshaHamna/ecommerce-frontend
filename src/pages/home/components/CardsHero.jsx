import React from "react";

function CardsHero() {
  return (
    <section className=" flex flex-col lg:flex-row gap-y-5">
      <div className="rounded-lg">
        <img
          src="/public/assets/hero/iphone16.png"
          className="bg-gray-200 rounded-lg"
        />
      </div>
      <div className="">
        <img
          src="/public/assets/hero/iphone16.png"
          className="bg-gray-200 rounded-lg"
        />
      </div>
    </section>
  );
}

export default CardsHero;
