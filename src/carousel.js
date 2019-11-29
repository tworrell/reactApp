import React, { Component } from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import $ from 'jquery';

window.jQuery = $;
window.$ = $;

var Slider = require('react-slick')

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className="Container">
          <h2> Vimeo carousel</h2>
          <Slider {...settings}>
            <div>
              <h3>Hunt for the Wilderpeople</h3>
            </div>
            <div>
              <h3>Nichts passiert/ A Decent Man</h3>
            </div>
            <div>
              <h3>Vice Versa</h3>
            </div>
            <div>
              <h3>The Forth Phase</h3>
            </div>
            <div>
              <h3>Full Moon</h3>
            </div>
          </Slider>
        </div>
      );
    }
  }
  
