import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import cover1 from "../../../src/images/C1.jpg";
import cover2 from "../../../src/images/C2.jpg";
import cover3 from "../../../src/images/C3.jpg";
import cover4 from "../../../src/images/C4.jpg";
import { Typewriter } from "react-simple-typewriter";
import { useTypewriter ,Cursor } from "react-simple-typewriter";
const Banner = () => {
  const bannerData = [
    {
      id:1,
      staticTitle: "The Foundation of ",
      dynamicTitle: ' Your Future',
      subTitle:
        "Premium Concrete Blocks Designed to Support and Elevate Your Vision.",
      image: { cover4 },
      buttonText: 'About',
      buttonPath: '/about'
    },
    {
      id:2,
      staticTitle: "Green Building Solutions ",
      dynamicTitle: ' for you',
      subTitle:
        "Innovative Concrete Products Built for Excellence and Longevity.",
      image: { cover2 },
      buttonText: 'Services',
      buttonPath: '/services'
    },
    {
      id:3,
      staticTitle: "Building Strength, ",
      dynamicTitle: ' Block by Block',
      subTitle:
        "Durable, Reliable, and Sustainable Concrete Solutions for Every Project.",
      image: { cover3 },
      buttonText: 'Contact Us',
      buttonPath: '/Contact us'
    },
  ];
  return (
    <Carousel>
      {bannerData.map(item=>
        <div key={item.id}
        className="carousel-item relative w-full h-[50vh] md:h-[90vh] bg-no-repeat bg-cover"
        style={{
          backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7),rgba(0,0,0,0.3)), url(${item.image})`,
        }}
      >
        <div className="absolute px-24 py-56 w-full text-left text-white">
        <h1 className="text-2xl md:text-7xl">
             {item.staticTitle} 
          <span
            className="text-2xl md:text-7xl banner-title"
            style={{ color: 'red', fontWeight: 'bold' }}
          >
            <Typewriter
              words={[`${item.dynamicTitle}`]}
              loop={true}
              // loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={3000}
              // onLoopDone={handleDone}
              // onType={handleType}
            />
          </span>
        </h1>
        <p className="text-xl text-gray-400"> {item.subTitle} </p>
        </div>
        
      </div>
      )}
      {/* <div className="h-[800px] mx-auto">
        <img src={cover2} />
        <p className="">Legend 1</p>
      </div>
      <div className="h-[800px] mx-auto">
        <img src={cover3} />
        <p className="">Legend 1</p>
      </div> */}
    </Carousel>
  );
};

export default Banner;
