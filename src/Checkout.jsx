import React from "react";
import "./Checkout.css";
import CheckoutProd from "./CheckoutProd";

function Checkout() {
  return (
    <div>
      <div className="checkout">
        <div className="checkout__left">
          <div className="checkout__ad">
            <img
              style={{ objectFit: "contain", width: "70vw" }}
              src="https://cdn.prod.website-files.com/62176230ce1307d5713ca09a/652fb0ee851eca1db38b2ae4_38-1024x122.webp"
              alt="banner ad"
            />
            <div className="checkprod">
              <h1>Your Shopping Basket</h1>
            </div>
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
      <div className="checkout__footer">
        <CheckoutProd
          image={
            "https://m.media-amazon.com/images/I/51Ub7jVwu7L._MCnd_AC_.jpg"
          }
          title="Queen Bed Frame with Headboard,Linen Upholstered Bed Frame with Wood
            Slats Support,No Box Spring Needed"
          price={40}
        />
        <CheckoutProd
          image={
            "https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"
          }
          title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
          price={11.45}
        />
      </div>
    </div>
  );
}

export default Checkout;
