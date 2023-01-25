import React from "react";
import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";
// import ProductCard from "./productCard/ProductCard";
import TeamMember from "./TeamMember";
export default function TeamSlide() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>

      <div className="item">
        <TeamMember
          image="/images/MD-PIX-2.jpeg"
          name="REJOICE AZODO-PAUL"
          position="MANAGING DIRECTOR"
        />
      </div>
      <div className="item">
        <TeamMember
          image="/images/Esther.jpg"
          name="GODWINS ESTHER"
          position="BUSINESS DEV. MANAGER"
        />
      </div>
      <div className="item">
        <TeamMember
          image="/images/MD-PIX-2.jpeg"
          name="REJOICE AZODO-PAUL"
          position="MANAGING DIRECTOR"
        />
      </div>
      <div className="item">
        <TeamMember
          image="/images/Esther.jpg"
          name="GODWINS ESTHER"
          position="BUSINESS DEV. MANAGER"
        />
      </div>
    </Slider>
  );
}
