import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const product = props.product;

  function addToCart() {
    const existingCart = JSON.parse(localStorage.getItem("productCart")) || [];
    const cart = [...existingCart, product];
    localStorage.setItem("productCart", JSON.stringify(cart));
  }

  return (
    <div className="card h-full card-compact shadow border">
      <figure>
        <img
          className="h-[20rem] object-center object-cover"
          src={product.image}
          alt={product.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p className="line-clamp-3">{product.description}.</p>
        <div className="card-actions items-center justify-between pt-5">
          <span className="text-3xl font-medium">${product.price}</span>
          <div className="flex items-center gap-2">
            <Link
              to={`/products/${product.id}`}
              className="add-to-cart-button btn btn-outline"
            >
              Details
            </Link>
            <button
              onClick={addToCart}
              className="add-to-cart-button btn btn-neutral"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
