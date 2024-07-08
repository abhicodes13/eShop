import React from "react";
import "./Header.css";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import LocalGroceryStoreRoundedIcon from "@mui/icons-material/LocalGroceryStoreRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <LocalGroceryStoreRoundedIcon
          fontSize="large"
          className="header__logoImage"
        />
        <h2 className="header__logoTitle">eShop</h2>
      </div>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchRoundedIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">Sign in</span>
        </div>

        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>

        <div className="nav__item">
          <ShoppingBasketRoundedIcon className="nav__itemBasket" />
          <span className="nav__itemLineTwo nav__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
