import React, { useContext, useRef, useState } from "react";
import Link from "next/link";
import { Rating } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Button from "@mui/material/Button";
import CartContext from "@/Context/CartContext";
import WishlistContext from "@/Context/WishlistContext";

export default function PDP({
  item,
  productid,
  title,
  desc,
  category,
  type,
  status,
  price,
  rating,
  reviewcount,
  productimage,
  offers,
}) {
  const available = status;
  let flag = true;

  if (available == "OUTOFSTOCK") {
    flag = false;
  }

  const { addToCart,handleClickSnackBar } = useContext(CartContext);
  const { addToWishlist, handleClickWishListSnackBar } =
    useContext(WishlistContext);
  const [data, setData] = useState({ pincode: "" });
  const [Msg, setMsg] = useState(false);
  const [error, setError] = useState(false);

  const pinCheck = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    switch (name) {
      case "pincode":
        if (value?.match(/^[0-9]{5}$/)) {
          setMsg("");
          //   setError(false);
        } else {
          setMsg("Please enter a valid pincode");
          setError(true);

          //   "Please enter the pincode in numerics and it must be 6 digits";
        }
        break;
      default:
        setMsg("");
    }
    setData({
      ...data,
      [name]: value,
      [`${name}Msg`]: Msg,
    });
  };
  return (
    <>
      <div className="main">
        <div className="titlebar">
          <h2>{title}</h2>
          <div className="link-nav">
            <div>
              <Link href="/" style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </div>
            &nbsp;
            <p>➤</p>
            &nbsp;
            <div>{title}</div>
          </div>
        </div>
        <div className="product-detail">
          <div className="product-image">
            <img src={productimage} alt="" width={"100%"} />
          </div>
          <div className="product-description">
            <div className="product-title">{title}</div>
            <div className="rating-div">
              <div>
                <Rating name="read-only" value={rating} readOnly />
              </div>
              <div>({reviewcount})</div>
            </div>
            <div className="price">${price}</div>
            <div className="product-desc">{desc}</div>
            <div className="offer">
              <h3>Available Offers</h3>
              {offers?.offer.map((items) => (
                <ul>
                  <li className="icons-offer">
                    <div>
                      <LocalOfferIcon style={{ color: "green" }} />
                    </div>
                    <div>{items}</div>
                  </li>
                </ul>
              ))}
            </div>
            <div className="stocks">
              <div>
                <h4>Available Options</h4>
              </div>
              <div>
                <p
                  style={
                    flag
                      ? { color: "green", marginLeft: "1rem", marginTop: "3px" }
                      : { color: "red", marginLeft: "1rem", marginTop: "3px" }
                  }
                >
                  {status}
                </p>
              </div>
            </div>
            <div className="pincode">
              <div className="div2-5-pdp">
                <div className="label-pdp">
                  <label for="formGroupExampleInput2" className="form-label">
                    Pincode
                  </label>
                </div>
                <div className="input-pdp">
                  <input
                    type="text"
                    className="form-control"
                    id="pincode"
                    name="pincode"
                    placeholder="Pincode"
                    onChange={pinCheck}
                  />

                  <p
                    className="msg"
                    style={error ? { color: "red" } : { color: "green" }}
                  >
                    {data.pincodeMsg}
                  </p>
                </div>
                <div className="button">
                  <Button
                    variant="contained"
                    style={{ background: "green" }}
                    onClick={() => {
                      return addToCart(item),handleClickSnackBar();
                    }}
                  >
                    Add To Cart
                  </Button>{" "}
                  <Link href="/Cart/Cart">
                    <Button
                      variant="contained"
                      style={{ background: "orange" }}
                    >
                      View Cart
                    </Button>
                  </Link>{" "}
                  <Button
                    variant="contained"
                    style={{ background: "red" }}
                    onClick={() => {
                      return addToWishlist(item),handleClickWishListSnackBar();
                    }}
                  >
                    Add To Wishlist
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
