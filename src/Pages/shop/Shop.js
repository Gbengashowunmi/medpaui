import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { IoIosFlash } from "react-icons/io";
import Button from "@mui/material/Button";
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
import Consumeables from "../../component/consumeables/Consumeables";
import data from "../../component/Data";
import { ThreeCircles } from  'react-loader-spinner'

export default function Shop() {

const [products, setProducts] =useState([])
const [loading, setLoading] =useState(true)

setTimeout(() => {
  setLoading(false)
}, 3000);
useEffect(()=>{
setProducts(data)
},[])

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
        <div className="cat_dropdown">
          <button>
            <BiCategory className="icon" />
            CATEGORIES
          </button>

          <ul className="ul">
            <Link to="#Hemodialysis"><li>Hemodialysis Machines</li></Link>
            <Link to="#ICU"> <li >ICU Equipment</li></Link>
            <Link to="#Operating_Theatre_Equipment"> <li >Operating Theatre Equipment</li></Link>
            <Link to="#Diagnostic_Imaging_Equipment"> <li>Diagnostic Imaging Equipment</li></Link>
            <Link to="#consumables"> <li>All consumables</li></Link>
            <NavLink to="/service"><li>Services</li></NavLink>
          </ul>
        </div>
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
      {loading?<ThreeCircles
  height="100"
  width="100"
  color="#2843f5"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>:
<>
      <div className="flash" id="Hemodialysis">
        <div className="header">
          <h3>
            <IoIosFlash className="icon" />
            HEMODIALYSIS MACHINES
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
        <div className="header">
          <h3>
            <IoIosFlash className="icon" />
            Hemodialysis Consumeables
          </h3>
        </div>
        <div className="consumeables-container">

        {products.filter(filtered=> filtered.category === "hemodialysis consumeables").map(product=>{
    return (
      <div key={product.id}>
        <Consumeables id={product.id} image={product.image}
          productName={product.name}
        />
      </div>
    )
  })}

        </div>
      </div>
      <div className="flash" id="ICU">
        <div className="header">
          <h3>
            <BiCategory className="icon" />
            ICU EQUIPMENTS
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
        <div className="header">
          <h3>
            <IoIosFlash className="icon" />
            ICU Consumeables
          </h3>
        </div>
        <div className="consumeables-container">
        {products.filter(filtered=> filtered.category === "ICU consumeables").map(product=>{
    return (
      <div key={product.id}>
        <Consumeables id={product.id} image={product.image}
          productName={product.name}
        />
      </div>
    )
  })}
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

      <div className="flash" id="Diagnostic_Imaging_Equipment">
        <div className="header">
          <h3>
            <BsGiftFill className="icon" />
            Diagnostic Imaging Equipment
          </h3>
          <button>
            <p>
              View all <BsForwardFill className="icon" />
            </p>
          </button>
        </div>
        <div className="item-cards">
          {products.filter(filtered=> filtered.category === "Diagnostic Imaging Equipment").map(product=>{
    return (
      <div className="item" key={product.id}>
        <ItemCard id={product.id} image={product.image}
          productName={product.name}
          />
          </div>
    )
  })}           
        </div>
      </div>
      <div className="flash" id="Operating_Theatre_Equipment">
        <div className="header">
          <h3>
            <BsGiftFill className="icon" />
            Operating Theatre Equipment
          </h3>
          <button>
            <p>
              View all <BsForwardFill className="icon" />
            </p>
          </button>
        </div>
        <div className="item-cards">
        {products.filter(filtered=> filtered.category === "Operating Theatre Equipment").map(product=>{
    return (
      <div className="item" key={product.id}>
        <ItemCard id={product.id} image={product.image}
          productName={product.name}
          />
          </div>
    )
  })} 
        </div>
      </div>
      <div className="flash">
        <div className="header">
          <h3>
            <BiCategory className="icon" />
            Medical Consumeables
          </h3>
          <button>
            <p>
              View all <BsForwardFill className="icon" />
            </p>
          </button>
        </div>
        <div className="consumeables-container">
        {products.filter(filtered=> filtered.category === "Medical Consumeables").map(product=>{
    return (
      <div key={product.id}>
        <Consumeables id={product.id} image={product.image}
          productName={product.name}
          />
          </div>
    )
  })}

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
      </>
}
    </main>

    </HeadFoot>
  );
}
