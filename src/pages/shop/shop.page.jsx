import React, { useEffect, useState } from "react";
import Tab from "../../components/Tab";
import { getAllCategories } from "../../services/api/categories";
import { getProductsByCategory } from "../../services/api/products";
import ProductCard from "../home/components/ProductCard";

function ShopPage() {
  const [isLoading, setIsLoading] = useState(true); //make default to true
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(["ALL"]);
  const [products, setProducts] = useState([]);

  const [sortOrder, setSortOrder] = useState('');

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
        const data = await getProductsByCategory(selectedCategory, sortOrder);
        setProducts(data);
        console.log("selected cat: ", selectedCategory);
        console.log("sort: ", sortOrder);
      } catch (e) {
        setIsError(true);
        setError(e.message);
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory, sortOrder]);

  const handleTabClick = (id) => {
    setSelectedCategory(id);
  };

  const handleSortChange = (e) => {
   setSortOrder(e.target.value);
  }

  return (
    <section className="py-5 px-16">
      {isError ? (
        <p className="text-red-500">Error: {error}</p>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex gap-x-4 items-center justify-center">
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
      )}

      <div className="flex justify-end px-5">
        <select value={sortOrder} onChange={handleSortChange} className="block pl-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
          <option value="" >Sort By:</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-5 py-5 gap-x-3">
        <div className="col-span-1 border p-2 rounded-lg">filter</div>
        <div className="col-span-4 grid grid-cols-4 gap-4 mt-4">
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
    </section>
  );
}

export default ShopPage;
