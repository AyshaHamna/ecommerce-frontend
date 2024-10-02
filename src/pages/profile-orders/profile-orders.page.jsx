import React, { useEffect, useState } from "react";
import { getOrdersByUser } from "../../services/api/orders";
import { useUser } from "@clerk/clerk-react";

function ProfileOrdersPage() {
  const [orders, setOrders] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrdersByUser(user.id);
        setOrders(data);
        console.log("orders ", data);
        console.log("user ", user.id);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <section className="py-5 px-16">
      <h1 className="text-4xl font-semibold">My Orders</h1>
      <div className="py-5">
        {orders.map((order, index) => (
          <div
            key={order._id}
            className="my-5 border rounded-lg p-4 shadow-lg bg-white"
          >
            <h2 className="text-xl font-semibold mb-2">Order #{index + 1}</h2>
            <p>
              <strong>City:</strong> {order.address.city}
            </p>
            <p>
              <strong>Recipient:</strong> {order.address.fname}{" "}
              {order.address.lname}
            </p>
            <p>
              <strong>Phone:</strong> {order.address.phone}
            </p>

            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">Products</h3>
              {order.orderProducts.map((product) => (
                <div
                  key={product.productId._id}
                  className="border p-2 mb-2 rounded-lg"
                >
                  <p>
                    <strong>Product Name:</strong> {product.productId.name}
                  </p>
                  <p>
                    <strong>Quantity:</strong> {product.quantity}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-4">
              <strong>Payment Status:</strong> {order.paymentStatus}
            </p>
            <p>
              <strong>Order ID:</strong> {order._id}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProfileOrdersPage;
