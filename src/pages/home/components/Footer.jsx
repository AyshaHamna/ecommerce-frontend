import React from "react";

export default function Footer() {
  return (
    <section className="bg-[#f4f9ff] py-4 sm:py-16 px-8 lg:px-32 grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-3 w-full">
      <div className="col-span-1">
        <a href="/" className="text-3xl font-semibold">
          DigiX
        </a>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          reprehenderit veniam omnis, placeat iste tempore.
        </p>
        <div className="flex items-center gap-x-4 mt-4">
          <img
            src="/assets/footer/icons8-instagram-96.png"
            alt=""
            className="block w-12 h-12"
          />
          <img
            src="/assets/footer/icons8-linkedin-96.png"
            alt=""
            className="block w-12 h-12"
          />
          <img
            src="/assets/footer/icons8-tiktok-96.png"
            alt=""
            className="block w-12 h-12"
          />
        </div>
      </div>

      <div className="col-span-2 grid grid-cols-1 gap-y-3 md:grid-cols-2 gap-x-16">
        <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 gap-x-16">
          <div>
            <h1 className="text-2xl font-semibold">Make Money</h1>
            <ul className="mt-2">
              <li>Sell your device</li>
              <li>Sell your services</li>
              <li>Sell your apps</li>
              <li>Become an affliate</li>
              <li>Advertise your products</li>
              <li>Become a vendor</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Product</h1>
            <ul className="mt-2">
              <li>Apple</li>
              <li>Camera & photo</li>
              <li>Cell phones</li>
              <li>Computers & accessories</li>
              <li>Headphones</li>
              <li>Smart watches</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 gap-x-16">
          <div>
            <h1 className="text-2xl font-semibold">Support</h1>
            <ul className="mt-2">
              <li>Your account</li>
              <li>Your orders</li>
              <li>Terms and conditions</li>
              <li>Help center</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Know Us</h1>
            <ul className="mt-2">
              <li>Careers</li>
              <li>About</li>
              <li>Investors</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
