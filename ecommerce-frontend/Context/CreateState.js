import React, { useState } from "react";
import CartContext from "./CartContext";
import { Alert, Button, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function CreateState(props) {
  const [cartItem, setCartItem] = useState([]);
  const [openCartSnackBar, setOpenCartSnackBar] = React.useState(false);

  const increaseItem = (item) => {
    setCartItem(
      cartItem.map((data) => {
        return item?.id == data?.id
          ? { ...item, quantity: data?.quantity + 1 }
          : data;
      })
    );
  };
  const decreaseItem = (item) => {
    setCartItem(
      cartItem.map((data) => {
        return item.id == data.id
          ? { ...item, quantity: data.quantity - 1 }
          : data;
      })
    );
  };
  const addToCart = (item) => {
    
    const exist = cartItem.filter((data) => {
      return data.id === item.id;
    });
    
    if (exist.length > 0) {
      setCartItem(
        cartItem.map((data) => {
          return item.id == data.id
            ? { ...item, quantity: data.quantity + 1 }
            : data;
        })
      );
    } else {
      setCartItem([...cartItem, { ...item, quantity: 1 }]);
    }
    
  };
  const removeCartItem = (item) => {
    const updatedItems = cartItem.filter((product) => item.id != product.id);
    
    setCartItem(updatedItems);
  };

  const handleClickSnackBar = () => {
    setOpenCartSnackBar(true);
  };

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenCartSnackBar(false);
  };

  const actionCartSnackBar = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnackBar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <CartContext.Provider
      value={{
        addToCart,
        setCartItem,
        decreaseItem,
        increaseItem,
        removeCartItem,
        cartItem,
        handleClickSnackBar,
        handleCloseSnackBar,
        actionCartSnackBar,
        openCartSnackBar,
      }}
    >
      {props.children}
      <Snackbar
        open={openCartSnackBar}
        autoHideDuration={2000}
        onClose={handleCloseSnackBar}
        message="Item Added To Cart"
        action={actionCartSnackBar}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Item Added to Cart Successfully !
        </Alert>
      </Snackbar>
    </CartContext.Provider>
  );
}
