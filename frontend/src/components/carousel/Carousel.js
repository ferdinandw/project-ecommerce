import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
    };
    return (
      <div className="pt-2 mb-4">
        <div className="row mt-3">
          {/* <div className="col-md-6 col-sm-12"> */}
          <div className="col-md-6">
            <Slider {...settings}>
              <img src={require("../img/1.png")} alt="Gambar 1" />
              <img src={require("../img/2.png")} alt="Gambar 2" />
              <img src={require("../img/3.png")} alt="Gambar 3" />
            </Slider>
          </div>
          {/* <div className="col-md-6 col-sm-12 d-flex flex-column size"> */}
          <div className="col-md-6 d-flex flex-column">
            <div>
              <img
                src={require("../img/2.png")}
                alt="Gambar"
                style={{ height: "250px", width: "100%", marginBottom: "4%" }}
              />
            </div>
            <div>
              <img
                src={require("../img/3.png")}
                alt="Gambar"
                style={{ height: "190px", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
