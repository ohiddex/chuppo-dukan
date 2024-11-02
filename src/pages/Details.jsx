import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const params = useParams();

  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const apiEndPoint = `https://fakestoreapi.com/products/${params.id}`;

      const response = await fetch(apiEndPoint);
      const data = await response.json();

      setProductDetails(data);
    }

    fetchProducts();
  }, []);

  return (
    <main className="container mx-auto grid grid-cols-2 gap-6 py-10">
      <img 
  src={productDetails.image} 
  height={400} 
  width={400} 
  style={{ height: 400, width: 400 }} 
  alt={productDetails.title} 
/>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">
          {productDetails.title}
        </h1>
        <div className="flex items-center gap-x-4">
          <span className="text-2xl">${productDetails.price}</span>
          <span className="text-2xl flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6 me-2 text-yellow-500"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>
            {productDetails?.rating?.rate} ({productDetails?.rating?.count})
          </span>
        </div>
        <p className="leading-relaxed opacity-80">
          {productDetails.description}
        </p>
      </div>
    </main>
  );
}
