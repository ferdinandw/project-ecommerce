import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="container-fluid">
          <h1>MINI SLIDERNYA BLM JADI</h1>
        <div className="col">
          <Slider {...settings}>
            <h1>BELUM JADI</h1>
            <h1>BELUM JADI 2</h1>
            <h1>BELUM JADI 3</h1>
          </Slider>
        </div>
      </div>
    );
  }
}
