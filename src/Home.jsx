import React from "react";
import img from "./home.png";
import "./Home.css";
import Prod from "./Prod";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img className="home__image" src={img} alt="ecommerce" />
          <div className="home__row">
            <Prod
              id="434423"
              title="Queen Bed Frame with Headboard,Linen Upholstered Bed Frame with Wood
            Slats Support,No Box Spring Needed"
              price={11.96}
              rating={5}
              image={
                "https://m.media-amazon.com/images/I/51Ub7jVwu7L._MCnd_AC_.jpg"
              }
            />
            <Prod
              id="49538094"
              title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
              price={239.0}
              rating={4}
              image={
                "https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"
              }
            />
          </div>
          <div className="home__row">
            <Prod
              id="4903850"
              title="All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback"
              price={199.99}
              rating={3}
              image="https://images-eu.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            />
            <Prod
              id="323234"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image="https://m.media-amazon.com/images/I/917aM1MxkdL._AC_UL640_FMwebp_QL65_.jpg"
            />
            <Prod
              id="3254354345"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
          </div>
          <div className="home__row">
            <Prod
              id="90829332"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              price={1094.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
