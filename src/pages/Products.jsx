import { useState } from "react";
import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";

export default function Products() {
  const { products, setProducts } = useProducts();
  const [searchText, setSearchText] = useState("");

  function handleSearch(event) {
    event.preventDefault();

    // if string is empty refetch the whole data

    const filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(searchText.toLowerCase());
    });

    setProducts(filteredProducts);
  }

  return (
    <section className="container mx-auto py-10 md:py-14">
      <div className="flex flex-col gap-8 items-center w-full justify-between pb-16">
        <h2 className="text-3xl md:text-4xl md:leading-[2.25ch] font-bold text-center">
          All Our Products
        </h2>
        <form
          onSubmit={handleSearch}
          className="flex gap-2 items-center justify-center"
        >
          <input
            type="text"
            placeholder="Search term"
            className="input input-bordered w-full md:w-[20rem]"
            onChange={(event) => setSearchText(event.target.value)}
            value={searchText}
          />
          <button className="btn btn-neutral px-8">Search</button>
        </form>
      </div>

      <div id="all-products" className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {products.map((product) => {
          return <ProductCard key={product.title} product={product} />;
        })}
      </div>
    </section>
  );
}
