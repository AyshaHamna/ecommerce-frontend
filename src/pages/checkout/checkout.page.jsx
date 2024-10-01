import React, { useContext, useState } from "react";
import TextInput from "../../components/TextInput";
import { useNavigate, Navigate } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { createOrder } from "../../services/api/orders";
import { useUser } from "@clerk/clerk-react";
import { toast } from "sonner";

function CheckoutPage() {

  const {user, isSignedIn, isLoaded} = useUser();
    const {cart, clearCart} = useContext(CartContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        line_1: "",
        line_2: "",
        city: "",
        phone: "",
    });

    if(!isLoaded) <div>Loading...</div>
    if(!isSignedIn) <Navigate to='/sign-in'/>

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const order = await createOrder({
                userId: user.id,
                orderProducts: cart.map((el) => ({
                    productId: el._id,
                    quantity: el.count,
                })),
                address: {
                  fname: formData.fname,
                  lname: formData.lname,
                  line_1: formData.line_1,
                  line_2: formData.line_2,
                  city: formData.city,
                  phone: formData.phone,
                }
            });
            clearCart();
            toast.success("Successfully placed order");
            navigate(`/payment?orderId=${order._id}`);
        } catch (error) {
            console.log(error);
            toast.error("Order placement failed. Please try again later.");
        }
    };

    const handleChange = (e) => {
        console.log(e.target.value);
        console.log({
            name: e.target.name,
            value: e.target.value,
        });
        console.log({
            [e.target.name]: e.target.value,
        })

        setFormData({...formData, [e.target.name]: e.target.value});
    };


  return (
    <section className="py-8 px-16">
      <h1 className="text-4xl font-semibold">Checkout</h1>
      <div className="grid grid-cols-3 mt-4 gap-x-5">
        <div className="col-span-2 p-2 rounded-md ">
          <h2 className="text-2xl font-semibold">Shipping Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <TextInput onChange={handleChange} value={formData.fname} required={true} name="fname" label="First Name" placeholder="John" />
              <TextInput onChange={handleChange} value={formData.lname} required={true} name="lname" label="Last Name" placeholder="Doe" />
              <TextInput onChange={handleChange}
                value={formData.line_1} required={true} name="line_1"
                label="Adress Line 1"
                placeholder="123 Main st"
              />
              <TextInput onChange={handleChange}
                value={formData.line_2} required={true} name="line_2"
                label="Adress Line 2"
                placeholder="Westside"
              />
              <TextInput onChange={handleChange} value={formData.city} required={true} name="city" label="City" placeholder="New York" />
              <TextInput onChange={handleChange}
                value={formData.phone} required={true} name="phone"
                label="Phone Number"
                placeholder="+94 0123456789"
              />
            </div>
            <div className="mt-6 mb-2">
              <button
               
                className="border-2 border-black rounded-lg px-4 py-1 text-lg mt-4 font-medium hover:bg-black hover:text-white transition"
              >
                Proceed to Payment
              </button>
            </div>
          </form>
        </div>

        <div className="col-span-1 border p-2 rounded-md">
          <h2 className="text-2xl font-semibold">Order Summary</h2>

          {cart.map((el) => {
            return (
                <div className="grid grid-cols-3 border p-2 my-3 rounded-xl">
                    <div className="col-span-1 bg-[#f4f8f9] rounded-lg">
                        <img src={el.image} alt="" className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div className="col-span-2 px-4">
                        <h3 className="text-base font-semibold">{el.name}</h3>
                        <p className="text-sm">{el.description}</p>
                        <span className="text-lg font-semibold mt-2">{el.price}</span>
                        <p className="mt-1 text-sm">Amount: {el.count}</p>
                    </div>
                </div>
            )
          })}

          <div>
            <span className="block mt-4 font-semibold text-xl">
                Total: $ {cart.reduce((acc, el) => acc + el.count * parseFloat(el.price), 0)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckoutPage;
