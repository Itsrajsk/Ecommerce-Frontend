import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import Cart from "../Cart/cart";

const OrderSummary = ({ address }) => {
  if (!address) return <div>Loading...</div>;

  return (
    <div className="mt-5">
      {/* Shipping Address */}
      <div className="p-5 shadow-lg rounded-s-md border border-gray-300 mb-5">
        <h2 className="font-semibold mb-2">Shipping Address</h2>
        <AddressCard address={address} />
      </div>

      {/* Cart Items */}
      <div>
        <h2 className="font-semibold mb-2">Order Items</h2>
        <Cart />
      </div>
    </div>
  );
};

export default OrderSummary;
