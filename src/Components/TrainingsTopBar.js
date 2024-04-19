import React ,{useState}from "react";
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
import styles from "../styles/TrainingsStyles.module.css";
import bg from "../assets/trainings-top-bar.png";
import { useNavigate  } from 'react-router-dom';

function TrainingsTopBar() {
  const [clicked, setClicked] = useState("Home");
  const navigate = useNavigate ();
  const handleClick = (clickedItem) => {
    setClicked(clickedItem);
    navigate(`/${clickedItem}`);
  };
  return (
    <>
      <nav
        style={{
          background:
            "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
        }}
        class={`${styles.Train_top_bar} navbar navbar-expand-lg`}
      >
        <div class="container">
          <ul class="navbar-nav mx-auto gap-3">
            <li class="nav-item">
              <p className="me-2">
                <img
                  src={telephone}
                  alt="telephone"
                  className={styles.Train_top_bar_icon}
                />{" "}
                <span className={styles.Train_top_bar_phn_no}>
                  +1-323-566-7866
                </span>
              </p>
            </li>
            <li class="nav-item">
              <p className={styles.Train_top_bar_divider}>|</p>
            </li>
            <li class="nav-item">
              <p className="ms-2">
                <img src={mail} alt="mail" className="Train_top_bar_icon" />{" "}
                <span className={styles.Train_top_bar_email_text}>
                  Example@gmail.com
                </span>
              </p>
            </li>
          </ul>

          <ul class="navbar-nav gap-1 me-auto ">
            <li class="nav-item">
              <img src={fb} alt="fb" className="Train__bar_fb_icon" />
            </li>
            <li class="nav-item">
              <img
                src={linkedin}
                alt="linkedin"
                className={styles.Train_top_bar_linkedin_icon}
              />
            </li>
            <li class="nav-item">
              <img src={insta} alt="insta" className="Train__bar_insta_icon" />
            </li>
            <li class="nav-item">
              <img
                src={twitter}
                alt="twitter"
                className={styles.Train_top_bar_twitter_icon}
              />
            </li>
          </ul>

          <button className={styles.Train_top_bar_get_quota_btn}>
            Get Quote
          </button>
        </div>
      </nav>
      <img
        src={divider}
        alt="divider"
        style={{ marginTop: "0.95%", background: "unset", marginBottom: "0px" }}
      />

      <div
        style={{
          backgroundImage: `url(${bg})`,
          width: "100%",
          height: "80%",
          marginTop: "-3.3%",
        }}
      >
        <div className="d-flex">
          <img className={styles.Train_logo} src={logo} alt="logo" />
          {/* <div className={styles.Train_menu_list}>
            <p className={styles.Train_home}>Home</p>
            <p className={styles.Train_other_menues}>Services</p>
            <p className={styles.Train_other_menues}>Trainucts</p>
            <p className={styles.Train_other_menues}>Training</p>
            <p className={styles.Train_other_menues}>Our Partner</p>
            <p className={styles.Train_other_menues}>Gallery</p>

            <p className={styles.Train_other_menues}>About Us</p>

            <p className={styles.Train_other_menues}>Contact Us</p>
          </div> */}
          <div className="menu-list mt-5">
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
          <p className={`${clicked === "trainings"
              ? "other-menues-active"
              : "other-menues"
            }`} onClick={() => {
              handleClick("trainings");
            }}>Trainings</p>
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

          <button className={styles.Train_signup_btn}>
            {" "}
            <p className={styles.Train_signup_text}>signup</p>
          </button>

          <button className={styles.Train_login_btn}>
            <p className={styles.Train_login_text}>login</p>
          </button>
        </div>
        <div
          className={`${styles.Train_top_bar_text} d-flex justify-content-center`}
        >
          Training
        </div>
      </div>
    </>
  );
}

export default TrainingsTopBar;
