import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";
import { NavLink } from "react-router-dom";
import HeadFoot from "../../component/HeadFoot";
import OurServices from "../../component/ourServices/OurServices";
import "./service.scss"
// import "./about.scss";

export default function Service() {
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
            <h2>Our Service</h2>
            <p>
              <MdOutlineHome />
              <NavLink to="/">
                <span>HOME</span>
              </NavLink>{" "}
              <FaChevronRight />
              <span className="active">OUR SERVICE</span>
            </p>
          </div>
        </div>
      </div>

      <div className="technical_details">
          <div className="left">
            <p>
              Medpau offer various technical services for medical equipment. We
              have expert technicians that handle everything from maintenance,
              installation, calibration, clinical application training, and
              repair of your medical equipment in the most professional way. We
              are a phone call away and available 24/7 to cater for your
              technical needs. The goal is to keep your equipment running
              optimally at all times. <br />
              Our services are well-organized, reliable, cost-effective, and
              flexible which means they can be tailored to meet your needs. Our
              team of Technicians have unlimited access to spare parts, are
              well-equipped with state-of-the-art machines and tools required
              for the repair and maintenance of your medical devices.
            </p>
            <ul>
              OUR SERVICES INCLUDE:
              <li>Preventive Maintenance</li>
              <li>Corrective Maintenance</li>
              <li>Repairs</li>
            </ul>
            OUR SMART SOLUTIONS BENEFIT OUR CLIENTS BY:
            <ul>
              <li>Minimizing Equipment Downtime And The Cost Implication</li>
              <li>
                Fewer Urgent And Emergency Interruptions To Operations And
                Services From Sudden Breakdowns
              </li>
              <li>
                Controlled Reduction Of Major Repairs And Premature Equipment
                Replacement
              </li>
              <li>Conserving Equipment Life Span</li>
              <li>
                Relieving Them Of Unnecessary Burdens So They Can Focus On Their
                Core Businesses
              </li>
              <li>Helping Them Offer Efficient Predictable Services</li>
              <li>Improving Safety And Quality Conditions For Everyone</li>
            </ul>
          </div>

          <div className="right"></div>
        </div>

      <section className="services">
        <h4 className="light-blue-bg-text head">OUR SERVICES</h4>
        <h3>Explore Our Main Service</h3>
        <div className="services-wrapper">
          <OurServices
            head="Project Management
"
            decsription="From consultancy to renovations and procurement, we are your number one partners."
          />
          <OurServices
            head="Medical Equipment"
            decsription="We distribute state-of-the-art medical equipment in Nigeria and West Africa."
          />
          <OurServices
            head="Maintenance & Support"
            decsription="Our qualified Service Engineers offer predictable maintenance and after sales support services"
          />
        </div>
      </section>
    </HeadFoot>
  );
}
