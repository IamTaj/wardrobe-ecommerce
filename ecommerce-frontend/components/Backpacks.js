import React, { useContext } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
import CartContext from "@/Context/CartContext";
import WishlistContext from "@/Context/WishlistContext";
import QuantityCount from "@/pages/Cart/QuantityCount";
import { Box, Typography } from "@mui/material";

export default function Backpacks({
  slug,
  offers,
  productimage,
  reviewcount,
  rating,
  price,
  status,
  type,
  category,
  desc,
  title,
  productid,
  link,
  backpack,
}) {
  const { addToCart, cartItem, handleClickSnackBar } = useContext(CartContext);
  const { addToWishlist, wishListId, handleClickWishListSnackBar } =
    useContext(WishlistContext);
  return (
    <div className="products-display">
      <div class="product-default-single-item product-color--golden swiper-slide">
        <div class="image-box">
          <div className="product-image">
            {link && (
              <Link {...link} style={{ textDecoration: "none" }}>
                <img src={productimage} alt="" />
              </Link>
            )}
            <Box
              sx={{
                overflowWrap: "break-word",
                width: 1 / 2,
                justifyContent: "center",
              }}
            >
              <Typography>{title}</Typography>

              <Box
                sx={{
                  width: 1,
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Box sx={{ color: "green" }}>${price}</Box>
                <Box sx={{ color: "grey" }}>
                  <s>${price * 2}</s>
                </Box>
              </Box>
            </Box>
          </div>

          <div class="action-link">
            <div class="action-link-left">
              {cartItem?.find((item) => {
                return item?.id == productid;
              }) ? (
                <QuantityCount item={backpack} />
              ) : (
                <button
                  style={{ color: "white" }}
                  onClick={() => {
                    return addToCart(backpack), handleClickSnackBar();
                  }}
                >
                  Add to Cart
                </button>
              )}
            </div>
            <div class="action-link-right">
              <button
                onClick={() => {
                  return addToWishlist(backpack), handleClickWishListSnackBar();
                }}
              >
                {wishListId.find((v) => {
                  return v == productid;
                }) ? (
                  <FavoriteIcon style={{ color: "red" }} />
                ) : (
                  <FavoriteIcon style={{ color: "white" }} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
