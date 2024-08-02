import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { IoEarthOutline } from "react-icons/io5";
const Header = () => {
  const [backgroundColor, setBackgroundColor] = useState("#0c1a1a"); // default background color
  const [hamborIcons, setHamborIcons] = useState(false);
  const [imagePath, setImagePath] = useState("/images/Frame 12.png");
  const scrollThreshold = window.innerHeight;
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 50;
      if (scrollPosition >= scrollThreshold) {
        setBackgroundColor("#fff"); // change to desired background color
        setImagePath("/images/Frame 11.png");
      } else {
        setBackgroundColor("#0c1a1a"); // reset to default background color
        setImagePath("/images/Frame 12.png");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);
  return (
    <div
      className="header"
      style={{ backgroundColor, transition: "background-color 0.3s ease" }}
    >
      <Link to="/">
        <img className="header-nav-logo-image" src={imagePath} alt="logo" />
      </Link>
      <div className="header-nav-links">
        <NavLink
          activeClassName="active"
          to="/detail-about"
          className="header-nav-links-span"
        >
          <span>ABOUT</span>
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/our-services"
          className="header-nav-links-span"
        >
          <span>SERVICES</span>
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/career"
          className="header-nav-links-span"
        >
          <span>CAREER</span>
        </NavLink>

        <NavLink
          activeClassName="active"
          to="/contact"
          className="header-nav-links-span"
        >
          <span>CONTACT US</span>
        </NavLink>
        <span className="nav-item">
          <IoEarthOutline size={20} color="grey" />
          <ul className="dropdown">
            <li>
              <a
                href="https://www.google.com/maps/place/NUHVIN+GLOBAL+SERVICES+PRIVATE+LIMITED/@17.4585424,78.3706689,15z/data=!4m14!1m7!3m6!1s0x3bcb93284577c9fb:0x4e9f4234ca3ad9df!2sNUHVIN+GLOBAL+SERVICES+PRIVATE+LIMITED!8m2!3d17.4585424!4d78.3706689!16s%2Fg%2F11y30_pzm3!3m5!1s0x3bcb93284577c9fb:0x4e9f4234ca3ad9df!8m2!3d17.4585424!4d78.3706689!16s%2Fg%2F11y30_pzm3?entry=ttu"
                target="__black"
              >
                Nuhvin-Hyderabad
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/place/SDVVL+SURVEY+AND+CONSTRUCTION+PRIVATE+LIMITED/@16.9936696,82.2424375,15z/data=!4m15!1m7!3m6!1s0x3a3829e58b0ecd67:0xcfd5b94f9a94ec07!2sSDVVL+SURVEY+AND+CONSTRUCTION+PRIVATE+LIMITED!8m2!3d16.9936696!4d82.2424375!16s%2Fg%2F11s3bbq5tp!3m6!1s0x3a3829e58b0ecd67:0xcfd5b94f9a94ec07!8m2!3d16.9936696!4d82.2424375!10e2!16s%2Fg%2F11s3bbq5tp?entry=ttu"
                target="__black"
              >
                Nuhvin-Kakinada
              </a>
            </li>
          </ul>
        </span>
      </div>
      {/* mobile */}
      <div className="mobile-ham-icons">
        {hamborIcons ? (
          <RxCross1
            onClick={() => setHamborIcons(!hamborIcons)}
            size={25}
            color="grey"
          />
        ) : (
          <RxHamburgerMenu
            onClick={() => setHamborIcons(!hamborIcons)}
            size={25}
            color="grey"
          />
        )}
      </div>
      {hamborIcons && (
        <div className="mobile-header-link">
          <NavLink
            activeClassName="active"
            onClick={() => setHamborIcons(!hamborIcons)}
            to="/detail-about"
            className="header-nav-links-span"
          >
            <span>ABOUT</span>
          </NavLink>
          <NavLink
            activeClassName="active"
            onClick={() => setHamborIcons(!hamborIcons)}
            to="/our-services"
            className="header-nav-links-span"
          >
            <span>SERVICES</span>
          </NavLink>
          <NavLink
            activeClassName="active"
            onClick={() => setHamborIcons(!hamborIcons)}
            to="/career"
            className="header-nav-links-span"
          >
            <span>CAREER</span>
          </NavLink>
          {/* <NavLink
            activeClassName="active"
            onClick={() => setHamborIcons(!hamborIcons)}
            className="header-nav-links-span"
          >
            <span>HOME</span>
          </NavLink> */}
          <NavLink
            activeClassName="active"
            onClick={() => setHamborIcons(!hamborIcons)}
            to="/contact"
            className="header-nav-links-span"
          >
            <span>CONTACT US</span>
          </NavLink>
          <span className="nav-item">
            <IoEarthOutline size={20} color="grey" />
            <ul className="dropdown">
              <li>
                <a
                  href="https://www.google.com/maps/place/NUHVIN+GLOBAL+SERVICES+PRIVATE+LIMITED/@17.4585424,78.3706689,15z/data=!4m14!1m7!3m6!1s0x3bcb93284577c9fb:0x4e9f4234ca3ad9df!2sNUHVIN+GLOBAL+SERVICES+PRIVATE+LIMITED!8m2!3d17.4585424!4d78.3706689!16s%2Fg%2F11y30_pzm3!3m5!1s0x3bcb93284577c9fb:0x4e9f4234ca3ad9df!8m2!3d17.4585424!4d78.3706689!16s%2Fg%2F11y30_pzm3?entry=ttu"
                  target="__black"
                >
                  Nuhvin-Hyderabad
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/SDVVL+SURVEY+AND+CONSTRUCTION+PRIVATE+LIMITED/@16.9936696,82.2424375,15z/data=!4m15!1m7!3m6!1s0x3a3829e58b0ecd67:0xcfd5b94f9a94ec07!2sSDVVL+SURVEY+AND+CONSTRUCTION+PRIVATE+LIMITED!8m2!3d16.9936696!4d82.2424375!16s%2Fg%2F11s3bbq5tp!3m6!1s0x3a3829e58b0ecd67:0xcfd5b94f9a94ec07!8m2!3d16.9936696!4d82.2424375!10e2!16s%2Fg%2F11s3bbq5tp?entry=ttu"
                  target="__black"
                >
                  Nuhvin-Kakinada
                </a>
              </li>
            </ul>
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;
