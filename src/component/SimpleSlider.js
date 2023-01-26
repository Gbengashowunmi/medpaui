import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import ProductCard from "./productCard/ProductCard";
// import ProductCard from "./productCard/ProductCard";
export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
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
        <ProductCard
          image="/images/product-images/equipment01.jpg"
          productName="APC Schneider UPS"
        />
      </div>
      <div className="item">
        <ProductCard
          image="/images/product-images/equipment02.jpg"
          productName="Automatic Dialysis Couch"
        />
      </div>
      <div className="item">
        <ProductCard
          image="/images/product-images/equipment03.jpg"
          productName="Automatic External Defibrillator - RESCUE Sam"
        />
      </div>
      <div className="item">
        <ProductCard
          image="/images/product-images/equipment04.png"
          productName="BLUE GATE UPS"
        />
      </div>
      <div className="item">
        <ProductCard
          image="/images/product-images/equipment05.png"
          productName="Ceiling-mounted surgical light – PG EYES"
        />
      </div>
      <div className="item">
        <ProductCard
          image="/images/product-images/equipment06.jpg"
          productName="Defibrillator – RESCUE LIFE 7″ DISPLAY VERSION"
        />
      </div>
      <div className="item">
        <ProductCard
          image="/images/product-images/equipment07.png"
          productName="Dräger Primus® Anesthesia Machine"
        />
      </div>
      <div className="item">
        <ProductCard
          image="/images/product-images/equipment08.jpg"
          productName="Extracorporeal Blood Circuit for Blood Purification"
        />
      </div>
      <div className="item">
        <ProductCard
          image="/images/product-images/equipment09.jpg"
          productName="Fresenius 4008S classix Dialysis Machine "
        />
      </div>
      <div className="item">
        <ProductCard
          image="/images/product-images/equipment10.jpg"
          productName="GE Aespire S5 Anesthesia Machine with 7900 Smartvent "
        />
      </div>
      <div className="item">
        <ProductCard
          image="/images/product-images/equipment11.png"
          productName="GE/Datex Ohmeda 5/7900 Anesthesia machine"
        />
      </div>
    </Slider>
  );
}
