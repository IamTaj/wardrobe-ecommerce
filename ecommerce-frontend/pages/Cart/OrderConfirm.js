import CartContext from "@/Context/CartContext";
import PageLayout from "@/components/PageLayout";
import Link from "next/link";
import React, { useContext } from "react";

export default function Order() {
  const { setCartItem } = useContext(CartContext);
  setCartItem([]);
  return (
    <>
      <PageLayout>
        <div className="div-order">
          <img
            src="https://cdn2.iconfinder.com/data/icons/project-management-and-team-work/73/24-128.png"
            alt=""
            width={"200px"}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "auto",
            }}
          />
          <h4 className="heading-order" style={{ color: "#f84d65" }}>
            Yay !
          </h4>
          <h5 className="heading-order" style={{ color: "#f84d65" }}>
            Your Order Has Been Placed Successfully
          </h5>
          <Link href="/">
            <button className="btn btn-success">Continue Shopping</button>
          </Link>
        </div>
      </PageLayout>
    </>
  );
}
