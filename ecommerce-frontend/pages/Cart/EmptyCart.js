import React from 'react'
import Link from "next/link";

export default function EmptyCart() {
  return (
    <>
      <div className="empty-cart">
        <div>
          <img
            src="https://cdn1.iconfinder.com/data/icons/micro-illustrations-set-3/256/Trolley-128.png"
            alt=""
            width="200px"
          />
          <h3>Your Cart is empty !</h3>
          <div>
            <p>
              Looks like you have not added anythings in your cart. <br />
              Go ahead & explore top products
            </p>
            <Link href="/">
              <button className="btn btn-warning">Explore</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
