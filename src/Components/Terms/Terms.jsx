import React from "react";
import "./Terms.css";
import { motion } from "framer-motion";
const Terms = () => {
  const transition = { type: "spring", duration: 1 };

  return (
    <div className="terms">
      <div className="our-stories-first-card">
        <div className="our-stories-first-card-inner-card">
          <div className="our-stories-fisrt-card-our-story-text">
            {/* <span></span> */}
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
      <div className="terms-main-card">
        <h2>Terms and Conditions</h2>
        <h3>1. Introduction</h3>
        <p>
          Welcome to the Nuhvin Global Services Private Limited ("Nuhvin")
          website. By accessing or using our website, you agree to comply with
          and be bound by these Terms and Conditions. Please read them
          carefully. If you do not agree with these terms, please do not use our
          website.
        </p>
        <h3>2. Use of the Website</h3>
        <p>
          <span>2.1 Restrictions: </span>You may not use the website for any
          unlawful purpose or in any way that could damage, disable, overburden,
          or impair the website. Unauthorized access to the website, servers, or
          any associated databases is prohibited.
        </p>
        <h3>3. Intellectual Property</h3>
        <p>
          <span> 3.1 Ownership:</span>All content on this website, including but
          not limited to text, graphics, logos, images, and software, is the
          property of NUHVIN or its licensors and is protected by copyright,
          trademark, and other intellectual property laws.
        </p>
        <p>
          <span>3.2 Limited Use: </span>You may not reproduce, distribute,
          modify, display, or otherwise use any content from the website without
          the prior written consent of NUHVIN.
        </p>
        <h3>4. Disclaimer of Warranties</h3>
        <p>
          <span>4.1 No Warranties: </span>
          The website is provided on an "as is" and "as available" basis. NUHVIN
          makes no representations or warranties of any kind, express or
          implied, regarding the website or the content, products, or services
          offered.
        </p>
        <p>
          <span>4.2 Limitation of Liability: </span>
          NUHVIN shall not be liable for any damages arising from the use or
          inability to use the website or any content, services, or products
          obtained through the website.
        </p>
        <h3>5. Privacy Policy</h3>
        <p>
          Please refer to our <span>Privacy Policy</span> for information on how
          we collect, use, and disclose personal information from our users.
        </p>
        <h3>6. Links to Third-Party Sites</h3>
        <p>
          Our website may contain links to third-party websites that are not
          owned or controlled by NUHVIN. We have no control over, and assume no
          responsibility for, the content, privacy policies, or practices of any
          third-party websites. You acknowledge and agree that NUHVIN shall not
          be responsible or liable for any damage or loss caused by or in
          connection with the use of any such content, goods, or services
          available on or through any such websites or services.
        </p>
        <h3>7. Changes to the Terms and Conditions</h3>
        <p>
          Nuhvin reserves the right to modify these Terms and Conditions at any
          time. Any changes will be effective immediately upon posting. Your
          continued use of the website following any changes constitutes your
          acceptance of the revised terms.
        </p>
        <h3>8. Governing Law</h3>
        <p>
          These Terms and Conditions are governed by and construed in accordance
          with the laws of hyderabad, without regard to its conflict of law
          principles. You agree to submit to the exclusive jurisdiction of the
          courts located in Hyderabad, india.
        </p>
        <h3>9. Contact Information</h3>
        <p>
          If you have any questions or concerns regarding these Terms and
          Conditions, please contact us at: info@nuhvin.com
        </p>
      </div>
    </div>
  );
};

export default Terms;
