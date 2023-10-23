import React, { useEffect, useState } from "react";
import Wishlist from "./WishlistContext";
import { Alert, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function CreateWishList(props) {
  const [wishtlistData, setWishlistData] = useState([]);
  const [wishListId, setWishListId] = useState([]);
  const [openWishListSnackBar, setOpenWishListSnackBar] = React.useState(false);

  const handleClickWishListSnackBar = () => {
    setOpenWishListSnackBar(true);
  };

  const handleCloseWishListSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenWishListSnackBar(false);
  };

  const actionWishListSnackBar = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseWishListSnackBar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const removeFromWishlist = (product) => {
    setWishlistData((items) =>
      items.filter((item) => !(item.id == product.id))
    );
    setWishListId(wishListId.filter((likedItem) => likedItem != product.id));
  };

  const addToWishlist = (product) => {
    const existedProduct = wishtlistData.filter(
      (wishtlistItem) => wishtlistItem.id == product.id
    );
    if (existedProduct.length > 0) {
      removeFromWishlist(product);
    } else {
      setWishlistData([...wishtlistData, product]);
      setWishListId([...wishListId, product.id]);
    }
  };
  
  return (
    <Wishlist.Provider
      value={{
        addToWishlist,
        removeFromWishlist,
        handleCloseWishListSnackBar,
        handleClickWishListSnackBar,
        actionWishListSnackBar,
        wishtlistData,
        wishListId,
      }}
    >
      {props.children}

      <Snackbar
        open={openWishListSnackBar}
        autoHideDuration={2000}
        onClose={handleCloseWishListSnackBar}
        message="Item Added to WishList"
        action={actionWishListSnackBar}
      >
        <Alert
          onClose={handleCloseWishListSnackBar}
          severity="info"
          sx={{ width: "100%" }}
        >
          Wishlist Updated Successfully !
        </Alert>
      </Snackbar>
    </Wishlist.Provider>
  );
}
