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
            <Prod />
            <Prod />
          </div>
          <div className="home__row">
            <Prod />
            <Prod />
            <Prod />
          </div>
          <div className="home__row">
            <Prod />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
