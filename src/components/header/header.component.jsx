import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo />
      </Link>
      <div className="options">
      {/* <Button
        onClick={navigate('/shop/nonexistant')}
        variant="text"
        className="option">SHOP</Button> */}
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/signin">SIGN IN</Link>
      <Link className="option" to="/contact">CONTACT</Link>
      </div>
    </div>
  )
}

export default Header;
