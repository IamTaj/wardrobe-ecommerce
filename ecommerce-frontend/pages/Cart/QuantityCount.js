import CartContext from "@/Context/CartContext";
import { Typography } from "@mui/material";
import React, { useContext } from "react";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import AddBoxIcon from "@mui/icons-material/AddBox";

export default function QuantityCount({ item }) {
  const { cartItem, increaseItem, decreaseItem, removeCartItem } =
    useContext(CartContext);

  const itemQuantity = cartItem?.find((product) => {
    if (product?.id == item?.id) {
      return product;
    }
  });
  
  return (
    <div className="cart-quantity">
      <div>
        <button
          onClick={() => {
            if (itemQuantity?.quantity > 1) {
              decreaseItem(item);
            }
          }}
        >
          <IndeterminateCheckBoxIcon style={{ color: "white" }} />
        </button>
      </div>
      <div
        style={{ color: "black", height: "fit-content", fontWeight: "bold" }}
      >
        {itemQuantity?.quantity}
      </div>
      <div>
        <button onClick={() => increaseItem(item)}>
          <AddBoxIcon style={{ color: "white" }} />
        </button>
      </div>
    </div>
  );
}
