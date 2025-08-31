import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import Cart from "../Cart/cart";

const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border border-gray-300">
        <AddressCard />
      </div>
      <div>
        <Cart />
      </div>
    </div>
  );
};

export default OrderSummary;
