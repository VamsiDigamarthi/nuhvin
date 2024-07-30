import React from "react";
import "./DetailCareer.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const transition = { type: "spring", duration: 1 };
const DetailCareer = () => {
  const navigate = useNavigate();
  const jobData = [
    {
      title: "React/Angular  Developer",
      country: "India",
      location: "Hyderabad",
      experinceLevel: "2+ yrs",
      contractType: "Full Time",
    },
    {
      title: "Python Developer",
      country: "Inida",
      location: "Hyderabad",
      experinceLevel: "2+ yrs",
      contractType: "Full Time",
    },
    // {
    //   title: "Java Developer",
    //   country: "India",
    //   location: "Hyderabad",
    //   experinceLevel: "Fresher",
    //   contractType: "Contract Based",
    // },
    // {
    //   title: "Cloud Engineer",
    //   country: "India",
    //   location: "Hyderabad",
    //   experinceLevel: "2+ yrs",
    //   contractType: "Full Time",
    // },
    {
      title: "Mobile App Developer",
      country: "India",
      location: "Hyderabad",
      experinceLevel: "2+ yrs",
      contractType: "Contract Based",
    },
  ];

  const onSelecetTitle = (title) => {
    navigate("/apply-job", { state: { title: title } });
  };

  return (
    <div className="detail-career-main">
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
      <div className="detail-career-table">
        <h1>Rewrite your future. Search and apply for a job today.</h1>
        <div className="country-filter-card">
          <select>
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
            <option value="China">China</option>
          </select>
        </div>
        <div className="job-table">
          <div className="carrer-scrolling-view">
            <div className="detail-career-page-table-main">
              <div className="detail-carrer-page-table-header">
                <span>Job Name</span>
                <span>Country</span>
                <span>Location</span>
                <span>Experince Level</span>
                <span>Contract Type</span>
              </div>
              {jobData.map((job, key) => (
                <div
                  key={key}
                  onClick={() => onSelecetTitle(job.title)}
                  className="detail-career-page-table-body"
                >
                  <span>{job.title}</span>
                  <span>{job.country}</span>
                  <span>{job.location}</span>
                  <span>{job.experinceLevel}</span>
                  <span>{job.contractType}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCareer;
