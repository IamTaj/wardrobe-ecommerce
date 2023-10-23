import CartContext from "@/Context/CartContext";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import QuantityCount from "./QuantityCount";
import PageLayout from "@/components/PageLayout";
export default function Cart() {
  const { cartItem, increaseItem, decreaseItem, removeCartItem } =
    useContext(CartContext);
  const [ErrMsg, setErrMsg] = useState(false);
  const [data, setData] = useState({
    plotno: "",
    street: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    CardNumber: "",
    cvv: "",
    Val: "",
    Expiry: "",
    CardHolderName: "",
  });
  let totalproducts = cartItem.length;
  let totalBil = 0;
  {
    cartItem.map((item) => {
      for (let i = 0; i < item.quantity; i++) {
        totalBil = totalBil + item.price;
      }
      
    });
  }


  if (cartItem.length === 0) {
    return (
      <PageLayout>
      <div className="empty-cart">
        <div>
          <img
            src="/assets/Trolley-128.png"
            alt=""
            width="20%"
            style={{ display: "unset" }}
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
      </PageLayout>
    );
  }

  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setData((formData) => ({ ...formData, [name]: value }));
    let Err = "";
    switch (name) {
      case "plotno":
        if (!/^[0-9\b]+$/.test(value)) {
          setErrMsg("Please enter the plot number in numerics");
        } else {
          setErrMsg("");
        }
        break;
      case "street":
        if (value?.match(/^[a-zA-Z ]*$/)) {
          setErrMsg("");
        } else {
          setErrMsg("Please provide a valid street name");
        }
        break;
      case "landmark":
        if (value?.match(/^[a-zA-Z\s]+$/g)) {
          setErrMsg("");
        } else {
          setErrMsg("Please enter the landmark in alphabets only");
        }
        break;

      case "city":
        if (value?.match(/^[a-zA-Z]*$/)) {
          setErrMsg("");
        } else {
          setErrMsg("Please provide a valid city name");
        }
        break;

      case "state":
        if (value?.match(/^[a-zA-Z ]*$/)) {
          setErrMsg("");
        } else {
          setErrMsg("Please provide a valid state name");
        }
        break;

      case "pincode":
        if (value?.match(/^[0-9]{5}$/)) {
          setErrMsg("");
        } else {
          setErrMsg(
            "Please enter the pincode in numerics and it must be 6 digits"
          );
        }
        break;

      case "country":
        if (value?.match(/^[a-zA-Z ]*$/)) {
          setErrMsg("");
        } else {
          setErrMsg("Please provide a valid country name");
        }
        break;
      default:
        setErrMsg("");
    }
    setData({ ...data, [name]: value, [`${name}Err`]: ErrMsg });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <>
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
          <div>CART</div>
        </div>
      </div>
      <div className="main-cart-div">
        <div className="right">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                SHOPPING BAG
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {totalproducts} Item
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              style={{
                background: "#dbd8d8",
                borderRadius: "2rem",
                boxShadow: "-8px 9px 16px 7px",
              }}
            >
              <Typography>
                {cartItem.map((item) => {
                  
                  return (
                    <>
                      <div
                        className="main"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div className="cart-image">
                          <img src={item.productimage} alt="" />
                        </div>
                        <div className="cart-title">{item.title}</div>
                        <div className="cart-price">{item.price}</div>
                        <QuantityCount quantity={item.quantity} item={item} />
                        <div className="delete">
                          <button onClick={() => removeCartItem(item)}>
                            <DeleteIcon />
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                SHIPPING DETAILS
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              style={{
                background: "#dbd8d8",
                borderRadius: "2rem",
                boxShadow: "-8px 9px 16px 7px",
              }}
            >
              <Box>
                <div className="shipping-form">
                  <div>
                    <h2>ADDRESS FORM</h2>
                  </div>
                  <div>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label
                          for="formGroupExampleInput"
                          className="form-label"
                        >
                          Plot No
                        </label>

                        <input
                          type="text"
                          className="form-control"
                          id="plotno"
                          name="plotno"
                          placeholder="Plotno"
                          value={data.plotno}
                          onChange={handleChangeForm}
                        />
                        <p className="error"> {data.plotnoErr} </p>
                      </div>

                      <div className="mb-3">
                        <label
                          for="formGroupExampleInput2"
                          className="form-label"
                        >
                          Street
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="street"
                          name="street"
                          placeholder="Street"
                          onChange={handleChangeForm}
                        />
                        <p className="error"> {data.streetErr} </p>
                      </div>

                      <div className="mb-3">
                        <label
                          for="formGroupExampleInput2"
                          className="form-label"
                        >
                          LandMark
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="landmark"
                          name="landmark"
                          placeholder="LandMark"
                          onChange={handleChangeForm}
                        />
                        <p className="error"> {data.landmarkErr} </p>
                      </div>

                      <div className="mb-3">
                        <label
                          for="formGroupExampleInput2"
                          className="form-label"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="city"
                          name="city"
                          placeholder="City"
                          onChange={handleChangeForm}
                        />
                        <p className="error"> {data.cityErr} </p>
                      </div>
                      <div className="mb-3">
                        <label
                          for="formGroupExampleInput2"
                          className="form-label"
                        >
                          State
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="state"
                          name="state"
                          placeholder="State"
                          onChange={handleChangeForm}
                        />
                        <p className="error"> {data.stateErr} </p>
                      </div>
                      <div className="mb-3">
                        <label
                          for="formGroupExampleInput2"
                          className="form-label"
                        >
                          Pincode
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="pincode"
                          name="pincode"
                          placeholder="Pincode"
                          onChange={handleChangeForm}
                        />
                        <p className="error"> {data.pincodeErr} </p>
                      </div>
                      <div className="mb-3">
                        <label
                          for="formGroupExampleInput2"
                          className="form-label"
                        >
                          Country
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="country"
                          name="country"
                          placeholder="Country"
                          onChange={handleChangeForm}
                        />
                        <p className="error"> {data.countryErr} </p>
                      </div>
                      <center>
                        <button
                          type="submit"
                          id="submit"
                          className="btn btn-dark"
                        >
                          Set Address
                        </button>
                      </center>
                    </form>
                  </div>
                </div>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                PAYMENT OPTION
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <div class="payment-card">
                  <h4>Select a payment method</h4>
                  <br />

                  <div className="payment1">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      &nbsp;
                      <h5>UPI/Netbanking</h5>
                      <span>Get started with TAJ pay UPI</span>
                    </label>
                  </div>

                  <p>MORE WAYS TO PAY</p>
                  <div className="payment1">
                    <input
                      class="form-check-input"
                      type="radio"
                      data-bs-toggle="collapse"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      data-bs-target="#collapseExample1"
                    />{" "}
                    <br />
                    &nbsp;&nbsp;&nbsp; <h5>Pay with Debit/Credit/ATM Cards</h5>
                    <p>
                      You can save your cards as per new RBI guidelines{" "}
                      <a className="cart-link" href="#">
                        Learn More
                      </a>
                    </p>
                    <div class="collapse" id="collapseExample1">
                      <div class="payment-card">
                        <Link href="/Cart/AtmCardDetails">
                          Enter Card Details
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="payment1">
                    <input
                      class="form-check-input"
                      type="radio"
                      data-bs-toggle="collapse"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      data-bs-target="#collapseExample2"
                    />
                    <br />
                    &nbsp;&nbsp;&nbsp; <h5>EMI</h5>
                    <div class="collapse" id="collapseExample2">
                      <div class="payment-card">
                        <select className="emi">
                          <option value="none">Select EMI options</option>
                          <option value="card">Bajaj Finserv</option>
                          <option value="card">
                            AXIS Bank Credit Card EMI
                          </option>
                          <option value="card">
                            HDFC Bank Credit Card EMI
                          </option>
                          <option value="card">SBI Bank Credit Card EMI</option>
                          <option value="card">INDUSIND Credit Card EMI</option>
                        </select>
                        <p className="notice-cart">
                          EMI available across top banks. Bajaj Finserv EMI
                          available on select products only{" "}
                          <a className="cart-link" href="#">
                            Details
                          </a>
                        </p>
                        <p>
                          TAJ Pay Later option is not available for this order.{" "}
                          <a className="cart-link" href="#">
                            Why?
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="payment1">
                    <input
                      class="form-check-input"
                      type="radio"
                      data-bs-toggle="collapse"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      data-bs-target="#collapseExample3"
                    />{" "}
                    <br />
                    &nbsp;&nbsp;&nbsp; <h5>Cash On Delivery/Pay On Delivery</h5>
                    <p>
                      Scan & Pay using TAJ app. Cash, UPI, Cards also accepted.{" "}
                      <a className="cart-link" href="#">
                        Know More
                      </a>
                    </p>
                  </div>
                </div>
              </Box>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="left">
          <div className="left1">
            <div className="div-left-1">
              <h4>Order Summary ({totalproducts} items)</h4>
              <div className="order-value">
                <div>
                  <p>Order Value</p>
                </div>
                <div>
                  <p>{totalBil * 2}</p>
                </div>
              </div>
              <div className="order-value">
                <div>
                  <p>Product Discounts</p>
                </div>
                <div>
                  <p>{totalBil}</p>
                </div>
              </div>
              <hr></hr>
              <div className="order-value">
                <div>
                  <p>Order Total</p>
                </div>
                <div>{totalBil}</div>
              </div>
            </div>
          </div>
          <div className="left2">
            <div>
              <img
                src="https://cdn3.iconfinder.com/data/icons/technology-mix/200/Technology_Mix_-_Final-17-64.png"
                alt=""
                width="60px"
              />
            </div>
            <div>
              <h5 className="coupons-heading">Apply Coupons</h5>
              <input className="coupon-input" type="text" />
            </div>
          </div>
          <div className="left3">
            <div className="order">
              <Link
                href="/Cart/OrderConfirm"
                className="confirm-btn"
                style={{
                  background: "#dbd8d8",
                  padding: "0.7rem",
                  borderRadius: "2rem",
                  textDecoration: "none",
                  color: "#1f2126",
                  fontWeight:"bold"
                }}
              >
                {" "}
                
                Confirm Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
