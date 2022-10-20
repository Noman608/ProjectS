import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import {useStateValue} from "./StateProider"
function Header() {
  const [{basket},dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/" style={{textDecoration:'none'}}>
        <div className="header__logo">
          <StorefrontIcon
            className="header__logoImage"
            fontSize="large"
          ></StorefrontIcon>
          <h2 className="header__logoTitle">eSHOP</h2>
        </div>
      </Link>

      <div className="header__search">
        <input type="text" name="" id="" className="header__searchInput" />
        <SearchIcon className="header__searchIcon"></SearchIcon>
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop In</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket">
            <ShoppingBasketIcon></ShoppingBasketIcon>
            <span className="nav__itemLineTwo nav_basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
