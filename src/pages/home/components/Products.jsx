import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Tab from "../../../components/Tab";
import {
  getAllProducts,
  getProductsByCategory,
} from "../../../services/api/products";
import { getAllCategories } from "../../../services/api/categories";

export default function Products() {
  const [isLoading, setIsLoading] = useState(true); //make default to true
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (e) {
        setIsError(true);
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const data = await getProductsByCategory(selectedCategory);
        setProducts(data);
        console.log("selected cat: ", selectedCategory);
      } catch (e) {
        setIsError(true);
        setError(e.message);
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const handleTabClick = (id) => {
    setSelectedCategory(id);
  };

  return (
    <section className="">
      <h1 className="text-4xl font-semibold">Our Top Products</h1>
      <div className="border mt-4"></div>

      {isError ? (
        <p className="text-red-500">Error: {error}</p>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="py-8">
          <div className="flex gap-x-4 items-center overflow-auto px-2">
            {categories.concat([{ _id: "ALL", name: "ALL" }]).map((el) => {
              return (
                <Tab
                  key={el._id}
                  selectedCategory={selectedCategory}
                  category={el}
                  handleTabClick={handleTabClick}
                />
              );
            })}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {products.map((el) => {
              return (
                <ProductCard
                  key={el._id}
                  _id={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  description={el.description}
                />
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
