import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../component/Data";
import HeadFoot from "../../component/HeadFoot";
import ItemCard from "../../component/ItemCard/ItemCard";
import "./ProductDetails.scss";

export default function ProductDetail() {
  const [products, setProducts] =useState([])
  useEffect(()=>{
  setProducts(data)
  },[])
  const {id} = useParams()
  const [product] = data.filter(singleProduct => singleProduct.id === +id)

  return (
    <HeadFoot>
      <div className="product-page">
        <section className="hero-section">
          <div className="product-img">
            <div className="main-img">
              <img
                src={product.image}
                alt="product"
              />
            </div>

          </div>
          <div className="product-info">
            <h2>{product.name}</h2>
            <p>
              Brand: <span>Ziaomi</span>
            </p>
            <p>
              Decsription: <span>APC Smart UPS is for uninterruptible power supply protection and management solutions. This UPS power supply provides protection from power surges, load shedding and unpredictable weather conditions during dialysis in the home or facility.</span>
            </p>
            {/* <p>
              Rated: <span> (50)</span>
            </p> */}
            {/* <h4 className="price">$1135.00</h4> */}
            <p>Stock Available</p>
            <Link to="/payment"
            // {`//api.whatsapp.com/send?phone=2349085323596&text=Hi+MedPau+International.+I'm+interested+in+buyng+${product.name}.+How+much+does+it+cost?`}  target="_blank"
            ><Button variant="contained" className="addtocart-btn">
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

            {products.filter(eachProduct=> eachProduct.category === product.category).map(relatedProduct=><div className="item" key={relatedProduct.id}>
              <ItemCard
              id={relatedProduct.id}
                image={relatedProduct.image}
                productName={relatedProduct.name}
              />
            </div>)}

          </div>
        </div>
      </div>
    </HeadFoot>
  );
}
