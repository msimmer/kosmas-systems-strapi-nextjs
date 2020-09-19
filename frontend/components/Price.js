import React from "react";

const Price = ({ currency, amount, className }) => (
  <div className={className}>
    <em>
      {currency.toUpperCase()} {parseFloat(amount / 100).toFixed(2)}
    </em>
  </div>
);

export default Price;
