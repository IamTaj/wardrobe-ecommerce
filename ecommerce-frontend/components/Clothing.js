import React, { useContext } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
import CartContext from "@/Context/CartContext";
import WishlistContext from "@/Context/WishlistContext";
import Box from "@mui/material/Box";
import { FitScreen } from "@mui/icons-material";
import QuantityCount from "@/pages/Cart/QuantityCount";

export default function Clothing({
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
  clothing,
}) {
  const { addToCart, cartItem, handleClickSnackBar } = useContext(CartContext);
  const { addToWishlist, wishListId } = useContext(WishlistContext);
  return (
    <div className="products-display-clothing">
      <div class="product-default-single-item product-color--golden swiper-slide">
        <div class="image-box">
          <div className="product-image">
            {link && (
              <Link {...link} style={{ textDecoration: "none" }}>
                <img
                  src={productimage}
                  alt=""
                  width={"100%"}
                  height={"450px"}
                />
              </Link>
            )}
          </div>
          <Box>
            <Box>{title}</Box>

            <Box
              sx={{ width: 1, display: "flex", justifyContent: "space-evenly" }}
            >
              <Box sx={{ color: "green" }}>${price}</Box>
              <Box sx={{ color: "grey" }}>
                <s>${price * 2}</s>
              </Box>
            </Box>
          </Box>
          <div class="action-link">
            <div class="action-link-left">
              {cartItem?.find((item) => {
                return item?.id == productid;
              }) ? (
                <QuantityCount item={clothing} />
              ) : (
                <button
                  style={{ color: "white" }}
                  onClick={() => {
                    return addToCart(clothing), handleClickSnackBar();
                  }}
                >
                  Add to Cart
                </button>
              )}
            </div>
            <div class="action-link-right">
              <button
                onClick={() => {
                  addToWishlist(clothing);
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
