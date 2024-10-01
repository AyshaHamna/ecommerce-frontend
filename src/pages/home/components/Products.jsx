import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Tab from "./Tab";
import { getAllProducts } from "../../../services/api/products";
import { getAllCategories } from "../../../services/api/categories";

export default function Products() {

  const [isLoading, setIsLoading] = useState(true);//make default to true
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data);
    }).catch((e) => {
      setIsError(true);
      setError(e.message);
      console.log(e);
    }).finally(() => {
      setIsLoading(false);
    })

    getAllCategories().then((data) => {
      setCategories(data);
    }).catch((e) => {
      setIsError(true);
      setError(e.message);
    }).finally(() => {
      setIsLoading(false);
    })
  }, [])

  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const filteredProducts =
    selectedCategory === "ALL"
      ? products
      : products.filter((el) => el.categoryId === selectedCategory);
  
  const handleTabClick = (id) => {
    setSelectedCategory(id)
    }

  return (
    <section className="py-8 px-16">
      <h1 className="text-4xl font-semibold">Our Top Products</h1>
      <div className="border mt-4"></div>

      {isError ? (
        <p className="text-red-500">Error: {error}</p>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="py-8">
        <div className="flex gap-x-4 items-center">
          {categories.concat([{_id:"ALL", name: "ALL"}]).map((el) => {
            return <Tab key={el._id} selectedCategory={selectedCategory} category={el} handleTabClick={handleTabClick} />;
          })}
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {filteredProducts.map((el) => {
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
