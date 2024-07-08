import React from "react";
import "./Product.css";
function Prod() {
  return (
    <div className="product">
      <div className="product__info">
        <p>
          Queen Bed Frame with Headboard,Linen Upholstered Bed Frame with Wood
          Slats Support,No Box Spring Needed,Heavy Duty Feet,Easy Assembly
        </p>
        <p className="product__price">
          <small>$</small>
          <strong>30</strong>
        </p>
        <div className="product__rating">⭐️⭐️⭐️</div>
      </div>
      <img
        src="https://m.media-amazon.com/images/I/51Ub7jVwu7L._MCnd_AC_.jpg"
        alt="tv"
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Prod;
