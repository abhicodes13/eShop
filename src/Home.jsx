import React from "react";
import img from "./com.jpg";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img className="home__image" src={img} alt="ecommerce" />
          <div className="product">
            <h1 className="title">title</h1>
            <h2 className="price">30$</h2>
            <strong>⭐️</strong>
            <img
              src="https://m.media-amazon.com/images/I/815E5aShTqL._AC_SX569_.jpg"
              alt="tv"
            />
            <button>Add to Basket</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
