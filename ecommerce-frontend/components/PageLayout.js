import { Box, Button, Divider, Drawer, List } from "@mui/material";
import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
import CartContext from "@/Context/CartContext";
import MenuIcon from "@mui/icons-material/Menu";

export default function PageLayout({ children, className }) {
  const [state, setState] = React.useState({
    right: false,
  });

  const { cartItem } = useContext(CartContext);

  const totalProductInCart = cartItem.length;

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link href="/" style={{ textDecoration: "none", color: "#585858" }}>
          <div className="list-components">Home</div>
        </Link>
        {/* <div className="list-components">
          <Link href={"/"}>Shop</Link>
        </div> */}
        {/* <div className="list-components">
          <a href="#" className="list-links">
            Blogs
          </a>
        </div> */}
        <div className="list-components">
          <Link
            href="/Cart/About"
            style={{ textDecoration: "none", color: "#585858" }}
          >
            About Us
          </Link>
        </div>
        <div className="list-components">
          {/* <Link
            href="/Cart/Contactus"
            style={{ textDecoration: "none", color: "#585858" }}
          >
            Contact Us
          </Link> */}
        </div>
        {/* <div className="list-components">
          <a href="#" className="list-links">
            Contact Us
          </a>
        </div> */}
      </List>
      <Divider />
      <List>
        <Link
          href="/Cart/Wishlist"
          style={{ textDecoration: "none", color: "#585858" }}
        >
          <div className="list-components">Wishlist</div>
        </Link>
        {/* <div className=" list-components">
          <a href="#" className="list-links">
            Signup
          </a>
        </div> */}
        {/* <div className="list-components">
          <a href="#" className="list-links">
            Help
          </a>
        </div> */}
        <Link
          href="/Cart/Cart"
          style={{ textDecoration: "none", color: "#585858" }}
        >
          <div className="list-components">Cart</div>
        </Link>
      </List>
    </Box>
  );

  return (
    <>
      <div className="appbar">
        <div className="logo-title">
          <Link href={"/"} style={{ textDecoration: "none", color: "white" }}>
            <div className="logo">
              <img
                src="https://cdn2.iconfinder.com/data/icons/hotel-accomodation-vacation-service-vol-2/512/hotel_service_room_trip_acomodation_vacation_--15-64.png"
                alt=""
                width={"40px"}
              />{" "}
              &nbsp;
              <h4 className="logo-head">The WardRobe</h4>
            </div>
          </Link>
        </div>

        <Link href={"/"} style={{ textDecoration: "none", color: "white" }}>
          <div className="appbar-components">HOME</div>
        </Link>
        {/* <div className="appbar-components">SHOP</div>
        <div className="appbar-components">BLOGS</div>
        <div className="appbar-components">PAGES</div> */}

        <Link
          href="/Cart/About"
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="appbar-components">ABOUT US</div>
        </Link>

        {/* <Link
          href="/Cart/Contactus"
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="appbar-components">CONTACT US</div>
        </Link> */}

        {/* <div className="appbar-components">CONTACT US</div> */}
        <Link
          href="/Cart/Cart"
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="appbar-components" style={{ display: "flex" }}>
            <ShoppingCartIcon fontSize="medium" style={{ marginTop: "8px" }} />
            {totalProductInCart > 0 ? <p>{totalProductInCart}</p> : <></>}
          </div>
        </Link>
        <Link
          href="/Cart/Wishlist"
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="appbar-components">
            <FavoriteIcon fontSize="medium" />
          </div>
        </Link>
        <div className="drawer">
          <div>
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <MenuIcon
                  onClick={toggleDrawer(anchor, true)}
                  style={{ textDecoration: "none", color: "white" }}
                />

                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className={`page-wrapper ${className}`}>{children}</div>
      <div className="footer">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "350px" },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="upper">
            <div className="div1-footer">
              <ul>
                <h5>ONLINE SHOPPING</h5>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Home & Living</li>
                <li>Gift Cards</li>
              </ul>
              <ul>
                <h5>USEFUL LINKS</h5>
                <li>Blogs</li>
                <li>Careers</li>
                <li>Site Maps</li>
                <li>Corparate Information</li>
              </ul>
            </div>
            <div className="div2-footer">
              <ul>
                <h5>CUSTOMER POLICIES</h5>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>T&C</li>
                <li>Terms Of Use</li>
                <li>Track Orders</li>
                <li>Shipping</li>
                <li>Cancellation</li>
                <li>Returns</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className="div3-footer">
              <h5>EXPERIENCE ON MOBILE</h5>
              <div className="div3-upper">
                <img
                  src="https://e7.pngegg.com/pngimages/114/363/png-clipart-google-play-app-store-apple-apple-text-rectangle.png"
                  alt="no found"
                  width={"100px"}
                  className="playstore"
                />
              </div>
              <div className="div3-lower">
                <h6>KEEP IN TOUCH</h6>
                <div className="logo-footer">
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-02-64.png"
                    alt="facebook"
                    width={"35px"}
                    className="logo"
                  />
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-2-64.png"
                    alt="instagram"
                    width={"35px"}
                    className="logo"
                  />
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-2/512/twitter-square-64.png"
                    alt="twitter"
                    width={"35px"}
                    className="logo"
                  />
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Youtube_glyph_svg-64.png"
                    alt="youtube"
                    width={"35px"}
                    className="logo"
                  />
                </div>
              </div>
            </div>
            <div className="div4-footer">
              <h5>Registered Office Address</h5>
              <p>
                Buildings Alyssa,
                <br />
                Begonia and Clover situated in Embassy Tech Village,
                <br />
                Outer Ring Road,
                <br />
                Devarabeesanahalli Village,
                <br />
                Varthur Hobli,
                <br />
                Bengaluru – 560103, India
              </p>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
}
