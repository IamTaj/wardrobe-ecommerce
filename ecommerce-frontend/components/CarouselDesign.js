import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function CarouselDesign() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/hero-slider/home-3/hero-slider-1.jpg"
          alt="First slide"
        />
        <div className="carousel-caption">
          <p className="label-name">NEW COLLECTION</p>
          <h1 className="heading">
            NEW SERIES OF <br />
            DIGITAL WATCH
          </h1>
          <button type="button" class="btn btn-danger">
            SHOP NOW
          </button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/images/hero-slider/home-3/hero-slider-2.jpg"
          alt="Second slide"
        />

        <div className="carousel-caption">
          <p className="label-name">NEW COLLECTION</p>
          <h1>
            BEST OF HiFi <br />
            LOUD SPEAKERS
          </h1>
          <button type="button" class="btn btn-danger">
            SHOP NOW
          </button>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
