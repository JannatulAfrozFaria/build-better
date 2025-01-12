import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      return (
        <Carousel>
        <div>
            <img src="assets/1.jpeg" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src="assets/2.jpeg" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src="assets/3.jpeg" />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
      );
};

export default Banner;