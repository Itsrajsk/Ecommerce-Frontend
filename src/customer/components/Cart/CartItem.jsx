import React from "react";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg rounded-lg border border-gray-300 mb-5">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold text-lg">Universal Outfit</p>
          <p className="opacity-70">Size: L , White</p>
          <p className="opacity-70 mt-2">Seller : Kalakar</p>
          <div className="flex space-x-5 items-center text-gray-900 pt-2">
            <p className="font-semibold">₹199</p>
            <p className="opacity-50 line-through">₹211</p>
            <p className="text-green-600 font-semibold">5% Off</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton sx={{ color: "#212529" }}>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton sx={{ color: "#212529" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{ color: "#212529" }}>Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
