import React from "react";
import { connect } from "react-redux";

import {
  addItem,
  removeItemFromCart,
  clearItemFromCart,
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({
  cartItem,
  clearItemFromCart,
  addItem,
  removeItemFromCart,
}) => {
  const { imageUrl, price, quantity, name } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price} €</span>
      <span
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
