import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GiStarShuriken } from "react-icons/gi";
import { container, featureVariantsAbout } from "../../data/animation";
import { motion } from "framer-motion";
const transition = { type: "spring", duration: 1 };
const WebDevelopment = () => {
  return (
    <div className="web-developemnt-detail-main">
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
      {/* text */}
      <div className="our-stories-second-card">
        <h2 style={{ textAlign: "center" }}>
          Bringing the Best<span className="shero-span-color"> Concepts </span>
          To Life
        </h2>
        <p>
          By transforming and shaping the future through business outcomes,
          industries can turn to our global professional services firm.
        </p>
        <p>
          NGS work with forward-thinking global corporations to transform their
          most pressing issues into opportunities, resilience, and growth.
        </p>
        <p>
          The construction of hyper-local supply chains is part of this process
          and the enhancement of customer or employee experiences is a priority.
          See
        </p>
        <p>
          how our expertise in digital, data, and operational excellence are put
          to use to improve the performance of businesses.
        </p>
      </div>
      {/*  show tech */}
      <div className="all-services-main-card">
        <div className="all-services-main-first-card">
          <p>//WEB DEVELOPEMNT SERVICES</p>
          <h2>We craft your digital future</h2>
          <h1>
            Information & <span className="shero-span-color">Technologies</span>
          </h1>
        </div>
        <div className="all-services-each-card">
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0)}
            className="services-each-single-card"
          >
            <h2>DRequirements Analysis</h2>
            <p>
              We begin by thoroughly understanding your business objectives and
              requirements. Our team collaborates closely with you to gather
              detailed insights into your target audience, desired features, and
              functionality expectations.
            </p>

            <span>01</span>
            <img
              className="services-each-single-card-image-card"
              src="/images/word.jpg"
              alt=""
            />
          </motion.div>
          {/* Software development */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0.1)}
            className="services-each-single-card"
          >
            <h2 style={{ textAlign: "center" }}>Strategic Planning</h2>
            <p>
              Based on the gathered requirements, we devise a strategic plan
              outlining the project scope, timeline, budget, and resource
              allocation. This step ensures alignment with your business goals
              and sets clear expectations for the project.
            </p>

            <span>02</span>
            <img
              className="services-each-single-card-image-card"
              src="/images/word.jpg"
              alt=""
            />
          </motion.div>
          {/* Web development */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0.2)}
            className="services-each-single-card"
          >
            <h2>Design and Prototyping</h2>
            <p>
              Our experienced designers craft intuitive user interfaces and
              wireframes that prioritize usability and user experience. Through
              interactive prototypes, we provide you with a visual
              representation of the web application's layout and functionality
              for feedback and validation.
            </p>

            <span>03</span>
            <img
              className="services-each-single-card-image-card"
              src="/images/word.jpg"
              alt=""
            />
          </motion.div>
          {/* Mobile development */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0.3)}
            className="services-each-single-card"
          >
            <h2 style={{ textAlign: "center" }}>Development</h2>
            <p>
              Using cutting-edge technologies and industry best practices, our
              skilled developers transform the approved designs into fully
              functional web applications. We prioritize clean, scalable, and
              maintainable code to ensure long-term success and flexibility.
            </p>

            <span>04</span>
            <img
              className="services-each-single-card-image-card"
              src="/images/word.jpg"
              alt=""
            />
          </motion.div>
          {/* E-commers service */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0.4)}
            className="services-each-single-card"
          >
            <h2 style={{ textAlign: "center" }}>
              Testing and Quality Assurance
            </h2>
            <p>
              Rigorous testing is conducted to identify and address any issues
              or bugs. Our QA experts perform comprehensive tests, including
              functionality testing, performance testing, security testing, and
              compatibility testing across different devices and browsers.
            </p>

            <span>05</span>
            <img
              className="services-each-single-card-image-card"
              src="/images/word.jpg"
              alt=""
            />
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={container(0.5)}
            className="services-each-single-card"
          >
            <h2>Deployment and Support</h2>
            <p>
              Once the web application passes all quality checks, we deploy it
              to your chosen hosting environment. We provide ongoing maintenance
              and support to ensure your application remains secure, up-to-date,
              and optimized for performance. Our dedicated support team is
              available to address any concerns or enhancements post-deployment.
            </p>

            <span>06</span>
            <img
              className="services-each-single-card-image-card"
              src="/images/word.jpg"
              alt=""
            />
          </motion.div>
        </div>
      </div>
      {/* quality */}
      <div className="our-stories-second-card">
        <h2>
          Our <span className="shero-span-color">Quality</span> Management
        </h2>
        <p>
          Developing software that is of the finest excellence after extensive
          testing and optimization.
        </p>
        <p>
          With our solutions for QA testing, test automation, performance
          testing, and security testing, you can develop
        </p>
        <p>
          software that is of the highest caliber. Acquire a market edge over
          competitors.
        </p>
        <button>Ngs Quality</button>
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
            <span></span>
            <h3>FUTURE</h3>
          </div>
          <h1>
            The way we <span className="shero-span-color">work</span>
          </h1>
          <p>
            Our approach starts with creating authenticity through a thorough
            exploration call. We collaborate closely with our customers to
            better grasp their distinct vision, brand values, and mission.
          </p>
          <div className="our-stories-third-card-icons-with-text">
            <IoMdCheckmarkCircleOutline size={30} color="#ff3c00" />
            <span>
              <span>Collaborate with client every step of the way</span> :We
              collaborate extensively with our clients throughout the design
              process, allowing for comments and adjustments to ensure their
              satisfaction with the product.
            </span>
          </div>
          <div className="our-stories-third-card-icons-with-text">
            <IoMdCheckmarkCircleOutline size={30} color="#ff3c00" />
            <span>
              <span>Stay up-to-date with latest design trends</span>: We stay up
              with the most recent design trends so that we can provide our
              clients timeless, contemporary designs.
            </span>
          </div>
          <div className="our-stories-third-card-icons-with-text">
            <IoMdCheckmarkCircleOutline size={30} color="#ff3c00" />
            <span>
              <span>
                Provide designs of the highest caliber with short lead times.
              </span>
              : Our specialty is providing our clients with fast, high-quality
              designs so they may fulfill their deadlines and accomplish what
              they want to achieve.
            </span>
          </div>
          <div className="our-stories-third-card-icons-with-text">
            <IoMdCheckmarkCircleOutline size={30} color="#ff3c00" />
            <span>
              <span>Timeless</span> : It's relevant for the long term because it
              doesn't depend on specific technologies or trends.
            </span>
          </div>
          <div className="our-stories-third-card-icons-with-text">
            <IoMdCheckmarkCircleOutline size={30} color="#ff3c00" />
            <span>
              <span>Provide exceptional customer service</span> : We focus
              customer service and endeavor to give our clients a happy and
              stress-free experience.
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

export default WebDevelopment;
