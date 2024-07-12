import React from "react";
import "./Footer.css";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left-side">
        <div className="footer-company-logo-text-card">
          <img src="/images/ngs-logo.png" alt="logo" />
          <p>
            is an online aggregator of financial products and services. We
            believe that unlike the common perception, every customer need is
            different and every customer has a different priority. So a one size
            fits all approach is seldom good.
          </p>
        </div>
        <div className="footer-services-others-address-card">
          <div className="footer-services-single-card">
            <h3>Services</h3>
            <ul>
              <li>UI/UX design</li>
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>Software Development</li>
              <li>Database Management</li>
              <li>DevOps</li>
            </ul>
          </div>
          <div className="footer-services-single-card">
            <h3>Other-Services</h3>
            <ul>
              <li>Digital Marketing</li>
              <li>Internships</li>
              <li>E-commerce Services</li>
              <li>Workshops</li>
            </ul>
          </div>
          <div className="footer-services-single-card">
            <h3>Address</h3>
            <ul>
              <li>NGS-Hyderabad</li>
              <li>NGS-Kakinada</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-right-side">
        <h2>Contact Us</h2>
        <div className="footer-input-card">
          <input type="text" placeholder="Enter Your Name" />
          <FaRegCircleUser color="#ff3c00" size={37} />
        </div>
        <div className="footer-input-card">
          <input type="text" placeholder="Enter Your Email" />
          <MdAlternateEmail color="#ff3c00" size={37} />
        </div>
        <button>Touch with me</button>
        <div className="footer-icons-card">
          <FaFacebook size={30} color="#ff3c00" />
          <FaSquareInstagram size={30} color="#ff3c00" />
          <IoLogoTwitter size={30} color="#ff3c00" />
          <FaYoutube size={30} color="#ff3c00" />
          <CiLinkedin size={30} color="#ff3c00" />
        </div>
      </div>
    </div>
  );
};
