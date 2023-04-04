import React from "react";
import Script from "next/script";
import Slider from "react-slick";
import Svgs from "./Svgs";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.7.3/dist/alpine.min.js"
        defer
      ></Script>
      <Slider {...settings}>
        <div className="py-20 px-10">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-10">
            <Svgs
              category={"Front End"}
              no={90}
              color="text-blue-800"
              textColor="bg-white"
            />
            <Svgs category={"Back End"} no={70} color="text-yellow-600" />
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Carousel;
