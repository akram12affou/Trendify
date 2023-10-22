import React from "react";

function page() {
  console.log({
    category: "men's clothing",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    rating: { rate: 3.9, count: 120 },
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  });

  return (
    <div>
      <div>
        <h3>my cart</h3>
      </div>
      <div>
        <h3>price details</h3>
        <div>
          <span>Price (1)</span>
          <span>Discounts</span>
          <span>Delivery charges</span>
        </div>
        <div>
          <span>219.9</span>
          <span>10</span>
          <span>Free</span>
        </div>
        <hr />
        <div>
          <span>Total amount
            <span>652 £</span>
          </span>
          <span>you will save 10$ on this order</span>
          <button>Place order</button>
          <span>Login to place order</span>
        </div>
      </div>
    </div>
  );
}

export default page;
