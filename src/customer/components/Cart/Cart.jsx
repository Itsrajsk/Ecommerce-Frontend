import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCart,
  removeCartItem,
  updateCartItem,
} from "../../../State/Cart/Action";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cart, cartItems, loading } = useSelector((state) => state.cart);

  const handleCheckout = () => {
    if (location.pathname === "/cart") {
      // From cart page, go to checkout step 1
      navigate("/checkout?step=1");
    } else if (location.pathname === "/checkout") {
      // On checkout page (like step=2), go to payment step 3
      navigate("/checkout?step=3");
    } else {
      // Default fallback (optional)
      navigate("/checkout?step=1");
    }
  };

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  // 🔹 Handle Remove
  const handleRemove = (itemId) => {
    console.log("Removing cart item with ID:", itemId);
    dispatch(removeCartItem(itemId));
  };

  // 🔹 Handle Quantity Update (receive full object)
  const handleUpdate = (updatedItem) => {
    if (!updatedItem || updatedItem.quantity < 1) return;
    console.log(
      "Updating cart item:",
      updatedItem.id,
      "-> Qty:",
      updatedItem.quantity
    );
    dispatch(updateCartItem(updatedItem.id, updatedItem));
  };

  if (loading) {
    return <p className="text-center mt-10">Loading cart...</p>;
  }

  if (!cart || !cartItems || cartItems.length === 0) {
    return <p className="text-center mt-10">Your cart is empty.</p>;
  }

  return (
    <div className="mt-5">
      <div className="lg:grid grid-cols-3 relative">
        {/* Cart Items */}
        <div className="col-span-2">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={handleRemove}
              onUpdate={handleUpdate}
            />
          ))}
        </div>

        {/* Price Details */}
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="rounded-lg border border-gray-300 p-5">
            <p className="uppercase font-semibold opacity-60 pb-4 text-center">
              Price Details
            </p>
            <hr />
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-2 text-black">
                <span>Price</span>
                <span>₹{cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-600">-₹{cart?.discount}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
              <hr />
              <div className="flex justify-between">
                <span>Total Amount</span>
                <span className="text-green-600 font-semibold">
                  ₹{cart?.totalDiscountedPrice}
                </span>
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
