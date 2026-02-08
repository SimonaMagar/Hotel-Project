import Slider from "react-slick";

import React from "react";
import a from "../assets/a.jpg";
import b from "../assets/b.jpg";
import o from "../assets/o.jpg";

export default function BannerSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  const banners = [
    { id: 1, image: a },
    { id: 2, image: b },
    { id: 4, image: o },
    
  ];

  return (
    <div className="w-full  mx-auto ">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="h-[400pxl]">
            <img
              src={banner.image}
              className="w-full h-120 object-cover rectangle-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
