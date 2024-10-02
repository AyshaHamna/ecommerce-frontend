import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

function CartPage() {
  const { cart } = useContext(CartContext);

  return (
    <main>
      <section className="py-8 px-16">
        <h1 className="text-4xl font-semibold py-5">Your Shopping Cart</h1>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
          {cart.length > 0 ? (
            cart.map((el, index) => {
              return (
                <div key={index} className="border grid grid-cols-3 gap-2 p-2">
                  <div className="col-span-1 bg-[#f4f8f9] rounded-lg">
                    <img
                      src={el.image}
                      className="h-full w-full object-cover"
                      alt=""
                    />
                  </div>

                  <div className="col-span-2 flex flex-col gap-2">
                    <h2 className="text-2xl font-semibold">{el.name}</h2>
                    <p className="text-sm">{el.description}</p>
                    <span>$ {el.price}</span>
                    <span>Amount: {el.count}</span>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No Products In Cart</p>
          )}
        </div>

        {cart.length > 0 && (
          <Link
            to="/checkout"
            className="border-2 border-black rounded-lg px-4 py-1 text-lg mt-4 inline-block font-medium hover:bg-black hover:text-white transition"
          >
            Proceed to Checkout
          </Link>
        )}
      </section>
    </main>
  );
}

export default CartPage;
