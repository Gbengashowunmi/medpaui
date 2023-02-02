import React, { useEffect, useState } from "react";
import "../component/headFoot.scss";
import { HiMenuAlt3 } from "react-icons/hi";

import {
  FaChevronRight,
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@mui/material";

export default function HeadFoot({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".nav");
    const scrollTop = window.scrollY;
    scrollTop >= 40
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  return (
    <div className="head-foot-wrapper">
      <div
        onClick={handleToggle}
        className={` ${isOpen ? "overlay" : "show"}`}
      ></div>
      <header className="nav">
        <div className="comapany-icon">
          <div className="logo">
            {" "}
            <Link to="/">
              <img
                src="/images/WhatsApp_Image_2023-01-23_at_9.13.05_AM-removebg-preview.png"
                alt="logo"
              />
            </Link>{" "}
          </div>

          <div onClick={handleToggle}>
            <HiMenuAlt3 className={`nav-bar ${isOpen ? "white" : ""}`} />
          </div>
        </div>
        <ul className={`navbar-content ${isOpen ? "open" : ""}`}>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/shop">
            <li>Shop</li>
          </NavLink>
          <NavLink to="/service">
            <li>Service</li>
          </NavLink>
          <li>Our Blog</li>
          <NavLink to="/mgtp">
          <li>MGTP</li>
          </NavLink>
          <Button variant="contained" className="appointment-btn">
            APPOINTMENT
          </Button>
        </ul>
      </header>
      {children}
      <footer>
        <div
          className="about"
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="30"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <h3>MEDPAU</h3>
          <p>
            At MedPau, we believe smart innovations in healthcare is key to
            advancement of a society which translates to better economy and
            quality of life. Professionalism.
          </p>
          <ul>
            <Link to="//www.facebook.com/Medpau1" target="_blank">
              <li>
                <FaFacebookF />
              </li>
            </Link>
            <a href="mailto:Info@medpau.net">
              <li>
                <FaGooglePlusG />
              </li>
            </a>
            <Link to="//linkedin.com/company/medpau/" target="_blank">
              <li>
                <FaLinkedinIn />
              </li>
            </Link>
            <Link
              to="//twitter.com/medpauintl?s=11&t=zBroa9mFl_fitJFK1HbUcQ"
              target="_blank"
            >
              <li>
                <FaTwitter />
              </li>
            </Link>
          </ul>
        </div>
        <div
          className="courses"
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="30"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div className="head">
            <h3>Our Courses</h3>
            <hr />
          </div>
          <ul>
            <NavLink to="/about">
              {" "}
              <li>
                <FaChevronRight />
                About Us
              </li>
            </NavLink>
            <NavLink to="/service">
              <li>
                <FaChevronRight />
                Our Services
              </li>
            </NavLink>
            <NavLink to="/shop">
              {" "}
              <li>
                <FaChevronRight />
                Shop
              </li>
            </NavLink>
            <li>
              <FaChevronRight />
              Events
            </li>
            <NavLink to="/faq">
            <li>
              <FaChevronRight />
              FAQ
            </li>
            </NavLink>

          </ul>
        </div>
        <div
          className="recent-posts"
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="30"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div className="head">
            <h3>Recent Posts</h3>
            <hr />
          </div>
        </div>
        <div
          className="contact-us"
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="30"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div className="head">
            <h3>Contact Us</h3>
            <hr />
          </div>
          <ul>
            <a href="tel:+2349085323596">
            <li>
              <FaPhone /> <span>+234908 532 3596</span>
            </li>
            </a>
            <a href="mailto:Info@medpau.net">
            <li>
              <MdEmail /> <span>Info@medpau.net</span>
            </li>
            </a>
            <li>
              <MdLocationPin />{" "}
              <span>
                {" "}
                3, Tunde Gafar Close, Off Adeniyi Jones, Ikeja, Lagos
              </span>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
