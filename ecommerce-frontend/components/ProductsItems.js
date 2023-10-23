import React from "react";
import PageLayout from "./PageLayout";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function ProductsItems({
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
}) {
  return (
    <>
      <div class="product-default-single-item product-color--golden swiper-slide">
        <div class="image-box">
          <a href="#">
            <div className="product-image">
              <img src={productimage} alt="" width={"140px"} />
            </div>
          </a>
          <div class="action-link">
            <div class="action-link-left">
              <a href="#">Add to Cart</a>
            </div>
            <div class="action-link-right">
              <a href="wishlist.html">
                <FavoriteIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
