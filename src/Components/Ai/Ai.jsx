import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GiStarShuriken } from "react-icons/gi";
import { featureVariantsAbout } from "../../data/animation";
import { motion } from "framer-motion";
const transition = { type: "spring", duration: 1 };
const Ai = () => {
  return (
    <div className="web-developemnt-detail-main">
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
      <div className="our-stories-second-card">
        <h2 style={{ textAlign: "center" }}>
          How
          <span className="shero-span-color"> we </span>
          help
        </h2>
        <p>
          Nuhvin leverages Artificial Intelligence (AI) to create new solutions
          that revolutionize
        </p>
        <p>
          enterprises and propel development. We help firms streamline
          operations, acquire significant knowledge through data
        </p>
        <p>
          and improve their capacity for decision-making by leveraging powerful
          AI algorithms and machine learning models.
        </p>
        <p>
          Our artificial intelligence (AI) solutions cover a wide variety of
          applications, including natural language processing (NLP),
        </p>
        <p>
          computer vision, predictive analytics, and robotic process automation.
          From virtual assistants that improve customer
        </p>
        <p>
          service to AI-driven analytics systems that improve activities, NGS
          enables organizations to capitalize on
        </p>

        <p>
          new possibilities, optimize productivity, and remain current in
          today's fast changing digital market.
        </p>
      </div>
      {/*  show tech */}
      <div className="all-services-main-card">
        <div className="all-services-main-first-card">
          <p>//ARTIFICIAL INTELLIGENCE</p>
          <h2>
            We craft your{" "}
            <span
              style={{
                color: "#ff6600",
              }}
            >
              digital
            </span>{" "}
            future
          </h2>
          <h1>
            Information & <span className="shero-span-color">Technologies</span>
          </h1>
          <span className="andriod-dev-dummytext">
            Nuhvin's AI products and services are at the cutting edge of
            creativity, giving organizations with disruptive possibilities that
            promote efficiency, agility, and growth. We provide a full portfolio
            of AI solutions adapted to our clients' various demands and issues,
            using cutting-edge technology such as machine learning, natural
            language processing, and computer vision. Our AI solutions, which
            range from intelligent automation and predictive analytics to
            virtual assistants and chatbots, enable enterprises to streamline
            operations, get actionable knowledge from data, and improve
            interactions with clients. NGS, with a focus on creating
            quantifiable outcomes and providing value, is your trusted partner
            for AI-driven transformation in today's fast changing digital world.
          </span>
        </div>
        <div className="all-services-each-card">
          <div className="services-each-single-card">
            <h2 style={{ textAlign: "center" }}>Requirement Analysis</h2>
            <p>
              Gather and analyze client requirements, business objectives, and
              data sources to identify opportunities for AI integration.
            </p>

            {/* <span>01</span>
            <img
              className="services-each-single-card-image-card"
              src="/images/word.jpg"
              alt=""
            /> */}
          </div>
          {/* Software development */}
          <div className="services-each-single-card">
            <h2 style={{ textAlign: "center" }}>
              Data Collection and Preprocessing
            </h2>
            <p>
              Collect relevant data from various sources, ensuring data quality,
              consistency, and relevance. Preprocess the data by cleaning,
              formatting, and transforming it to make it suitable for AI model
              training.
            </p>

            {/* <span>02</span>
            <img
              className="services-each-single-card-image-card"
              src="/images/word.jpg"
              alt=""
            /> */}
          </div>
          {/* Web development */}
          <div className="services-each-single-card">
            <h2 style={{ textAlign: "center" }}>
              Model Selection and Training
            </h2>
            <p>
              Choose appropriate AI models and algorithms based on the nature of
              the problem and available data. Train the selected models using
              the preprocessed data, optimizing parameters and hyper parameters
              as needed.
            </p>

            {/* <span>03</span>
            <img
              className="services-each-single-card-image-card"
              src="/images/word.jpg"
              alt=""
            /> */}
          </div>
          {/* Mobile development */}
          <div className="services-each-single-card">
            <h2 style={{ textAlign: "center" }}>
              Model Evaluation and Validation
            </h2>
            <p>
              Evaluate the trained models using validation datasets to assess
              performance, accuracy, and generalization capabilities and
              validate the models against real-world scenarios and user
              requirements to ensure alignment with business objectives
            </p>

            {/* <span>04</span>
            <img
              className="services-each-single-card-image-card"
              src="/images/word.jpg"
              alt=""
            /> */}
          </div>
          {/* E-commers service */}
          <div className="services-each-single-card">
            <h2 style={{ textAlign: "center" }}>DB Gap Audit</h2>
            <p>
              We We assess the database's security measures for assuring data
              confidentiality, integrity, and availability, and offer solutions
              to any gaps or vulnerabilities.
            </p>

            {/* <span>05</span>
            <img
              className="services-each-single-card-image-card"
              src="/images/word.jpg"
              alt=""
            /> */}
          </div>
          <div className="services-each-single-card">
            <h2 style={{ textAlign: "center" }}>Deployment and Integration</h2>
            <p>
              Deploy the trained AI models into production environments,
              integrating them with existing systems or applications. Ensure
              seamless integration and compatibility with the client's
              infrastructure, security protocols, and user interfaces.
            </p>

            {/* <span>06</span>
            <img
              className="services-each-single-card-image-card"
              src="/images/word.jpg"
              alt=""
            /> */}
          </div>
          <div className="services-each-single-card">
            <h2 style={{ textAlign: "center" }}>Monitoring and Maintenance</h2>
            <p>
              Monitor the performance and behavior of deployed AI models,
              collecting feedback and metrics for continuous improvement.
              Provide ongoing maintenance and support, addressing any issues,
              updating models, and adapting to changing requirements or
              environments.
            </p>

            {/* <span>06</span>
            <img
              className="services-each-single-card-image-card"
              src="/images/word.jpg"
              alt=""
            /> */}
          </div>
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
        <button>Nuhvin Quality</button>
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
          {/* <div className="our-stories-fisrt-card-our-story-text">
            <span></span>
            <h3>FUTURE</h3>
          </div> */}
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

export default Ai;
