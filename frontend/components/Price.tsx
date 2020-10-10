import React from "react";
import { IPriceProps, ICurrency } from "k-component";

const formatPrice = (num: number, currency: ICurrency) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    currencyDisplay: "code",
  }).format(num / 100);

const Price = ({ currency, amount, className }: IPriceProps) => (
  <div className={className}>
    <em>{formatPrice(amount, currency)}</em>
  </div>
);

export default Price;
