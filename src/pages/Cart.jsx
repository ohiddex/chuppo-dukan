import { useState } from "react";

export default function Cart() {
  const [cartProducts, setCartProducts] = useState(
    JSON.parse(localStorage.getItem("productCart")) || []
  );

  function removeFromCart(productTitle) {
    setCartProducts((prev) => {
      const filteredProducts = prev.filter((cartProduct) => {
        return cartProduct.title !== productTitle;
      });

      localStorage.setItem("productCart", JSON.stringify(filteredProducts));
      return filteredProducts;
    });
  }

  return (
    <section className="max-w-4xl mx-auto pt-10 px-6 items-start">
      <div className="text-3xl pb-10 flex justify-between items-center">
        <span>Subtotal</span>
        <span className="text-4xl font-bold"></span>
      </div>
      <div className="grid grid-cols-1 gap-5">
        {cartProducts.map((product) => {
          return (
            <div class="card h-full gap-6 items-center card-compact shadow border flex-row p-5">
              <figure>
                <img
                  class="h-[10rem] w-[15rem] object-top object-cover"
                  src={product.image}
                  alt={product.title}
                />
              </figure>
              <div class="card-body">
                <h2 class="card-title text-2xl">{product.title}</h2>
                <div class="card-actions items-center justify-between pt-5">
                  <span class="text-3xl">${product.price}</span>
                  <button
                    onClick={() => removeFromCart(product.title)}
                    class="remove-button btn btn-error"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
