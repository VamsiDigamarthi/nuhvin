import React, { useState } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { API } from "../../apidata/api";
const transition = { type: "spring", duration: 1 };
const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
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
      phone: "",
      message: "",
      subject: "",
    });
  };

  return (
    <div className="career-main">
      <div className="our-stories-first-card">
        <div className="our-stories-first-card-inner-card">
          <div className="our-stories-fisrt-card-our-story-text">
            <h1>
              <span className="new-career-asd">Connect</span> at Nuhvin
            </h1>
          </div>
          {/* <h1>What we say to Our people</h1> */}
          <p className="new-car-pa">
            Revolutionary digitization solutions to help you streamline your
            processes and improve productivity.
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
          <h3 id="contact">Contact Us</h3>
          <span id="react">Reach out to us for any enquiry</span>
          <div className="ourstories-second-first-input-card">
            <input
              onChange={onChangeUser}
              value={user.name}
              name="name"
              type="text"
              placeholder="Enter Your Name"
            />
            <input
              onChange={onChangeUser}
              name="email"
              type="text"
              value={user.email}
              placeholder="Enter Email"
            />
          </div>
          <div className="ourstories-second-first-input-card">
            <input
              onChange={onChangeUser}
              name="phone"
              type="text"
              value={user.phone}
              placeholder="Enter Phone"
            />
            <input
              onChange={onChangeUser}
              name="subject"
              type="text"
              placeholder="Enter Subject"
              value={user.subject}
            />
          </div>
          <div className="our-stories-second-first-text-area-card">
            <textarea
              onChange={onChangeUser}
              name="message"
              placeholder="Enter Any Message"
              value={user.message}
            ></textarea>
          </div>
          <button onClick={onSubmitterForm}>Send Request</button>
        </div>
        <div className="our-stories-second-second-card">
          <h2 id="contact">Nuhvin Branches</h2>
          <div>
            <FaLocationDot size={70} color="#ff6600" />
            <span id="react">
              6th Floor,SPRINT Business Center Jayabheri Silicon Tower,
              Kothaguda,Hyderabad-500084(T.S).
            </span>
          </div>
          <div>
            <FaLocationDot size={60} color="#ff6600" />
            <span id="react">
              70-1-9/1,Opp.Visakha Dairy, Sarpavaram Junction,
              Kakinada-533005(A.P).
            </span>
          </div>
          {/* <div style={{ width: "100%", height: "100%" }}>
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
