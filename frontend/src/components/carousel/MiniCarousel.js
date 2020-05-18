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
      slidesToScroll: 5,
    };
    return (
      <div className="container">
        <Slider {...settings} className="test">
          <img src={require("../img/2.png")} alt="Gambar 1" />
          <img src={require("../img/1.png")} alt="Gambar 1" />
          <img src={require("../img/3.png")} alt="Gambar 1" />
          <img src={require("../img/2.png")} alt="Gambar 1" />
          <img src={require("../img/3.png")} alt="Gambar 1" />
          <img src={require("../img/2.png")} alt="Gambar 1" />
          <img src={require("../img/1.png")} alt="Gambar 1" />
          <img src={require("../img/1.png")} alt="Gambar 1" />
          <img src={require("../img/2.png")} alt="Gambar 1" />
          <img src={require("../img/3.png")} alt="Gambar 1" />
          <img src={require("../img/1.png")} alt="Gambar 1" />
          <img src={require("../img/2.png")} alt="Gambar 1" />
          <img src={require("../img/3.png")} alt="Gambar 1" />
        </Slider>
      </div>
    );
  }
}
