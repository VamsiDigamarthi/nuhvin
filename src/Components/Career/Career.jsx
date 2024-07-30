import React from "react";
import "./Career.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const transition = { type: "spring", duration: 1 };
export const Career = () => {
  return (
    <div className="n-career-main">
      <div className="our-stories-first-card">
        <div className="our-stories-first-card-inner-card">
          <div className="our-stories-fisrt-card-our-story-text">
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
      {/* text */}
      <div
        style={{ marginTop: "150px" }}
        className="detail-about-second-card new-career-style"
      >
        <h1>
          What we <span className="shero-span-color">Say</span> to our people
        </h1>
        <p className="text-change">
          Nuhvin is a digital transformation company that focuses on experience
          and can assist your business in achieving exponential growth by
          providing outstanding engineered experiences to your customers and
          employees. Our strategy is to merge human-centered design with the
          precision and volume of real-time analytics, AI, cognitive technology,
          and automation.
        </p>
        <p className="text-change">
          Nuhvin is a digitization company that provides exclusivity. We are the
          driving force behind the experience. Colossus of today—the companies
          best known for the transformative experiences they deliver. Working
          with the best has provided us with much of our knowledge about great
          experiences. The clients we work with are just like us in that they
          care deeply about the human experiences they provide for customers.
        </p>
        <p className="text-change">
          Our collaborations span many different industries, such as Banking &
          Financial Services, Insurance, Healthcare, Retail, Telecommunications,
          Media & Entertainment, Technology, Travel & Hospitality, and
          Logistics.
        </p>
        <p className="text-change">
          We are dedicated to continuously striving for a better world for
          individuals. Our employees are given the freedom and autonomy to
          experiment without fear, seize opportunities, and support change due
          to our culture of entrepreneurialism and inclusiveness. We turn vision
          into reality by combining deep business and industry expertise with
          collaborative innovation and diverse perspectives to realize our
          purpose: the relentless pursuit of a world that works better world for
          individuals. We require both those who contemplate and those who take
          action. Individuals who have a natural curiosity and drive to learn
          and expand their knowledge on a continuous basis. As we work together
          to achieve a better world, we will help you develop your intellectual
          power to achieve a better you. Beware of fake offers
        </p>
        <p className="text-change"></p>
      </div>
      {/* beware of text */}
      <div className="detail-about-third-card new-career-left-right-card">
        <div className="details-abput-third-card-left-side new-carrer-left">
          {/* <img src="/images/detail-about-first-imagesss.jpg" alt="" />
          <div>
            <img src="/images/rounded-detail-about-image.jpg" alt="" />
          </div> */}
          <img src="/images/alert fix.png" alt="" />
        </div>
        <div className="details-abput-third-card-right-side">
          {/* <div className="details-about-third-card-right-side-ornage-container">
            <h3>The way we see</h3>
          </div> */}
          <h1>
            Beware of <span className="shero-span-color">Fake.</span>
            offers
          </h1>
          {/* <h1>
            Engineering <span className="shero-span-color">Capacity.</span>
          </h1> */}
          <p>
            Protect yourself from fraudulent activities. Nuhvin is commited to
            transparency and integrity. Nuhvin never charges candidates a fee to
            participate in our recruitment process.
          </p>
          <p>
            Be cautious of unsolicited emails or messages claiming to be from
            Nuhvin, offering exclusive deals or opportunities. These often come
            from various social media sites or chat rooms or groups with people
            posing as Nuhvin Recruiters or Managers.
          </p>
          <p>
            Official communications will only come through our verified
            channels. If in doubt, contact our official support team directly.
            Stay vigilant and safeguard your online presence.
          </p>
        </div>
      </div>
      {/* apply job text */}
      <div className="detail-about-second-card">
        <h1>
          Launch Your Tech <span className="shero-span-color">Journey</span>{" "}
          Here
        </h1>
        <p>
          Connect with us to learn about open positions/opportunities and how
          your skills can shape the future of technology. Be a part of a team
          that's constantly pushing boundaries and developing groundbreaking
          solutions.
        </p>
        <div className="career-btn-card">
          <button>
            <Link
              to="/detail-career"
              style={{ color: "#fff" }}
              className="sabout-link-card"
            >
              Apply Job
            </Link>
          </button>
          <button>Apply Freelances</button>
        </div>
      </div>
    </div>
  );
};
