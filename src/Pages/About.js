import React from "react";
import { FaChevronRight, FaPhone } from "react-icons/fa";
import { MdOutlineHome } from "react-icons/md";
import { NavLink } from "react-router-dom";
import HeadFoot from "../component/HeadFoot";
import ChooseUsCard from "../component/chooseUsCard/ChooseUsCard";
import OurServices from "../component/ourServices/OurServices";
import ReviewSlider from "../component/reviews/ReviewSlider";
import Statistics from "../component/statistics/Statistics";
import "./about.scss";
import TeamSlide from "../component/teamMember/TeamSlide";

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
            MedPau is a fast-growing company, ahead of the curve in the
            distribution of medical equipment, consumables, disposables,
            furniture and apparel. We believe smart innovations in healthcare is
            key for the advancement of a healthy society, which translates to
            better economy and quality of life. This drives us to constantly
            evolve in the way we provide healthcare solutions and services in
            Nigeria and Africa at large. Our goal is to bridge the access to
            quality, affordable healthcare solutions and services. This is why
            we distribute cost-effective state-of-the-art medical equipment and
            instrumentation, offer Turnkey project management and
            Maintenance/technical services. This way, we fulfill our promise of
            improving the quality of life. At MedPau, we grow with our clients,
            working with them every step of the way. We deliver excellent
            customer experience through our unmatched after-sales support and
            24/7 online support. Our partnership with global brands and
            world-leading medical equipment manufacturers to meet our
            obligations is indeed one way in which our lasting impact in this
            forever revolutionary course has been measured <span>...Read More</span>
           
          </p>

          <ul
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
          </ul>
          <p className="blue-text">Do you have any question?</p>
          <h4>
            <FaPhone /> <span>+234805 6666700 </span>
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
