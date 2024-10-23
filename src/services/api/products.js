// import { API_URL } from "../config";

const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  console.error("API URL is not set");
}

export const getAllProducts = async () => {
  const res = await fetch(`${API_URL}/api/products`, {
    method: "GET",
  });

  const products = await res.json();
  return products;
};

export const getProductsByCategory = async (
  categoryId = "ALL",
  sortOrder = ""
) => {
  const res = await fetch(
    `${API_URL}/api/products?categoryId=${categoryId}&sortOrder=${sortOrder}`,
    {
      method: "GET",
    }
  );

  const productsByCategory = await res.json();
  return productsByCategory;
};

export const getProductById = async (productId) => {
  const res = await fetch(`${API_URL}/api/products/${productId}`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const product = await res.json();
  return product;
};
