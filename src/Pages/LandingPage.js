import React, { useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../component/Carousel";
import CenterSlider from "../component/CenterSlider";
import HeadFoot from "../component/HeadFoot";
import ReviewSlider from "../component/reviews/ReviewSlider";
import SimpleSlider from "../component/SimpleSlider";
import Statistics from "../component/statistics/Statistics";
import "./landing.scss";
export default function LandingPage() {

  const [readMore, setReadMore] = useState(false)

  const handleclick =  ()=>{
    setReadMore(!readMore)
  }
  return (
    <HeadFoot>
      <main>
          <Carousel/>
      </main>
      <div className="hero-card-wrapper">
        <img src="/images/background_image_02.jpg" alt="card" />
        <div className="overlay"></div>
        <div className="hero-cards">
          <div
            className="hero-card"
            data-aos="zoom-in-right"
            data-aos-offset="50"
            data-aos-delay="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h3>Our Specialized Solutions </h3>
            <p>We offer various solutions to affordability and standard healthcare products and services</p>
            <Link to="/shop">
              {" "}
              <button>Check it out</button>
            </Link>
          </div>
          <div
            className="hero-card"
            data-aos="zoom-in-right"
            data-aos-offset="50"
            data-aos-delay="10"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h3>Need financing?</h3>
            <p>Financing solutions for your project and equipment procurement 
</p>
            <button>Reach out to us</button>
          </div>
          <div
            className="hero-card"
            data-aos="zoom-in-right"
            data-aos-offset="50"
            data-aos-delay="10"
            data-aos-duration="1400"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h3>Have a technical complain?</h3>
            <p>We provide unmatched after sales support, 24/7 online support and immediate response to complaints.</p>
           <Link to="//forms.gle/aJKSaxz2xyfbnQFy5"> <button>Contact our Engineers</button>
           </Link>
          </div>
        </div>
      </div>
      <section className="schedule-section">
        <div
          className="work-hour schedule"
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <h3>Working Hours</h3>
          <hr />
          <h6>
            Mon - Wed <span>8AM - 7PM</span>
          </h6>
          <hr />
          <h6>
            Thursday
            <span>8AM - 7PM</span>
          </h6>
          <hr />
          <h6>
            Friday <span>8AM - 7PM</span>
          </h6>
          <hr />
          <h6>
            Sat - Sunday
            <span>CLOSED</span>
          </h6>
          <hr />
          <h6>Time's not Flexible?</h6>
          <p>
            We provide high quality, integrated healthcare services, based on a
            patient - centered
          </p>
          <button>BOOK AN APPOINTMENT</button>
        </div>
        <div
          className="work-hour our-process"
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div className="img">
            <img src="/images/card_image_01.jpg" alt="aside" />
          </div>
          <div className="text">
            <h2>Hospital Turnkey Project solutions</h2>
            <p>
            Our commitment to promoting brilliant healthcare innovations, and increasing the access to affordable and quality healthcare is pivoted at improving the quality of life. We achieve this by distributing medical equipment and devices of leading brands, offering turnkey project management, consultancy, training and technical services.
            </p>
            {/* <button className="read-more" onClick = {handleclick}>{readMore?"Read Less": "Read More"}</button> */}
          </div>
        </div>
        <div
          className="work-hour our-process"
          data-aos="zoom-in"
          data-aos-offset="20"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div className="img">
            <img src="/images/card_image_02.jpg" alt="aside" />
          </div>
          <div className="text">
            <h2>Our Process</h2>
            <p>
            We believe in people and partnerships. This is why we invest in relationships, develop our team, build capacities and help our clients explore vast opportunities. This way we are able to grow with our clients, support them and help them build their business knowing that a healthy society will translate to better economy and quality of live.
            </p>
             {/* <button className="read-more" onClick = {handleclick}>{readMore?"Read Less": "Read More"}</button> */}
            
          </div>
        </div>
      </section>


      <section className="our-vision">
        <Statistics/>
      </section>

      <section className="reviews">
        <h6 className="light-blue-bg-text head">OUR CLIENTS</h6>
        <h3>Our Satisfied Clients' Reviews</h3>
        <div className="reviews-wrapper">
          <div>
            <ReviewSlider/>
          </div>


        </div>
      </section>
      <aside className="featured-post">
        <div className="head">
          <h6>FEATURE</h6>
          <h2>Featured Products </h2>
          <Link to="/shop">
            {" "}
            <button> SEE MORE</button>
          </Link>
        </div>
        <div className="products-container">
          <SimpleSlider />
        </div>
      </aside>

      <aside className="new-arrivals">
        <div className="head">
          <h6>PARTNERSHIP</h6>
          <h2>Our Partners</h2>
        </div>
        <div className="products-container">
          <CenterSlider />
        </div>
      </aside>
    </HeadFoot>
  );
}
