import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { IoIosFlash } from "react-icons/io";

import { BsCart4, BsForwardFill, BsGiftFill, BsSearch } from "react-icons/bs";
import { RiAccountPinCircleFill } from "react-icons/ri";
import "./shop.scss";

import HeadFoot from "../../component/HeadFoot";
import ItemCard from "../../component/ItemCard/ItemCard";
import ShortMessage from "../../component/shortMessage/ShortMessage";
import SimpleSlider from "../../component/SimpleSlider";
import CenterSlider from "../../component/CenterSlider";
import { MdOutlineHome } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
export default function Shop() {
  return (
    <HeadFoot>
            <div className="about-head">
        <div className="image">
          <div className="overlay"></div>
          <img src="/images/breadcrumb-image-1.jpg" alt="about-us" />
          <div
            className="texts"
            data-aos="zoom-in-right"
            data-aos-offset="50"
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h2>Shop here</h2>
            <p>
              <MdOutlineHome />
              <NavLink to="/">
                <span>HOME</span>
              </NavLink>{" "}
              <FaChevronRight />
              <span className="active">Shop</span>
            </p>
          </div>
        </div>
      </div>
      <div className="top">
        <button>
          {" "}
          <BiCategory className="icon" />
          CATEGORIES
        </button>
        <div className="search">
          <BsSearch className="search-icon" />
          <input placeholder="Type and hit enter" />
        </div>
        <div className="cart_contact">
          <Link to="/view-cart">
            {" "}
            <div className="icon-container">
              <BsCart4 className="icon" />
            </div>
          </Link>
          <div className="icon-container">
            <RiAccountPinCircleFill className="icon" />
          </div>
        </div>
      </div>

      <main className="shop-main">
        <div className="flash">
          <div className="header">
            <h3>
              <IoIosFlash className="icon" />
              Flash
            </h3>
            <button>
              <p>
                View all <BsForwardFill className="icon" />
              </p>
            </button>
          </div>
          <div className="products-container">
          <CenterSlider />
        </div>
        </div>
        <div className="flash">
        <div className="header">
            <h3>
              <BiCategory className="icon" />
              Top Ratings
            </h3>
            <button>
              <p>
                View all <BsForwardFill className="icon" />
              </p>
            </button>
          </div>
        <div className="products-container">
          <SimpleSlider />
        </div>
        </div>
        <div className="sales-banner">

          <div className="banner1"></div>
          <div className="banner2">
            <div className="image">
            <img src="/images/sales.png" alt="banner2" />
            </div>
          </div>
        </div>

        <div className="flash">
          <div className="header">
            <h3>
              <BsGiftFill className="icon" />
              Big Discount
            </h3>
            <button>
              <p>
                View all <BsForwardFill className="icon" />
              </p>
            </button>
          </div>
        <div className="item-cards">
            <div>
              <ItemCard
                images="/images/2-removebg-preview.png"
                productName="Product Name"
              />
            </div>
            <div>
              <ItemCard
                images="/images/9__1_-removebg-preview.png"
                productName="Product Name"
              />
            </div>
            <div>
              <ItemCard
                images="/images/2-removebg-preview.png"
                productName="Product Name"
              />
            </div>
            <div>
              <ItemCard
                images="/images/9__1_-removebg-preview.png"
                productName="Product Name"
              />
            </div>
            <div>
              <ItemCard
                images="/images/9__1_-removebg-preview.png"
                productName="Product Name"
              />
            </div>
            <div>
              <ItemCard
                images="/images/9__1_-removebg-preview.png"
                productName="Product Name"
              />
            </div>
            <div>
              <ItemCard
                images="/images/9__1_-removebg-preview.png"
                productName="Product Name"
              />
            </div>
          </div>
          </div>
        <section
          className="short-message-wrapper"
          data-aos="zoom-in-right"
          data-aos-offset="50"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <ShortMessage
            header="Worldwide Delivery
"
            description="We offer competitive prices on our 100 million plus product any range.
"
          />
          <ShortMessage
            header="Safe Payment
"
            description="We offer competitive prices on our 100 million plus product any range.
"
          />
          <ShortMessage
            header="Shop With Confidence
"
            description="We offer competitive prices on our 100 million plus product any range.
"
          />
          <ShortMessage
            header="24/7 Support
"
            description="We offer competitive prices on our 100 million plus product any range.
"
          />
        </section>
      </main>
    </HeadFoot>
  );
}
