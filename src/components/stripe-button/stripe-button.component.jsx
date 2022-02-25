import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KX017CDe39aCyMV1YZeTxtD42XU65jM9ZQ9yh2iEQP4uMZ5kH0Bbrcuclyn3JADQmNwL5qcolUn9tRAf99elTYN00LYjpK4Xc";

  const onToken = (token) => {
    console.log(token);
    alert("payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="clothing e-shop"
      billingAddress
      shippingAddress
      image="../../assets/logo.svg"
      description={`Your total is ${price}€`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
