import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div>
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            className="header_logo"
          />
        </Link>
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello</span>
          <span className="header_optionLineTwo">
            <LocationOnOutlinedIcon /> Select Your Adderss
          </span>
        </div>
      </div>
      <div className="header_search">
        <input type="text" className="header_searchIN" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOn">Hello Sign in</span>
          <span className="header_optionLineTwo">Account & Lists</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOn">Return</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
      </div>
      <div className="header_Basket">
        <Link to="/checkout">
          <ShoppingCartIcon className="header_basketIN" />
        </Link>
        <span className="List">0</span>
        <span className="card">cart</span>
      </div>
      <div>hello</div>
    </div>
  );
}

export default Header;
