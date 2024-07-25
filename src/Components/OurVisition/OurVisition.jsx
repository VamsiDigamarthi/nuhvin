import React from "react";
import "../OurStory/OurStory.css";
import { motion } from "framer-motion";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GiStarShuriken } from "react-icons/gi";
import { featureVariantsAbout } from "../../data/animation";
const OurVisition = () => {
  const transition = { type: "spring", duration: 1 };
  return (
    <div className="our-stories-main-card">
      <div className="our-stories-first-card">
        <div className="our-stories-first-card-inner-card">
          <div className="our-stories-fisrt-card-our-story-text">
            {/* <span></span> */}
            <h3>Our Visition</h3>
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
      {/*  */}
      <div className="our-stories-second-card">
        <h2>
          What We <span className="shero-span-color">Say</span> to our People
        </h2>
        <p>
          NGS is a digital transformation company that focuses on experience and
          can assist your business in achieving exponential growth by providing
          outstanding engineered experiences to your customers and employees.
          Our strategy is to merge human-centered design with the precision and
          volume of real-time analytics, AI, cognitive technology, and
          automation.
        </p>
        <p>
          NGS is a digitization company that provides exclusivity. We are the
          driving force behind the experience. Colossus of today—the companies
          best known for the transformative experiences they deliver. Working
          with the best has provided us with much of our knowledge about great
          experiences. The clients we work with are just like us in that they
          care deeply about the human experiences they provide for customers.
        </p>
        <p>
          Our collaborations span many different industries, such as Banking &
          Financial Services, Insurance, Healthcare, Retail, Telecommunications,
          Media & Entertainment, Technology, Travel & Hospitality, and
          Logistics.
        </p>
        <p>
          We are dedicated to continuously striving for a better world for
          individuals. Our employees are given the freedom and autonomy to
          experiment without fear, seize opportunities, and support change due
          to our culture of entrepreneurialism and inclusiveness. They turn
          vision into reality by combining deep business and industry expertise
          with collaborative innovation and diverse perspectives to realize our
          purpose: the relentless pursuit of a world that works better world for
          individuals. We require both those who contemplate and those who take
          action. Individuals who have a natural curiosity and drive to learn
          and expand their knowledge on a continuous basis. As we work together
          to achieve a better world, we will help you develop your intellectual
          power to achieve a better you.
        </p>
      </div>
      <div className="our-stories-third-card-parents">
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={transition}
          className="our-stories-third-card-parents-left-card"
        >
          <motion.span
            initial="offscreen"
            whileInView={"onscreen"}
            variants={featureVariantsAbout}
            // transition={{ duration: 18,  }}
          >
            <GiStarShuriken size={30} color="#fff" />
          </motion.span>
          <div className="our-stories-third-card-parents-left-first-images-card">
            <img src="/images/441bdc1e9b.jpg" alt="" />
          </div>
          <div className="our-stories-third-card-parents-left-second-images-card">
            <img src="/images/7f5ae780ce.jpg" alt="" />
            <div className="our-stories-third-card-parents-left-second-images-card-dotted-card">
              <span></span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ ...transition, duration: 2 }}
          className="our-stories-third-card-parents-right-card"
        >
          <div className="our-stories-fisrt-card-our-story-text">
            {/* <span></span> */}
            <h3>FUTURE</h3>
          </div>
          <h1>
            {/* Shaping the Future with <br /> our{" "}
            <span className="shero-span-color">Strategy</span> */}
            Our vision
          </h1>
          <p>
            It aims to make a positive impact on a global scale.The company's
            focus is on developing solutions that empower users, and this is
            emphasized.
          </p>
          <div className="our-stories-third-card-icons-with-text">
            <IoMdCheckmarkCircleOutline size={30} color="#ff3c00" />
            <span>
              <span>Empowerment</span> : We believe that everyone has access to
              technology so they may reach their full potential.
            </span>
          </div>
          <div className="our-stories-third-card-icons-with-text">
            <IoMdCheckmarkCircleOutline size={30} color="#ff3c00" />
            <span>
              <span>Transformation</span>: Our software should lead to
              significant and advantageous improvements for both people and
              enterprises.
            </span>
          </div>
          <div className="our-stories-third-card-icons-with-text">
            <IoMdCheckmarkCircleOutline size={30} color="#ff3c00" />
            <span>
              <span>User-centricity</span>: Our top priority is creating
              software solutions that are easy to use and intuitive.
            </span>
          </div>
          <div className="our-stories-third-card-icons-with-text">
            <IoMdCheckmarkCircleOutline size={30} color="#ff3c00" />
            <span>
              <span>Seamless integration</span> : Our vision is of a day where
              technology subtly enhances human experience.
            </span>
          </div>
          <div className="our-stories-third-card-icons-with-text">
            <IoMdCheckmarkCircleOutline size={30} color="#ff3c00" />
            <span>
              <span>Positive impact</span> :We strive to contribute to a future
              where technology serves as a force for good
            </span>
          </div>
          {/* <div className="our-stories-third-card-icons-with-text">
              <IoMdCheckmarkCircleOutline size={30} color="#ff3c00" />
              <span>
                <span>Sustainability</span> : To create software solutions that
                are not only effective but also environmentally and socially
                responsible.
              </span>
            </div> */}
          {/* <div className="our-stories-third-card-icons-with-text">
              <IoMdCheckmarkCircleOutline size={30} color="#ff3c00" />
              <span>
                <span>Diversity and inclusion</span> : To foster a diverse and
                inclusive environment where everyone feels valued and empowered to
                contribute their unique talents.
              </span>
            </div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default OurVisition;
