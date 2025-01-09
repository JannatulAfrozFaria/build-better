import React from "react";
import Slider from "react-slick";
const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      return (
        <Slider {...settings}>
          <div>
            <h3>banner 1</h3>
          </div>
          <div>
            <h3>banner 2</h3>
          </div>
          <div>
            <h3>banner 3</h3>
          </div>
          <div>
            <h3>banner 4</h3>
          </div>
          <div>
            <h3>banner 5</h3>
          </div>
          <div>
            <h3>banner 6</h3>
          </div>
        </Slider>
      );
};

export default Banner;