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
        <div className="">
          <Slider {...settings}>
            <h1>BELUM JADI</h1>
            <img src={require("../img/1.png")} alt="Gambar 1" />
            <h1>BELUM JADI 2</h1>
            <img src={require("../img/2.png")} alt="Gambar 1" />
            <h1>BELUM JADI 3</h1>
            <h1>BELUM JADI 4</h1>
            <h1>BELUM JADI 5</h1>
            <img src={require("../img/1.png")} alt="Gambar 1" />
            <img src={require("../img/2.png")} alt="Gambar 1" />
            <img src={require("../img/3.png")} alt="Gambar 1" />
            <img src={require("../img/1.png")} alt="Gambar 1" />
            <img src={require("../img/2.png")} alt="Gambar 1" />
            <img src={require("../img/3.png")} alt="Gambar 1" />
          </Slider>
        </div>
      </div>
    );
  }
}
