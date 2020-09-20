import React from "react";
import { IPriceProps } from "k-component";

const Price = ({ currency, amount, className }: IPriceProps) => (
  <div className={className}>
    <em>
      {currency.toUpperCase()} {parseFloat(String(amount / 100)).toFixed(2)}
    </em>
  </div>
);

export default Price;
