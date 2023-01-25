import React from "react";
import Slider from "react-slick";
import ProductCard from "./productCard/ProductCard";

export default function CenterSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
        responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      <div className="item">
        <ProductCard image="/images/product-images/equipment01.jpg" />
      </div>
      <div className="item">
        <ProductCard image="/images/product-images/equipment02.jpg" />
      </div>
      <div className="item">
        <ProductCard image="/images/product-images/equipment03.jpg" />
      </div>
      <div className="item">
        <ProductCard image="/images/product-images/equipment04.png" />
      </div>
      <div className="item">
        <ProductCard image="/images/product-images/equipment05.png" />
      </div>
      <div className="item">
        <ProductCard image="/images/product-images/equipment06.jpg" />
      </div>
      <div className="item">
        <ProductCard image="/images/product-images/equipment07.png" />
      </div>
      <div className="item">
        <ProductCard image="/images/product-images/equipment08.jpg" />
      </div>
      <div className="item">
        <ProductCard image="/images/product-images/equipment09.jpg" />
      </div>
      <div className="item">
        <ProductCard image="/images/product-images/equipment10.jpg" />
      </div>
      <div className="item">
        <ProductCard image="/images/product-images/equipment11.png" />
      </div>
     
    </Slider>
  );
}
