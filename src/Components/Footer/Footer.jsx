import React, { useState } from "react";
import "./Footer.css";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io5";
import { API } from "../../apidata/api";
export const Footer = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const onChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitterForm = (e) => {
    e.preventDefault();
    // console.log(user);

    API.post("/contact", user, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res?.data?.message);
        // alert("Tankyou");
      })
      .catch((e) => {
        console.log(e);
      });

    setUser({
      name: "",
      email: "",
    });
  };
  return (
    <div className="footer">
      <div className="footer-left-side">
        <div className="footer-company-logo-text-card">
          <img src="/images/ngs-logo.png" alt="logo" />
          <div>
            <p>
              is an online aggregator of financial products and services. We
              believe that unlike the common perception, every customer need is
              different and every customer has a different priority. So a one
              size fits all approach is seldom good.
            </p>
            <div className="term-privacy-card">
              <Link to="/terms-conditions" className="term-link">
                Term & Conditions
              </Link>
              <Link to="/privacy-policy" className="term-link">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-services-others-address-card">
          <div className="footer-services-single-card">
            <h3>Services</h3>
            <ul>
              <li>
                <Link className="footer-link" to="/ai">
                  Artificial Intelligence(AI)
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/cloud-computing-details">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/web-details">
                  UI/UX design
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/web-details">
                  Web Development
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/andriod-details">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  className="footer-link"
                  to="/software-developemnt-details"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/database-management-details">
                  Database Management
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/dev-ops">
                  DevOps
                </Link>
              </li>
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
              <li>Nuhvin-Hyderabad</li>
              <li>Nuhvin-Kakinada</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-right-side">
        <h2>Contact Us</h2>
        <div className="footer-input-card">
          <input
            name="name"
            onChange={onChangeUser}
            type="text"
            placeholder="Enter Your Name"
          />
          <FaRegCircleUser color="#ff3c00" size={37} />
        </div>
        <div className="footer-input-card">
          <input
            name="email"
            onChange={onChangeUser}
            type="text"
            placeholder="Enter Your Email"
          />
          <MdAlternateEmail color="#ff3c00" size={37} />
        </div>
        <button onClick={onSubmitterForm}>Touch With Us</button>
        <div className="footer-icons-card">
          <FaFacebook size={30} color="#ff3c00" />
          <a
            href="https://www.instagram.com/ngs_pvt_ltd/?igsh=MTJtbXY1cDBmZzU4MQ%3D%3D"
            target="__black"
          >
            <FaSquareInstagram size={30} color="#ff3c00" />
          </a>
          <IoLogoTwitter size={30} color="#ff3c00" />
          <a
            href="https://whatsapp.com/channel/0029VaIsEU30VycGv0IZrx39"
            target="__black"
          >
            <IoLogoWhatsapp size={30} color="#ff3c00" />
          </a>

          <a
            href="https://www.linkedin.com/company/ngs-nuhvin/"
            target="__black"
          >
            <CiLinkedin size={30} color="#ff3c00" />
          </a>
        </div>
      </div>
    </div>
  );
};
