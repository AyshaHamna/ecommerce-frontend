import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getOrderById } from "../../services/api/orders";
import { toast } from "sonner";

function PaymentPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");

  const [order, setOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //make default to true
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (orderId) {
      getOrderById(orderId)
        .then((data) => {
          setOrder(data);
        })
        .catch((e) => {
          setIsError(true);
          setError(e.message);
          console.log(e);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [orderId]);

  return (
    <>
      {isError ? (
        <p className="text-red-500">Error: {error}</p>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <section className="">
            <h1 className="text-4xl font-semibold">Payment</h1>
            <div className="grid grid-cols-4 gap-x-4 mt-4">
              <button
                type="button"
                onClick={() => {
                  toast.success("Cash on delivery order confirmed");
                  navigate("/profile/orders");
                }}
                className="border-2 border-black rounded-lg px-4 py-1 text-lg mt-4 font-medium hover:bg-black hover:text-white transition"
              >
                Cash on Delivery
              </button>
              <button
                type="button"
                onClick={() => {
                  //payhere
                  toast.success("Credit Card order confirmed");
                  navigate("/profile/orders");
                }}
                className="border-2 border-black rounded-lg px-4 py-1 text-lg mt-4 font-medium hover:bg-black hover:text-white transition"
              >
                Credit Card
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default PaymentPage;
