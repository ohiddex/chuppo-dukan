import { useState, useEffect } from "react";

export default function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const apiEndPoint = "https://fakestoreapi.com/products";

      const response = await fetch(apiEndPoint);
      const data = await response.json();

      setProducts(data);
    }

    fetchProducts();
  }, []);

  return {
    products,
    setProducts,
  };
}
