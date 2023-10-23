import * as React from "react";
import Box from "@mui/material/Box";
import CarouselDesign from "./CarouselDesign";
import Banner from "./Banner";
import Backpacks from "./Backpacks";
import Helmets from "./Helmets";
import Clothing from "./Clothing";
import Electronic from "./Electronic";
import Dailyessential from "./Dailyessential";
import SearchBar from "./SearchBar";

export default function Homepage({
  backpacks,
  helmets,
  items,
  clothings,
  electronics,
  dailyesnt,
}) {
  return (
    <>
      <Box sx={{ py: "0.5rem", px: "3rem", background: "black" }}>
        <SearchBar />
      </Box>
      <Box>
        <CarouselDesign />
      </Box>
      <Box>
        <Banner />
      </Box>
      <Box sx={{ py: "0rem", px: "4rem" }}>
        <div className="heading-mini">
          <h2>Best Sellers</h2>
          <p>Add our best sellers to your weekly lineup.</p>
        </div>
        <div className="display-section">
          {backpacks.map((backpack, index) => (
            <Backpacks
              backpack={backpack}
              productid={backpack.id}
              title={backpack.title}
              desc={backpack.description}
              category={backpack.category}
              type={backpack.type}
              status={backpack.status}
              price={backpack.price}
              rating={backpack.rating}
              reviewcount={backpack.reviewcount}
              productimage={backpack.productimage}
              offers={backpack.offers}
              slug={backpack.slug}
              link={{
                href: "/list/[slug]",
                as: `/list/${backpack.slug}`,
              }}
            />
          ))}
        </div>

        <div className="heading-mini">
          <h2>Best Sellers Helmets</h2>
          <p>Preorder now to receive exclusive deals & gifts.</p>
        </div>
        <div className="display-section">
          {helmets.map((helmet) => (
            <Helmets
              helmet={helmet}
              productid={helmet.id}
              title={helmet.title}
              desc={helmet.description}
              category={helmet.category}
              type={helmet.type}
              status={helmet.status}
              price={helmet.price}
              rating={helmet.rating}
              reviewcount={helmet.reviewcount}
              productimage={helmet.productimage}
              offers={helmet.offers}
              slug={helmet.slug}
              link={{
                href: "/list/[slug]",
                as: `/list/${helmet.slug}`,
              }}
            />
          ))}
        </div>
        <div className="display-section">
          <div>
            <p className="catogery-title">ELECTRONICS</p>
            <img
              src="\assets\christopher-gower-_aXa21cf7rY-unsplash.jpg"
              alt=""
            />

            <h5 className="catogery-viewnow" style={{ background: "#0b2635" }}>
              {" "}
              &nbsp; New Collections Added &nbsp;
            </h5>
            <div className="heading-mini">
              <h2>Top Offers</h2>
              <p>Preorder now to receive exclusive deals & gifts.</p>
            </div>
          </div>

          {electronics.map((electronic) => (
            <Electronic
              electronic={electronic}
              productid={electronic.id}
              title={electronic.title}
              desc={electronic.description}
              category={electronic.category}
              type={electronic.type}
              status={electronic.status}
              price={electronic.price}
              rating={electronic.rating}
              reviewcount={electronic.reviewcount}
              productimage={electronic.productimage}
              offers={electronic.offers}
              slug={electronic.slug}
              link={{
                href: "/list/[slug]",
                as: `/list/${electronic.slug}`,
              }}
            />
          ))}
        </div>

        <div className="display-section">
          <div>
            <p className="catogery-title">DAILY ESSENTIALS</p>
            <img src="\assets\alina-rubo-HjO5vw_PP5c-unsplash.jpg" alt="" />

            <h5 className="catogery-viewnow" style={{ background: "#958067" }}>
              {" "}
              &nbsp; New Collections Added &nbsp;
            </h5>
            <div className="heading-mini">
              <h2>Top Offers On Daily Essentials Products</h2>
              <p>Preorder now to receive exclusive deals & gifts.</p>
            </div>
          </div>

          {dailyesnt.map((items) => (
            <Dailyessential
              dailyessential={items}
              productid={items.id}
              title={items.title}
              desc={items.description}
              category={items.category}
              type={items.type}
              status={items.status}
              price={items.price}
              rating={items.rating}
              reviewcount={items.reviewcount}
              productimage={items.productimage}
              offers={items.offers}
              slug={items.slug}
              link={{
                href: "/list/[slug]",
                as: `/list/${items.slug}`,
              }}
            />
          ))}
        </div>

        <div className="display-section">
          <div>
            <p className="catogery-title">CLOTHINGS</p>
            <img src="\assets\brooke-cagle-z1B9f48F5dc-unsplash.jpg" alt="" />

            <h5 className="catogery-viewnow">
              {" "}
              &nbsp; New Collections Added &nbsp;
            </h5>
            <div className="heading-mini">
              <h2>Brand New Collections</h2>
              <p>Preorder now to receive exclusive deals & gifts.</p>
            </div>
          </div>
          {clothings.map((clothing) => (
            <Clothing
              clothing={clothing}
              productid={clothing.id}
              title={clothing.title}
              desc={clothing.description}
              category={clothing.category}
              type={clothing.type}
              status={clothing.status}
              price={clothing.price}
              rating={clothing.rating}
              reviewcount={clothing.reviewcount}
              productimage={clothing.productimage}
              offers={clothing.offers}
              slug={clothing.slug}
              link={{
                href: "/list/[slug]",
                as: `/list/${clothing.slug}`,
              }}
            />
          ))}
        </div>
      </Box>
    </>
  );
}
