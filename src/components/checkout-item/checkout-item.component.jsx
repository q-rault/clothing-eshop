import React from "react";

import "./checkout-item.styles.scss";

const CheckoutItem = ({cartItem: {imageUrl, price, quantity, name}}) => {
  console.log(imageUrl);
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price} €</span>
      <span className="remove-button">&#10005;</span>
    </div>
  );
};

export default CheckoutItem;
