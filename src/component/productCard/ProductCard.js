import React from "react";
import { Link } from "react-router-dom";
import "./productCard.scss";
export default function ProductCard({ image, productName }) {
  return (
    <Link to="/details">
      <div className="product-container">
      <div className="sale">
            <p>SALE!</p>
          </div>
        <div className="image">
          <img src={image} alt="product-pics" />
          

          <div className="add-to-cart">
            <p>Read More</p>
          </div>
        </div>
        <div className="caption">
          <h5 className="product-name">{productName}</h5>
          <p className="price">
            <span>$500.00</span>$5,000.00
          </p>
        </div>
      </div>
    </Link>
  );
}
