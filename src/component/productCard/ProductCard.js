import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./productCard.scss";
export default function ProductCard({ image, productName }) {
  return (
      <div className="product-container">
      <div className="sale">
            <p>SALE!</p>
          </div>
        <div className="image">
          <img src={image} alt="product-pics" />
          

          <div className="add-to-cart">
    <Link to="/details">
            <p>Read More</p>
          </Link>
          </div>
        </div>
        <div className="caption">
          <h5 className="product-name">{productName}</h5>
          {/* <p className="price">
            <span>$500.00</span>$5,000.00
          </p> */}
          <p className='ratings'><BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarHalf/> <BsStar/></p>
        </div>
      </div>
  );
}
