import { API_URL } from "../config";

export const getAllCategories = async () => {
  const res = await fetch(`${API_URL}/api/categories`, {
    method: "GET",
  });

  const categories = await res.json();
  return categories;
};
