import React from "react";

function CardsHero() {
  return (
    <section className="grid grid-cols-1 md:grid md:grid-cols-2 gap-5 my-5 md:mb-10 md:min-h-[60vh]">
      <div className="bg-gray-200 rounded-lg flex items-center h-full">
        <img
          src="/assets/hero/macbook.png"
          className=" w-full p-10 sm:p-20 object-contain"
        />
      </div>

      <div className="grid gap-5 h-full">
        <div className=" bg-gray-200 rounded-lg h-full">
          <img
            src="/assets/hero/iphone16.png"
            className=" p-5 h-full w-full object-contain"
          />
        </div>

        <div className=" w-full gap-3 flex flex-row justify-around h-full">
          <div className="flex-grow bg-gray-200 rounded-lg h-full">
            <img
              src="/assets/hero/apple-watch.png"
              className="p-2 md:p-5 h-full w-full object-contain"
            />
          </div>
          <div className="flex-grow bg-gray-200 rounded-lg h-full">
            <img
              src="/assets/hero/airpods-max.png"
              className="p-2 h-full w-full object-contain md:p-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardsHero;
