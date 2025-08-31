import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };
  return (
    <div className="mt-5">
      <div className="lg:grid grid-cols-3 relative">
        <div className="col-span-2">
          {[1, 1, 1, 1].map((item) => (
            <CartItem />
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="rounded-lg border border-gray-300 p-5">
            <p className="uppercase font-semibold opacity-60 pb-4 text-center">
              Price Details
            </p>
            <hr />
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-2 text-black">
                <span>Price</span>
                <span>₹4697</span>
              </div>
              <div className="flex justify-between ">
                <span>Discount</span>
                <span className="text-green-600">-₹1234</span>
              </div>
              <div className="flex justify-between  ">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
              <hr />
              <div className="flex justify-between">
                <span>Total Amount</span>
                <span className="text-green-600 font-semibold">₹3463</span>
              </div>
              <Button
                onClick={handleCheckout}
                variant="contained"
                color="secondary"
                className="w-full"
                sx={{ px: "1rem", py: "0.5rem", marginTop: "0.5rem" }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
