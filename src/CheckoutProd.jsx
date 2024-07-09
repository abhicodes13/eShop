import React from "react";

function CheckoutProd({ title, price, image }) {
  return (
    <div className="checkout__product">
      <img
        src={image}
        alt="bed"
        style={{ width: "23vw", marginLeft: "20px", maxHeight: "240px" }}
      />
      <div className="checkout_des">
        <p>{title}</p>
        <div>
          <span>$</span>
          <strong>{price}</strong>
        </div>
        <button>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProd;
