import React from "react";
import { FaChevronRight, FaPhone } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";
import { NavLink } from "react-router-dom";
import HeadFoot from "../../component/HeadFoot";
import ChooseUsCard from "../../component/chooseUsCard/ChooseUsCard";
import OurServices from "../../component/ourServices/OurServices";
import ReviewSlider from "../../component/reviews/ReviewSlider";
import Statistics from "../../component/statistics/Statistics";
import "./about.scss";
import TeamSlide from "../../component/teamMember/TeamSlide";

export default function About() {
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
            <h2>About Us</h2>
            <p>
              <MdOutlineHome />
              <NavLink to="/">
                <span>HOME</span>
              </NavLink>{" "}
              <FaChevronRight />
              <span className="active">ABOUT US</span>
            </p>
          </div>
        </div>
      </div>
      <aside className="what-about-us">
        <div className="img">
          <img src="/images/MD-PIX-2.jpeg" alt="about-us" />
        </div>
        <div className="details">
          <h4 className="light-blue-bg-text">WHAT ABOUT US</h4>
          <h2>Medpau International Limited</h2>
          <p>
            <i>
           "From the shores of start-up obscurity to a Pan-Africa Healthcare company.Medpau is driving the future of Healthcare through affordability."</i>
           
           Since her incorporation in 2016, Medpau has been bridging access to quality and affordable Healthcare by providing Hospitals and Healthcare facilities with turnkey solutions, state-of-the-art medical equipment, consumables and equipment maintenance services. We offer full solutions for building and equipping new hospitals, refurbishing old hosptals as well as training and Consultancy services. We believe in empowering them with innovations and within the Healthcare business space
          </p>

          {/* <ul
            data-aos="zoom-in-right"
            data-aos-offset="50"
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <li>Happy with Staff</li>
            <li>Quality of Care Services</li>
            <li>Intervention Success</li>
            <li>Client Satisfaction</li>
            <li>Patient Experience</li>
          </ul> */}
          <p className="blue-text">Do you have any question?</p>
          <h4>
          <a href="tel:+2349085323596">
            <FaPhone /> <span>+234908 532 3596</span>
            </a>
          </h4>
        </div>
      </aside>
      <section className="choose-us">
        <h3>Why Choose Medpau
</h3>
<p className="heading">We constantly evolve in the way we meet the needs of our customers, always asking questions and discovering better ways to satisfy them. More so, our solutions are custom made, tailored to meet needs individually.</p>
<div className="choose-us-wrapper">
  <ChooseUsCard title="Solutions Not Just Products" details="We offer custom made solutions in form of products, services and options to affordable healthcare. We support our customers and help them helps them thrive and rise above the challenges confronting healthcare businesses." image="images/medical-solution.jpg"  />
  <ChooseUsCard title="We Really Care About You" details="We listen to understand the needs your needs and ensure we offer them what is best for them, in the most cost-effective way and without compromising on quality. Knowing that a healthy society will translate to better economy and quality of life" image="images/cropped-shot-female-nurse-hold-260nw-2125640579.jpg" />
  <ChooseUsCard title="Investments In Relationship
" details="We understand the importance of business relationships in achieving success, which is why we build and maintain lasting relationships with our customers, and partners. By supporting them in every possible way, we grow together." image="images/images.jpg" />
  <ChooseUsCard title="Expert Dedicated Team
" details="Our people are our strongest asset. Over the years we have built a dedicated team of highly responsive Engineers and Customer Service Personnels that provides unmatched after-sales support to our customers with utmost professionalism." image="images/images (1).jpg"/>
</div>
      </section>
<div className="vision_mission">
  <h3>Our Vision</h3>
  <p>To become a global brand to be reckoned with</p>
</div>
<div className="vision_mission">
  <h3>Our Mission</h3>
  <p>To be frontier in pioneering innovations and solutions to quality , affordable and sustainable Healthcare</p>
</div>
<div className="vision_mission">
  <h3>Our Core Values</h3>
  <p>Innovations</p>
  <p>Excellence</p>
  <p>Integrity</p>
  <p>Responsiveness</p>
  <p>Customer centricity</p>
</div>
      <Statistics/>
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
      <section className="team-wrapper">
      <h4 className="light-blue-bg-text head">The Team</h4>
        
        <TeamSlide/>
      </section>

      <section className="reviews">
        <h4 className="light-blue-bg-text head">OUR CLIENTS</h4>
        <h3>
          Our Satisfied Clients' Reviews
          <div className="reviews-wrapper">
          <div>
            <ReviewSlider/>
          </div>
          </div>
        </h3>
      </section>
      <section className="our-process"></section>
    </HeadFoot>
  );
}
