import React, { useState } from "react";
import "./JobForm.css";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { API } from "../../apidata/api";

const transition = { type: "spring", duration: 1 };
const JobForm = () => {
  const location = useLocation();
  // console.log(location.state?.title);
  let jobTitlesss = location.state.title;
  const [showPassword, setShowPassword] = useState(false);
  const [secondShowPassword, setSecondShowPassword] = useState(false);
  const [applyData, setApplyData] = useState({
    resume: "",
    coverLetter: "",
    email: "",
    reEmail: "",
    password: "",
    rePassword: "",
    legalFirstName: "",
    legalMiddleName: "",
    legalLastName: "",
    phoneNumber: "",
    jobTitle: location.state?.title,
    jobLocation: "",
    countryCode: "",
    relocate: "",
    agreement: "",
    disability: "",
    employmentStatus: "",
    checkBoxagreement: "",
    agreeToPrivacyPolicy: "",
    notificationJob: "",
    notificationEvent: "",
    nuhvinID: "",
    intershipType: "",
  });

  const [applyJobError, setApplyJobError] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplyData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setApplyData((prevData) => ({ ...prevData, [name]: checked }));
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setApplyData({ ...applyData, resume: file });
    } else {
      // alert('Please select a PDF file.');
      e.target.value = null; // Clear the input
    }
  };

  const handleFileCover = (e) => {
    const file = e.target.files[0];
    if (file) {
      setApplyData({ ...applyData, coverLetter: file });
    } else {
      // alert('Please select a PDF file.');
      e.target.value = null; // Clear the input
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    const name = /^[a-zA-Z\s]*$/;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format!";
    }

    // reEmail
    if (!values.reEmail) {
      errors.reEmail = "Confirm Email is required!";
    } else if (!regex.test(values.reEmail)) {
      errors.reEmail = "Invalid email format!";
    } else if (values.reEmail !== values.email) {
      errors.reEmail = "Emails do not match!";
    }

    // pass word
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters long!";
    } else if (values.password.length > 18) {
      errors.password = "Password must be at most 18 characters long!";
    } else if (!/[A-Z]/.test(values.password)) {
      errors.password = "Password must contain at least one upper case letter!";
    } else if (!/[a-z]/.test(values.password)) {
      errors.password = "Password must contain at least one lower case letter!";
    } else if (!/[0-9\W]/.test(values.password)) {
      errors.password =
        "Password must contain at least one number or punctuation character!";
    } else if (/\s/.test(values.password)) {
      errors.password = "Password must not contain spaces!";
    } else if (/[\u0100-\uFFFF]/.test(values.password)) {
      errors.password = "Password must not contain Unicode characters!";
    }

    // rePassword
    if (!values.rePassword) {
      errors.rePassword = "Confirm Password is required!";
    } else if (values.rePassword !== values.password) {
      errors.rePassword = "Passwords do not match!";
    }

    // legalFirstName
    if (!values.legalFirstName) {
      errors.legalFirstName = "First Name is required!";
    } else if (!name.test(values.legalFirstName)) {
      errors.legalFirstName = "First Name shold containe only charaters";
    }

    // legalFirstName
    if (!values.legalMiddleName) {
      errors.legalMiddleName = "Middle Name is required!";
    } else if (!name.test(values.legalMiddleName)) {
      errors.legalMiddleName = "First Name shold containe only charaters";
    }

    // legalFirstName
    if (!values.legalLastName) {
      errors.legalLastName = "Last Name is required!";
    } else if (!name.test(values.legalLastName)) {
      errors.legalLastName = "Last Name shold containe only charaters";
    }

    // phoneNumber
    if (!values.phoneNumber) {
      errors.phoneNumber = "Phone Number is required!";
    } else if (!/^\d{10}$/.test(values.phoneNumber)) {
      errors.phoneNumber = "Invalid phone number format!";
    }

    if (!values.countryCode) {
      errors.countryCode = "Country/Region Code is required!";
    }

    if (!values.relocate || values.relocate === "SELECT ANY OPTION") {
      errors.relocate = "Please select  flexible with relocation or not";
    }

    if (!values.agreement || values.agreement === "SELECT ANY OPTION") {
      errors.agreement =
        "Please select whether you have entered into any agreement or understanding!";
    }

    if (!values.disability || values.disability === "SELECT ANY OPTION") {
      errors.disability =
        "Please indicate whether you believe you have a disability!";
    }

    if (
      !values.employmentStatus ||
      values.employmentStatus === "SELECT ANY OPTION"
    ) {
      errors.employmentStatus =
        "Please indicate  you have been employed by Nuhvin group before!";
    }

    // Validate checkbox agreement
    if (!values.checkBoxagreement) {
      errors.checkBoxagreement = "You must agree to the terms above!";
    }

    if (!values.agreeToPrivacyPolicy) {
      errors.agreeToPrivacyPolicy = "You must agree to the privacy statement!";
    }

    // if (!values.nuhvinID || values.nuhvinID === "SELECT ANY OPTION") {
    //   errors.nuhvinID = "Please select an option!";
    // }

    // if (!values.notification) {
    //   errors.notification = "Please select a notification preference!";
    // }

    if (!values.coverLetter) {
      errors.coverLetter = "Please upload your cover letter!";
    }
    if (!values.resume) {
      errors.resume = "Please upload your resume!";
    }

    if (!values.intershipType) {
      errors.intershipType = "Please select an intership type!";
    }

    setApplyJobError(errors);
    return Object.keys(errors).length <= 0 ? true : false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(applyData)) {
      const formData = new FormData();
      formData.append("resume", applyData.resume);
      //   console.log(applyData);
      formData.append("coverLetter", applyData.coverLetter);
      formData.append("email", applyData.email);
      formData.append("password", applyData.password);
      formData.append("legalFirstName", applyData.legalFirstName);
      //   formData.append("legalFirstName", applyData.legalFirstName);

      formData.append("legalMiddleName", applyData.legalMiddleName);

      formData.append("legalLastName", applyData.legalLastName);

      formData.append("phoneNumber", applyData.phoneNumber);

      formData.append("jobTitle", applyData.jobTitle);
      formData.append("countryCode", applyData.countryCode);

      formData.append("relocate", applyData.relocate);

      formData.append("agreement", applyData.agreement);

      // formData.append("jobTitle", applyData.jobTitle);

      formData.append("disability", applyData.disability);

      formData.append("employmentStatus", applyData.employmentStatus);
      formData.append("checkBoxagreement", applyData.checkBoxagreement);

      formData.append("agreeToPrivacyPolicy", applyData.agreeToPrivacyPolicy);

      formData.append("notificationJob", applyData.notificationJob);

      formData.append("nuhvinID", applyData.nuhvinID);

      formData.append("intershipType", applyData.intershipType);

      API.post("/job/apply", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((res) => {
          console.log(res?.data?.message);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      console.log("error");
      console.log(applyJobError);
    }
    // TODO: Validate and send form data to the server
  };

  return (
    <div className="job-form-card">
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
      <div className="new-job-form-card">
        <div className="apply-now-job-form-desc-main-left-card">
          <div className="career-opp">
            <span>Career Opportunities </span>
            &nbsp;
            <h3>
              {" - "} {jobTitlesss}
            </h3>
          </div>
          <div className="email-input-fileds">
            <span>Intership-Type</span>
            <div className="email-input">
              <select onChange={handleInputChange} name="intershipType">
                <option value="SELECT ANY OPTION">SELECT ANY OPTION</option>
                <option value="short-term">Short Time</option>
                <option value="long-term">Long Time</option>
              </select>
              {applyJobError?.intershipType && (
                <span className="form-error">
                  {applyJobError?.intershipType}
                </span>
              )}
            </div>
          </div>
          <div className="resume-cover-letter-card">
            <div>
              <span>Resume</span>
              <input
                type="file"
                accept="application/pdf,image/*"
                className=""
                onChange={handleFile}
              />
              {applyJobError?.resume && (
                <span className="form-error">{applyJobError?.resume}</span>
              )}
            </div>
            <div>
              <span>Cover letter</span>
              <input
                type="file"
                accept="application/pdf,image/*"
                className="coverLetter"
                onChange={handleFileCover}
              />
              {applyJobError?.coverLetter && (
                <span className="form-error">{applyJobError?.coverLetter}</span>
              )}
            </div>
          </div>
          <span className="resumr-text">
            Accepted file types: DOCX, PDF, Image and Text (MSG, PPT and XLS
            file types are not accepted for resume or cover letters)
          </span>
          {/* email */}
          <div className="email-input-fileds">
            <span>Valid Email *</span>
            <div className="email-input">
              <input
                onChange={handleInputChange}
                name="email"
                type="text"
                className=""
              />
              {applyJobError?.email && (
                <span className="form-error">{applyJobError?.email}</span>
              )}
            </div>
          </div>
          {/* re enter email */}
          <div className="email-input-fileds">
            <span>Retype Valid Email *</span>
            <div className="email-input">
              <input
                onChange={handleInputChange}
                name="reEmail"
                type="text"
                className=""
              />
              {applyJobError?.reEmail && (
                <span className="form-error">{applyJobError?.reEmail}</span>
              )}
            </div>
          </div>
          {/* password */}
          <div className="password-card">
            <span>Choose Password * </span>
            <div className="password-input-card">
              <div className="passowrd-input-btn-card">
                <input
                  onChange={handleInputChange}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className=""
                />
                <button onClick={() => setShowPassword(!showPassword)}>
                  Show
                </button>
              </div>
              {applyJobError?.password && (
                <span className="form-error">{applyJobError?.password}</span>
              )}
              <div className="describ-password">
                <ul>
                  <li>Password must be at least 8 characters long.</li>
                  <li>Password must not be longer than 18 characters.</li>
                  <li>
                    Password must contain at least one upper case and one lower
                    case letter.
                  </li>
                  <li>
                    Password must contain at least one number or punctuation
                    character.
                  </li>
                  <li>Password must not contain space or Unicode characters</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="password-card">
            <span>Re-type Password * </span>
            <div className="password-input-card">
              <div className="passowrd-input-btn-card">
                <input
                  onChange={handleInputChange}
                  name="rePassword"
                  type={secondShowPassword ? "text" : "password"}
                  className=""
                />
                <button
                  onClick={() => setSecondShowPassword(!secondShowPassword)}
                >
                  Show
                </button>
              </div>
              {applyJobError?.rePassword && (
                <span className="form-error">{applyJobError?.rePassword}</span>
              )}
            </div>
          </div>
          {/* Legal first aname */}
          <div className="email-input-fileds">
            <span>Legal First Name *</span>
            <div className="email-input">
              <input
                onChange={handleInputChange}
                name="legalFirstName"
                type="text"
                className=""
              />
              {applyJobError?.legalFirstName && (
                <span className="form-error">
                  {applyJobError?.legalFirstName}
                </span>
              )}
            </div>
          </div>
          {/* Legal Middle Name */}
          <div className="email-input-fileds">
            <span>Legal Middle Name *</span>
            <div className="email-input">
              <input
                onChange={handleInputChange}
                name="legalMiddleName"
                type="text"
                className=""
              />
              {applyJobError?.legalMiddleName && (
                <span className="form-error">
                  {applyJobError?.legalMiddleName}
                </span>
              )}
            </div>
          </div>
          {/* Legal Last Name * */}
          <div className="email-input-fileds">
            <span>Legal Last Name *</span>
            <div className="email-input">
              <input
                onChange={handleInputChange}
                name="legalLastName"
                type="text"
                className=""
              />
              {applyJobError?.legalLastName && (
                <span className="form-error">
                  {applyJobError?.legalLastName}
                </span>
              )}
            </div>
          </div>
          {/* selected option */}
          <div className="email-input-fileds">
            <span>Country/Region Code:*</span>
            <div className="email-input">
              <select onChange={handleInputChange} name="countryCode">
                <option value="SELECT ANY OPTION">SELECT ANY OPTION</option>
                <option value="yes">+91</option>
                <option value="no">+23</option>
              </select>
              {applyJobError?.countryCode && (
                <span className="form-error">{applyJobError?.countryCode}</span>
              )}
            </div>
          </div>
          {/* phone  */}
          <div className="email-input-fileds">
            <span>Phone Number:*</span>
            <div className="email-input">
              <input
                onChange={handleInputChange}
                name="phoneNumber"
                type="text"
                className=""
              />
              {applyJobError?.phoneNumber && (
                <span className="form-error">{applyJobError?.phoneNumber}</span>
              )}
            </div>
          </div>
          {/*  */}
          <div className="email-input-fileds">
            <span>
              Are you flexible with relocating across different countries?*
            </span>
            <div className="email-input">
              <select onChange={handleInputChange} name="relocate">
                <option value="SELECT ANY OPTION">SELECT ANY OPTION</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              {applyJobError?.relocate && (
                <span className="form-error">{applyJobError?.relocate}</span>
              )}
            </div>
          </div>
          {/*  */}
          <div className="email-input-fileds">
            <span>
              Have you entered into any agreement or understanding that will in
              any way prevent you from joining Nuhvin or from fully performing
              the services required by the position for which you are applying?*
            </span>
            <div className="email-input">
              <select onChange={handleInputChange} name="agreement">
                <option value="SELECT ANY OPTION">SELECT ANY OPTION</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              {applyJobError?.agreement && (
                <span className="form-error">{applyJobError?.agreement}</span>
              )}
            </div>
          </div>
          {/*  */}
          <div className="email-input-fileds">
            <span>
              If you believe you have a disability as defined above, please
              Indicate by making the appropriate selection below.*
            </span>
            <div className="email-input">
              <select onChange={handleInputChange} name="disability">
                <option value="SELECT ANY OPTION">SELECT ANY OPTION</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>

              {applyJobError?.disability && (
                <span className="form-error">{applyJobError?.disability}</span>
              )}
              <p>
                I understand that neither this application nor any subsequent
                offer of employment creates a contract of employment, either
                express or implied, and that any employment I may obtain with
                Nuhvin will be at will, meaning it may be terminated at any time
                and for any reason, with or without cause.
              </p>
              <div className="check-box-card">
                <input
                  type="checkbox"
                  name="checkBoxagreement"
                  checked={applyData.checkBoxagreement}
                  onChange={handleCheckboxChange}
                />
                <label>I agree to the above</label>
              </div>
              {applyJobError.checkBoxagreement && (
                <span className="form-error">
                  {applyJobError.checkBoxagreement}
                </span>
              )}
            </div>
          </div>

          <div className="email-input-fileds">
            <span>Have you been employed by Nuhvin group before?*</span>
            <div className="email-input">
              <select onChange={handleInputChange} name="employmentStatus">
                <option value="SELECT ANY OPTION">SELECT ANY OPTION</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              {applyJobError?.employmentStatus && (
                <span className="form-error">
                  {applyJobError.employmentStatus}
                </span>
              )}
            </div>
          </div>
          {/*  */}

          <div className="email-input-fileds">
            {applyData.employmentStatus === "yes" && (
              <>
                <span>
                  If so, what was your Nuhvin ID? How do you identify*
                </span>
              </>
            )}
            <div className="email-input">
              {applyData.employmentStatus === "yes" && (
                <>
                  <select onChange={handleInputChange} name="nuhvinId">
                    <option value="SELECT ANY OPTION">SELECT ANY OPTION</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  {applyJobError?.nuhvinId && (
                    <span className="form-error">
                      {applyJobError?.nuhvinId}
                    </span>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="term-asdfds">
            <p>
              Nuhvin is processing your personal data to allow you to create a
              profile in our recruitment platform and manage your applications.
              For more information on how the data is processed and to learn how
              to exercise your rights, please read our Data Privacy Notice.
            </p>
            <p>
              We value your potential and we wish to keep your data on file to
              help you find the best position for you. If you do not wish your
              data to be processed you can delete your profile at any time from
              your profile settings or please contact the Local Data Protection
              team.
            </p>
            <div className="check-box-card">
              <input
                type="checkbox"
                name="agreeToPrivacyPolicy"
                checked={applyData.agreeToPrivacyPolicy}
                onChange={handleCheckboxChange}
              />
              <label>
                By clicking on apply you agree with the above statement
              </label>
            </div>
            {applyJobError.agreeToPrivacyPolicy && (
              <span className="form-error">
                {applyJobError.agreeToPrivacyPolicy}
              </span>
            )}
          </div>

          <div className="email-input-fileds">
            <span>Notification </span>
            <div className="email-input">
              <div className="check-box-card">
                <input
                  checked={applyData.notification}
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  id="notification-two"
                  name="notificationJob"
                />
                <label htmlFor="notification-two">
                  Receive new job posting notifications
                </label>
              </div>
              <div className="check-box-card">
                <input
                  checked={applyData.notification}
                  onChange={handleCheckboxChange}
                  type="checkbox"
                  id="notification-one"
                  name="notificationEvent"
                />
                <label htmlFor="notification-one">
                  I consent to Nuhvin Group sharing communications about events
                  and webinars with me
                </label>
              </div>
              {applyJobError.notification && (
                <span className="form-error">{applyJobError.notification}</span>
              )}
            </div>
          </div>
          <p>
            Privacy Notice:* Click to read and acknowledge the privacy notice
          </p>
          <div className="btn-card">
            <button onClick={handleSubmit}>Apply Now</button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
