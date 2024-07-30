import React from "react";
import "./WhatWeOffer.css";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
export const WhatWeOffer = () => {
  return (
    <div className="what-we-offers">
      <div className="services-first-card-line">
        {/* <span></span> */}
        <h3>What we Offer</h3>
      </div>
      <div className="what-we-offers-text-card">
        <div>
          <h1>We're Here To Share </h1>
          <h1>
            To offers From <span className="shero-span-color">Nuhvin</span>
          </h1>
        </div>
        <span>
          Progressively maintain enterprise value vis-a-vis competitive
          materials Distinctively myocardinate next-generation interfaces
        </span>
      </div>
      <div className="what-we-offers-card-parents">
        <div className="what-we-offers-card-parents-single-card">
          <img
            src="https://www.shutterstock.com/image-vector/application-smartphone-business-graph-analytics-260nw-1583248045.jpg"
            alt=""
          />
          <span>Services</span>
          <div className="what-we-offers-card-parents-single-inner-card">
            {/* <img src="/images/istockphoto-1424057426-1024x1024.jpg" alt="" /> */}
            <span>Our Services</span>
            <h3>We offer services for business process.....</h3>
            <Link to="/our-services" className="sabout-link-card">
              <div className="what-we-offers-button-card">
                <span>Read me</span>
                <GoPlus />
              </div>
            </Link>
          </div>
        </div>
        {/* second */}
        <div className="what-we-offers-card-parents-single-card">
          <img src="/images/charlesdeluvio-Lks7vei-eAg-unsplash.jpg" alt="" />
          <span>Training</span>
          <div className="what-we-offers-card-parents-single-inner-card">
            {/* <img src="/images/istockphoto-1424057426-1024x1024.jpg" alt="" /> */}
            <span>Our Training</span>
            <h3>By joining us, you will get a positive learing.....</h3>
            <Link to="/our-services" className="sabout-link-card">
              <div className="what-we-offers-button-card">
                <span>Read me</span>
                <GoPlus />
              </div>
            </Link>
          </div>
        </div>
        {/* third */}
        <div className="what-we-offers-card-parents-single-card">
          <img src="/images/john-schnobrich-FlPc9_VocJ4-unsplash.jpg" alt="" />
          <span>Industries</span>
          <div className="what-we-offers-card-parents-single-inner-card">
            {/* <img src="/images/istockphoto-1424057426-1024x1024.jpg" alt="" /> */}
            <span>Our Industries</span>
            <h3>We offers innovative business solutions to.....</h3>
            <Link to="/our-services" className="sabout-link-card">
              <div className="what-we-offers-button-card">
                <span>Read me</span>
                <GoPlus />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
