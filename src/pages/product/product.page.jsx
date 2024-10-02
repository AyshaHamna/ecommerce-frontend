import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/api/products";
import { CartContext } from "../../context/cartContext";

function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { updateCart } = useContext(CartContext);

  const handleAddToCart = () => {
    updateCart({
      _id: product._id,
      image: product.image,
      name: product.name,
      price: product.price,
      description: product.description,
    });
    toast.success("Item added to cart");
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(productId);
        setProduct(data);
      } catch (error) {
        setIsError(true);
        setError(error.message);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, []);

  return (
    <section className="py-5 px-8 lg:px-16 ">
      {isError ? (
        <p className="text-red-500">Error: {error}</p>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-col gap-3 md:grid md:grid-cols-2 items-center">
          <div className="md:col-span-1 p-3 h-96 w-full rounded-xl bg-[#f4f8f9] relative flex items-center justify-center">
            <img
              className="rounded-md object-contain w-full h-full"
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="md:col-span-1 flex flex-col gap-2 p-3 max-w-4xl">
            <h2 className="text-3xl font-semibold">{product.name}</h2>
            <p className="text-sm">{product.description}</p>
            <span className="text-lg font-semibold">$ {product.price}</span>
            <button
              onClick={handleAddToCart}
              className="w-1/2 border-2 border-black rounded-lg px-4 py-1 text-lg mt-4 font-medium hover:bg-black hover:text-white transition"
            >
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductPage;
