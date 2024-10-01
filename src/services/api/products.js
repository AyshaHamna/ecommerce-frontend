export const getAllProducts = async () => {
    const res = await fetch("http://localhost:8000/api/products", {
        method: "GET"
    });

    const products = await res.json();
    return products;
}

export const getProductsByCategory = async (categoryId) => {
    const res = await fetch(`http://localhost:8000/api/products?categoryId=${categoryId}`, {
        method: "GET"
    });

    const productsByCategory = await res.json();
    return productsByCategory;
}