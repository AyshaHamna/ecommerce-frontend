import { API_URL } from "../config";

export const createOrder = async (data) => {
  const token = await window.Clerk?.session?.getToken();

  const res = await fetch(`${API_URL}/api/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};

export const getOrderById = async (id) => {
  const token = await window.Clerk?.session?.getToken();
  console.log("tok ", token);
  const res = await fetch(`${API_URL}/api/orders/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return await res.json();
};

export const getOrdersByUser = async (userId) => {
  const token = await window.Clerk?.session?.getToken();

  const res = await fetch(`${API_URL}/api/orders/users/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return await res.json();
};
