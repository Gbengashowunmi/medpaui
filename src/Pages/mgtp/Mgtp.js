import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";
import { NavLink } from "react-router-dom";
import HeadFoot from "../../component/HeadFoot";

export default function Mgtp() {
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
            <h2>MGTP</h2>
            <p>
              <MdOutlineHome />
              <NavLink to="/">
                <span>HOME</span>
              </NavLink>
              <FaChevronRight />
              <span className="active">MGTP</span>
            </p>
          </div>
        </div>
      </div>

    </HeadFoot>
  );
}
