import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";

export default function FeaturedProducts() {
  const { products } = useProducts();

  return (
    <section className="container mx-auto py-20 md:py-28">
      <h2 className="text-3xl md:text-4xl md:leading-[2.25ch] pb-4 md:pb-6 font-bold text-center">
        Featured Products
      </h2>
      <p className="text-center max-w-[60ch] mx-auto pb-16">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        obcaecati consequuntur veniam voluptatum.
      </p>

      <div
        id="featured-products"
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {products.slice(0, 6).map((product) => {
          return <ProductCard key={product.title} product={product} />;
        })}
      </div>
    </section>
  );
}
