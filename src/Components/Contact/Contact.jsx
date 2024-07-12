import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
const transition = { type: "spring", duration: 1 };
const Contact = () => {
  return (
    <div className="career-main">
      <div className="our-stories-first-card">
        <div className="our-stories-first-card-inner-card">
          <div className="our-stories-fisrt-card-our-story-text">
            <span></span>
            <h3>Our Story</h3>
          </div>
          <h1>What we say to Our people</h1>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a
          </p>
        </div>
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={transition}
          className="our-stories-left-side-image-card"
        >
          <img src="/images/our-story-left.jpg" alt="our-story-left" />
          <motion.div
            // initial={{ rotate: 45 }}
            // whileInView={{ rotate: 0 }}
            // transition={{ duration: 2.5, type: "spring" }}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="our-story-left-side-dotted-card"
          >
            <span className="our-story-left-side-dotted-first-big-dot"></span>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ ...transition, duration: 2 }}
          className="our-stories-right-side-image-card"
        >
          <img src="/images/5ac603279f.jpg" alt="" />
          <div className="our-stories-right-side-dotted-card"></div>
        </motion.div>
      </div>
      <div className="our-stories-second-card-sss">
        <div className="our-stories-second-first-card-sss">
          <h3>Contact Us</h3>
          <span>Reach out to us for any enquiry</span>
          <div className="ourstories-second-first-input-card">
            <input type="text" placeholder="Enter Your Name" />
            <input type="text" placeholder="Enter Email" />
          </div>
          <div className="ourstories-second-first-input-card">
            <input type="text" placeholder="Enter Phone" />
            <input type="text" placeholder="Enter Subject" />
          </div>
          <div className="our-stories-second-first-text-area-card">
            <textarea placeholder="Enter Any Message"></textarea>
          </div>
          <button>Send Request</button>
        </div>
        <div className="our-stories-second-second-card">
          <div style={{ width: "100%", height: "100%" }}>
            <iframe
              width="100%"
              height="100%"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              title="Credex Loans"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6th%20Floor,SPRINT%20Business%20Center%20Jayabheri%20Silicon%20Tower,%20Kothaguda,Hyderabad-500084(T.S)+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps systems</a>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
