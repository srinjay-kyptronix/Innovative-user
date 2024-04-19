import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import styles from "../styles/GalleryStyles.module.css";
import gallery1 from "../assets/gallery-1.png";
import gallery2 from "../assets/gallery-2.png";
import gallery3 from "../assets/gallery-3.png";
import gallery4 from "../assets/gallery-4.png";


function GalleryMain() {
  const totalNoData = 10;

  const [clicked, setClicked] = useState("Engineering");
  const [images, setImages] = useState([gallery1, gallery2, gallery3, gallery4,gallery1, gallery2, gallery3, gallery4,gallery1, gallery2]);

  const handleClick = (clickedItem) => {
    setClicked(clickedItem);
  };
  
  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "10%" }}
      >
        <div
          className={`${clicked === "Engineering"
            ? `${styles.Gallery_main_btns_active} `
            : `${styles.Gallery_main_btns}`
            }`}
          onClick={() => {
            handleClick("Engineering");
          }}
        >
          <div
            className={`${clicked === "Engineering"
              ? `${styles.Gallery_main_btns_text_active} `
              : `${styles.Gallery_main_btns_text}`
              }`}
          >
            Engineering
          </div>
        </div>
        <div
          className={`${clicked === "Automations1"
            ? `${styles.Gallery_main_btns_active} `
            : `${styles.Gallery_main_btns}`
            } ms-5`}
          onClick={() => {
            handleClick("Automations1");
          }}
        >
          <div
            className={`${clicked === "Automations1"
              ? `${styles.Gallery_main_btns_text_active} `
              : `${styles.Gallery_main_btns_text}`
              }`}
          >
            Automations1
          </div>
        </div>
        <div
          className={`${clicked === "Automations2"
            ? `${styles.Gallery_main_btns_active}  `
            : `${styles.Gallery_main_btns}`
            } ms-5`}
          onClick={() => {
            handleClick("Automations2");
          }}
        >
          <div
            className={`${clicked === "Automations2"
              ? `${styles.Gallery_main_btns_text_active} `
              : `${styles.Gallery_main_btns_text}`
              }`}
          >
            Automations2
          </div>
        </div>
        <div
          className={`${clicked === "Automations3"
            ? `${styles.Gallery_main_btns_active}`
            : `${styles.Gallery_main_btns}`
            } ms-5`}
          onClick={() => {
            handleClick("Automations3");
          }}
        >
          <div
            className={`${clicked === "Automations3"
              ? `${styles.Gallery_main_btns_text_active} `
              : `${styles.Gallery_main_btns_text}`
              }`}
          >
            Automations3
          </div>
        </div>
      </div>
      {clicked === "Engineering" && (
        <>
          <div
            className="d-flex justify-content-center"
            style={{ marginTop: "10%" }}
          >


            <div className={`${styles.mainWrapper} d-flex`}>
              
              <div style={{ display: "inline-flex", flexDirection: "column", borderRadius: '32px' }} >
                <div
                className={styles.hoverEffect}
                  style={{
                    margin: "10px",
                    overflow: 'hidden',
                    flexGrow: 1,
                    borderRadius: '32px'
                  }}
                >
                   {/* <div ref={container}> */}
                  <img
                    // ref={imgRef1}
                    // onClick={()=>{handleMouseEnter(2)}}
                    // onMouseLeave={handleMouseLeave}
                    className={`${styles.Gallery_img} good-2`}
                    src={gallery2}
                    alt="g1"
                  />
                  {/* </div> */}
                </div>

                <div
                  // ref={divRef1}
                  style={{
                    marginLeft: "10px",
                    // display: "none",
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.53) 42.71%, #000 80.63%)',
                    width: '300px',
                    height: '143px',
                    marginTop: '-47%',
                    borderRadius: "24px",
                    zIndex: 1000
                  }}
                  className={styles.divRef}
                >
                  <div className={`${styles.Gallery_li} ms-3`}>
                    Lorem Ipsum
                  </div>
                </div>
              </div>

            </div>
          </div>
        </>
      )}
    </>
  );
}

export default GalleryMain;
