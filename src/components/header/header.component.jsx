import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CartIcon from "../cart-icon/cart-icon.component";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import { signOutFromGoogle } from "../../firebase/firebase.utils";

import "./header.styles.scss";

const Header = ({ currentUser }) => {
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
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={signOutFromGoogle}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
