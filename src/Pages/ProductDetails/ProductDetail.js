import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import HeadFoot from "../../component/HeadFoot";
import ItemCard from "../../component/ItemCard/ItemCard";
import "./ProductDetails.scss";

export default function ProductDetail() {
  return (
    <HeadFoot>
      <div className="product-page">
        <section className="hero-section">
          <div className="product-img">
            <div className="main-img">
              <img
                src="/images/product-images/equipment01.jpg"
                alt="product"
              />
            </div>
            {/* <div className="img-color">
              <div className="sub-img">
                <img
                  src="https://bonik-react.vercel.app/assets/images/products/headphone.png"
                  alt=""
                />
              </div>
              <div className="sub-img">
                <img
                  src="https://bonik-react.vercel.app/assets/images/products/hiclipart.com%20(16).png"
                  alt=""
                />
              </div>
              <div className="sub-img">
                <img
                  src="https://bonik-react.vercel.app/assets/images/products/hiclipart.com%20(18).png"
                  alt=""
                />
              </div>
            </div> */}
          </div>
          <div className="product-info">
            <h2>APC Schneider UPS</h2>
            <p>
              Brand: <span>Ziaomi</span>
            </p>
            <p>
              Decsription: <span>APC Smart UPS is for uninterruptible power supply protection and management solutions. This UPS power supply provides protection from power surges, load shedding and unpredictable weather conditions during dialysis in the home or facility.</span>
            </p>
            <p>
              Rated: <span> (50)</span>
            </p>
            <h4 className="price">$1135.00</h4>
            <p>Stock Available</p>
            <Link to="//api.whatsapp.com/send?phone=15551234567"  target="_blank"><Button variant="contained" className="addtocart-btn">
              Place Order
            </Button>
            </Link>
          </div>
        </section>
        <div className="head">
          <p>Description</p>
          {/* <p>Review</p> */}
        </div>
        <hr />

        <div className="specification">
          <h3>Specification:</h3>
          <p>Brand: Beats</p>
          <p>Model: S450</p>
          <p>Wireless Bluetooth Headset</p>
          <p>FM Frequency Response: 87.5 - 108 MHz</p>
          <p>Feature: FM Radio, Card Supported (Micro SD / TF) Made in China</p>
        </div>
        {/* <div className="reviews">
        <div className="review">
        <div className="user-details">
<div className="user-img"> <img src="" alt="user-avi" />
<div className="user-info">
  <h4>Jannie Schumm</h4>
  <p>Rating <span>2.0 years ago</span></p>
</div>

</div>
        </div>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.</p>
        </div>
      </div> */}
        <div className=" related-products">
          <h3>Related Products</h3>
          <div className="item-cards">
            <div className="item">
              <ItemCard
                image="/images/product-images/equipment02.jpg"
                productName="Automatic Dialysis Couch"
              />
            </div>
            <div className="item">
              <ItemCard
                image="/images/product-images/equipment03.jpg"
                productName="Automatic External Defibrillator - RESCUE Sam"
              />
            </div>
            <div className="item">
              <ItemCard
                image="/images/product-images/equipment04.png"
                productName="BLUE GATE UPS"
              />
            </div>
            <div className="item">
              <ItemCard
                image="/images/product-images/equipment05.png"
                productName="Ceiling-mounted surgical light – PG EYES"
              />
            </div>
            <div className="item">
              <ItemCard
                image="/images/product-images/equipment06.jpg"
                productName="Defibrillator – RESCUE LIFE 7″ DISPLAY VERSION"
              />
            </div>
          </div>
        </div>
      </div>
    </HeadFoot>
  );
}
