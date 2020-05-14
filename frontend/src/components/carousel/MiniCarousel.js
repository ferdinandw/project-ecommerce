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
      slidesToShow: 5,
      slidesToScroll: 3,
    };
    return (
      <div className="container-fluid row">
          <h1>MINI SLIDERNYA BLM JADI</h1>
        <div className="col ">
          <Slider {...settings}>
            <h1>BELUM JADI</h1>
            <img src={require("../img/1.png")} alt="Gambar 1" />
            <h1>BELUM JADI 2</h1>
            <img src={require("../img/2.png")} alt="Gambar 1" />
            <h1>BELUM JADI 3</h1>
            <h1>BELUM JADI 4</h1>
            <h1>BELUM JADI 5</h1>
          </Slider>
        </div>
      </div>
    );
  }
}
