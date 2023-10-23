import WishlistContext from "@/Context/WishlistContext";
import Link from "next/link";
import React, { useContext } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CartContext from "@/Context/CartContext";
import { Box, Button } from "@mui/material";
import PageLayout from "@/components/PageLayout";

export default function Wishlist() {
  const { addToCart, handleClickSnackBar } = useContext(CartContext);
  const { removeFromWishlist, wishtlistData, wishListId } =
    useContext(WishlistContext);

  if (wishtlistData.length === 0) {
    return (
      <>
        <PageLayout>
          <div className="titlebar">
            <div className="link-nav">
              <div>
                <Link
                  href="/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Home
                </Link>
              </div>
              &nbsp;
              <p>➤</p>
              &nbsp;
              <div>WISHLIST</div>
            </div>
          </div>
          <div className="empty-wishlist">
            <img
              src="/assets/products/wishlistempty.png"
              alt=""
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                width: "auto",
              }}
            />
            
            <Link href={"/"}>
              <Button
                variant="outlined"
                color="error"
                style={{
                  marginLeft: "49%",
                  transform: "translateX(-45%)",
                  marginTop: "2%",
                }}
              >
                START SHOPPING
              </Button>
            </Link>
          </div>
        </PageLayout>
      </>
    );
  }

  return (
    <>
      <PageLayout>
        <div className="titlebar">
          <div className="link-nav">
            <div>
              <Link href="/" style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </div>
            &nbsp;
            <p>➤</p>
            &nbsp;
            <div>WISHLIST</div>
          </div>
        </div>
        <div className="list-items">
          {wishtlistData.map((item) => {
            return (
              <>
                <div className="wishlist-items" style={{ display: "flex" }}>
                  <Link
                    href={`/list/${item.slug}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className="wishlist-image">
                      <img src={item.productimage} alt="" />
                    </div>
                    <div className="wishlist-title">{item.title}</div>
                  </Link>
                  <Box>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        addToCart(item),
                          handleClickSnackBar(),
                          removeFromWishlist(item);
                      }}
                    >
                      Add To Cart
                    </Button>
                    {/* <button
                    style={{ color: "white", background: "black" }}
                    onClick={() => addToCart({ item })}
                  >
                    Add to Cart
                  </button> */}
                  </Box>
                  <div>
                    <button
                      onClick={() => {
                        removeFromWishlist(item);
                      }}
                    >
                      <FavoriteIcon
                        style={{ color: "red" }}
                        fontSize="medium"
                      />
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </PageLayout>
    </>
  );
}
