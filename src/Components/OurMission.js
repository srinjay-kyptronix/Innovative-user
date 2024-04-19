import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import mail from "../assets/mail.png";
import telephone from "../assets/telephone.png";
import fb from "../assets/fb.png";
import linkedin from "../assets/linkedin.png";
import insta from "../assets/insta.png";
import twitter from "../assets/twitter.png";
import divider from "../assets/divider.png";
import logo from "../assets/logo.png";
import "../styles/HomeStyles.css";
import mission from "../assets/mission.png";
import shadow from "../assets/shadow.png";
import gsap from "gsap";
// import smallArrow from "../assets/small-arrow.png";
import { useNavigate  } from 'react-router-dom';


function OurMission() {
  const [clicked, setClicked] = useState("Home");
  const navigate = useNavigate ();
  const buttonRef = useRef(null);

  // const buttonRef4 = useRef(null);

  const timeline = useRef(gsap.timeline());
  const timeline2 = useRef(gsap.timeline());

  const handleFirstLMMouseEnter = () => {
    timeline.current.to(buttonRef.current, {
      width: "160px",
      ease: "linear",
      duration: 1,
    });

    timeline.current.play();

    timeline2.current.to(buttonRef.current, {
      width: "160px",
      background: "linear-gradient(to top left,#2589D2 100%, #2DC2E3 100%)",
      duration: 1,
    });
    timeline2.current.play();
  };

  const handleFirstLMMouseLeave = () => {
    timeline.current.reverse();
    timeline2.current.reverse();
  };

  const handleClick = (clickedItem) => {
    setClicked(clickedItem);
    navigate(`/${clickedItem}`);
  };

  return (
    <>
      <nav class="top_bar navbar navbar-expand-lg  ">
        <div class="container">
          <ul class="navbar-nav mx-auto gap-3">
            <li class="nav-item">
              <p className="me-2">
                <img src={telephone} alt="telephone" className="top_bar_icon" />{" "}
                <span className="top_bar_phn_no">+1-323-566-7866</span>
              </p>
            </li>
            <li class="nav-item">
              <p className="top_bar_divider">|</p>
            </li>
            <li class="nav-item">
              <p className="ms-2">
                <img src={mail} alt="mail" className="top_bar_icon" />{" "}
                <span className="top_bar_email_text">Example@gmail.com</span>
              </p>
            </li>
          </ul>

          <ul class="navbar-nav gap-1 me-auto ">
            <li class="nav-item">
              <img src={fb} alt="fb" className="top_bar_fb_icon" />
            </li>
            <li class="nav-item">
              <img
                src={linkedin}
                alt="linkedin"
                className="top_bar_linkedin_icon"
              />
            </li>
            <li class="nav-item">
              <img src={insta} alt="insta" className="top_bar_insta_icon" />
            </li>
            <li class="nav-item">
              <img
                src={twitter}
                alt="twitter"
                className="top_bar_twitter_icon"
              />
            </li>
          </ul>

          <button className="top_bar_get_quota_btn">Get Quote</button>
        </div>
      </nav>
      <img
        style={{ marginTop: "0.3%", marginBottom: "0px" }}
        src={divider}
        alt="divider"
      />

      <div className="d-flex">
        <img className="logo" src={logo} alt="logo" />
        <div className="menu-list">
          <p className={`${clicked === "home"
              ? "home-menue-active"
              : "home-menue"
            }`}
            onClick={() => {
              handleClick("home");
              
            }}>Home</p>

          <p className={`${clicked === "services"
              ? "other-menues-active"
              : "other-menues"
            }`} onClick={() => {
              handleClick("services");
            }}>Services</p>
          <p className={`${clicked === "products"
              ? "other-menues-active"
              : "other-menues"
            }`} onClick={() => {
              handleClick("products");
            }}>Products</p>
          <p className={`${clicked === "training"
              ? "other-menues-active"
              : "other-menues"
            }`} onClick={() => {
              handleClick("training");
            }}>Training</p>
          <p className={`${clicked === "partners"
              ? "other-menues-active"
              : "other-menues"
            }`} onClick={() => {
              handleClick("partners");
            }}>Our Partners</p>
          <p className={`${clicked === "gallery"
              ? "other-menues-active"
              : "other-menues"
            }`} onClick={() => {
              handleClick("gallery");
            }}>Gallery</p>
          <p className={`${clicked === "aboutus"
              ? "other-menues-active"
              : "other-menues"
            }`} onClick={() => {
              handleClick("aboutus");
            }}>About Us</p>
          <p className={`${clicked === "contactus"
              ? "other-menues-active"
              : "other-menues"
            }`} onClick={() => {
              handleClick("contactus");
            }}>Contact Us</p>
        </div>

        <button className="signup-btn">Sign up</button>

        <button className="login-btn">Login</button>
      </div>

      <div className="our-mission-btn">
        <p className="our-mission-text">Our Mission</p>
      </div>

      <div className="d-flex">
        <div className="our-mission-div">
          <div className="our-mission-heading mt-3">
            Empower Your Learning Journey with INNOVATIVE Quality Tech Limited
          </div>
          <div className="our-mission-main">
            Step into a world where exam preparation meets innovation. Our
            cutting-edge platform redefines the learning experience, offering
            comprehensive resources and a user-friendly interface to help you
            achieve your goals effectively. Welcome to the future of education.
          </div>
          <div
            className="our-mission-learn-more-btn"
            ref={buttonRef}
            onMouseEnter={handleFirstLMMouseEnter}
            onMouseLeave={handleFirstLMMouseLeave}
          >
            <p className="our-mission-learn-more-text">
              learn more{" "}
              <span>
                {/* <img
                  alt="smarrow"
                  src={smallArrow}
                  style={{
                    width: "1px",
                    height: " 9px",
                    fill: "red",
                  }}
                /> */}
              </span>
            </p>
          </div>
        </div>

        <div className="our-mission-img">
          <div className="our-mission-main-image-bg"> </div>
          <div style={{ marginTop: "-415px" }}>
            <img
              className="our-mission-main-image"
              src={mission}
              alt="mission"
            />
            <img className="our-mission-shadow" src={shadow} alt="shadow" />
          </div>
        </div>
      </div>
    </>
  );
}

export default OurMission;
