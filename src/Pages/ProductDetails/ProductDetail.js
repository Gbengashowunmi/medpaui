import { Button } from "@mui/material";
import React from "react";
import HeadFoot from "../../component/HeadFoot";
import "./ProductDetails.scss";


export default function ProductDetail() {
  return (
    <HeadFoot>
      <section className="hero-section">
        <div className="product-img">
          <div className="main-img">
            <img
              src="https://bonik-react.vercel.app/assets/images/products/headphone.png"
              alt=""
            />
          </div>
          <div className="img-color">
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
          </div>
        </div>
        <div className="product-info">
          <h2>Mi Note 11 Pro</h2>
          <p>
            Brand: <span>Ziaomi</span>
          </p>
          <p>
            Rated: <span> (50)</span>
          </p>
          <h4 className="price">$1135.00</h4>
          <p>Stock Available</p>
          <Button variant="contained" className="addtocart-btn">
            See More
          </Button>
        </div>
      </section>
      <div className="head">
        <p>Description</p>
        <p>Review</p>
      </div>
      <hr />

      <div className="description">
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
  <h4>Related Products</h4>

        </div>
    </HeadFoot>
  );
}
