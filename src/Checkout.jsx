import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__ad">
          <img
            style={{ objectFit: "contain", width: "70vw" }}
            src="https://cdn.prod.website-files.com/62176230ce1307d5713ca09a/652fb0ee851eca1db38b2ae4_38-1024x122.webp"
            alt="banner ad"
          />
        </div>
      </div>
      <div className="checkout__right">
        <div className="checkout__box">
          <p>
            Subtotal: <strong>$0</strong>
          </p>
          <p>
            <input type="checkbox" />
            This is a gift order.
          </p>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
