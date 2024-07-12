import React from "react";
import "./OurServices.css";
import { FaLaptop } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
export const OurServices = () => {
  return (
    <div className="our-services-main-card">
      <div className="our-services-first-card">
        <div className="our-services-first-card-left-side">
          <span> IT Software & Designs</span>
          <h1>Build Better App with</h1>
          <h1>
            Quiety <span className="shero-span-color">Software</span>
          </h1>
          <p>
            Porttitoripsum dolor sit amet, consectetur adipiscing elit lectus
            matties, Facilisis in aliquet non, dictum id nulla donec porttitor
            ut elit.
          </p>
          <div className="awesome-single-button-card">
            <button>Explore More</button>
            {/* <FaArrowRight size={20} color="#fff" /> */}
          </div>
        </div>
        <div className="our-service-first-card-right-side">
          <img src="/images/technology.png" alt="" />
        </div>
      </div>
      <div className="our-services-second-card">
        <div className="our-services-second-card-white-back"></div>
        <div className="our-services-second-inner-card-text">
          <div className="our-services-second-inner-card-text-first">
            <h1>Discover NGS</h1>
            <p>
              At Ngs, innovation is our language, and your success is our
              mission. Welcome to a world where possibilities are endless.
            </p>
          </div>
          <div className="our-services-second-inner-card-multiple-card">
            <div className="our-services-second-inner-card-multiple-card-single-card">
              <div className="our-services-second-inner-card-multiple-card-single-card-cons-text">
                <span>
                  <FaLaptop size={25} color="#ff3c00" />
                </span>
                <h3>
                  The <br /> way we see
                </h3>
              </div>
              <p>
                To empower individuals and organizations with software solutions
                that are intuitive and impactful...
              </p>
              <div className="our-services-second-inner-card-multiple-card-single-card-btn-card">
                <span>Our Vision</span>
                <FaLongArrowAltRight size={25} color="#0c1a1a" />
              </div>
            </div>
            {/* second */}
            <div className="our-services-second-inner-card-multiple-card-single-card">
              <div className="our-services-second-inner-card-multiple-card-single-card-cons-text">
                <span>
                  <FaLaptop size={25} color="#ff3c00" />
                </span>
                <h3>We Strive to achieve our...</h3>
              </div>
              <p>
                Revolutionize the power of technology to create innovative
                software solutions, enabling users to achieve their goals...
              </p>
              <div className="our-services-second-inner-card-multiple-card-single-card-btn-card">
                <span>Our Mission</span>
                <FaLongArrowAltRight size={25} color="#0c1a1a" />
              </div>
            </div>
            {/* Third */}
            <div className="our-services-second-inner-card-multiple-card-single-card">
              <div className="our-services-second-inner-card-multiple-card-single-card-cons-text">
                <span>
                  <FaLaptop size={25} color="#ff3c00" />
                </span>
                <h3>
                  Our <br /> values
                </h3>
              </div>
              <p>
                Innovation and collaboration are at our core, driving us to
                build user-centric software with integrity and ...
              </p>
              <div className="our-services-second-inner-card-multiple-card-single-card-btn-card">
                <span>Ngs Value</span>
                <FaLongArrowAltRight size={25} color="#0c1a1a" />
              </div>
            </div>
            {/* fouth */}
            <div className="our-services-second-inner-card-multiple-card-single-card">
              <div className="our-services-second-inner-card-multiple-card-single-card-cons-text">
                <span>
                  <FaLaptop size={25} color="#ff3c00" />
                </span>
                <h3>
                  Our <br /> Goals
                </h3>
              </div>
              <p>
                We aim to become a leading force in the software industry by
                developing innovative and user-centric...
              </p>
              <div className="our-services-second-inner-card-multiple-card-single-card-btn-card">
                <span>Our Vision</span>
                <FaLongArrowAltRight size={25} color="#0c1a1a" />
              </div>
            </div>
          </div>
          <div className="our-service-second-inside-third-card-main">
            <img src="/images/our-asdfvb.jpg" alt="" />
            <div className="our-service-second-inside-third-card-main-text-card">
              <h2>
                What <span className="shero-span-color">Motivates</span> Us to
                Do What We Do
              </h2>
              <p>
                By transforming and shaping the future through business
                outcomes, industries can turn to our global professional
                services firm.
              </p>
              <p>
                NGS work with forward-thinking global corporations to transform
                their most pressing issues into opportunities, resilience, and
                growth. The construction of hyper-local supply chains is part of
                this process and the enhancement of customer or employee
                experiences is a priority.
              </p>
              <p>
                See how our expertise in digital, data, and operational
                excellence are put to use to improve the performance of
                businesses.
              </p>
              <button>NGS Info</button>
            </div>
          </div>
          {/*  */}
          <div className="our-service-second-inside-third-card-main">
            <div className="our-service-second-inside-third-card-main-text-card">
              <h2>
                What We <span className="shero-span-color">Promises</span>
              </h2>

              <p>
                At NGS, we promise to empower you with reliable, user-friendly
                software that delivers exceptional value. We back our products
                with unwavering support, ensuring your success every step of the
                way. Together, we'll navigate the ever-evolving technological
                landscape, unlocking your full potential.
              </p>
              <p>
                See how our expertise in digital, data, and operational
                excellence are put to use to improve the performance of
                businesses.
              </p>
              <button>NGS Promises</button>
            </div>
            <img src="/images/bulb.jpg" alt="" />
          </div>
          {/*  */}
          <div className="our-service-second-inside-third-card-main">
            <img src="/images/our-asdfvb.jpg" alt="" />
            <div className="our-service-second-inside-third-card-main-text-card">
              <h2>
                Our <span className="shero-span-color">approach</span>
              </h2>
              <p>
                The unwavering quest for a better future for people, is
                essential to bringing about significant and long-lasting change
                for our clients, employees, and the communities we are a part of
                around the world. Our approach to diversity, equity, and
                inclusion is based on four pillars that enable us to achieve our
                goals.
              </p>
              <p>
                ngs is dedicated to attracting talented individuals by
                collaborating with partners and universities that specialize in
                hiring candidates from underrepresented communities and
                improving our employee referral programs.
              </p>
              {/* <p>
                Our priority is to empower employees to reach their full
                potential, and we prioritize supporting people from minority
                groups.
              </p> */}
              <button>NGS Info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
