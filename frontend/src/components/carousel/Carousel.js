import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <div className="pt-5">
        <div className="row mx-2 mt-4">
          <div className="col-md-6 col-sm-12 mb-0">
            <Slider {...settings}>
              <img src={require("../img/1.png")} alt="Gambar 1" />
              <img src={require("../img/2.png")} alt="Gambar 2" />
              <img src={require("../img/3.png")} alt="Gambar 3" />
            </Slider>
          </div>
          <div className="col col-md-6 col-sm-12 d-flex flex-column size">
            <img
              src={require("../img/2.png")}
              alt="Gambar"
              style={{ height: "37%", width: "100%", marginBottom: "5%" }}
            />
            <img
              src={require("../img/3.png")}
              alt="Gambar"
              style={{ height: "35%", width: "100%", marginBottom: "5%" }}
            />
          </div>
        </div>
      </div>
    );
  }
}
