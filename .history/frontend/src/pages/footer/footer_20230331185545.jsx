import React from "react";
import style from "./footer.module.scss";
import FacebookLogo from "../../assets/images/FacebookLogo.png";
import TwitterLogo from "../../assets/images/TwitterLogo.png";
import TIKTOK from "../../assets/images/TIKTOK.png";
import InstagramLogo from "../../assets/images/InstagramLogo.png";
import YouTubeLogo from "../../assets/images/YouTubeLogo.png";

import { FaBeer1, FaCaretDown } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className={`${style.footerBg} `}>

      <Accordion
            defaultActiveKey={["0"]}
            alwaysOpen
            style={{ minWidth: "350px", marginTop: "50px" }}
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header className={style.accordionHeader}>
                {t("Price")}
              </Accordion.Header>
              <Accordion.Body>
                <div className={`${style.price} d-flex`}>
                  <input
                    onChange={priceMinval}
                    name="priceMin"
                    value={priceMin}
                    placeholder={t("from")}
                    type="number"
                    min={1}
                    onWheel={(e) => e.target.blur()}
                  />
                  <input
                    className="ms-2"
                    onChange={priceMaxval}
                    name="priceMax"
                    value={priceMax}
                    placeholder={t("to")}
                    type="number"
                    min={priceMin}
                    onWheel={(e) => e.target.blur()}
                  />
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <
        <div>
          <h3 className={style.faCaretUp}>
            <label htmlFor="1">
              Help <FaCaretDown style={{ color: "#ffffff" }} />
            </label>
          </h3>

          <input className={style.input1} type="checkbox" id="1" hidden />
          <ul className={style.helpUl}>
            <li>Contact Us</li>
            <li>Help Centre</li>
            <li>Product Safety Notices</li>
            <li>Returns</li>
          </ul>
        </div>
        <div>
          <h3>
            About The Entertainer
            <FaCaretDown
              className={style.faCaretUp1}
              style={{ color: "#ffffff" }}
            />
          </h3>
          <ul>
            <li>
              About us{" "}
              <FaCaretDown
                className={style.faCaretUp1}
                style={{ color: "#ffffff" }}
              />
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <h3>
            Useful links{" "}
            <FaCaretDown
              className={style.faCaretUp1}
              style={{ color: "#ffffff" }}
            />
          </h3>
        </div>
        <div>
          <h3>
            Other Information{" "}
            <FaCaretDown
              className={style.faCaretUp1}
              style={{ color: "#ffffff" }}
            />
          </h3>
        </div>
        <div className={style.follow}>
          <h3>Follow us on</h3>
          <div>
            <a href="https://www.facebook.com/" target={"_blank"}>
              <img src={FacebookLogo} alt="" />
            </a>
            <a href="https://twitter.com/" target={"_blank"}>
              <img src={TwitterLogo} alt="" />
            </a>
            <a href="https://tiktok.com/" target={"_blank"}>
              <img src={TIKTOK} alt="" />
            </a>
            <a href="https://instagram.com/" target={"_blank"}>
              <img src={InstagramLogo} alt="" />
            </a>
            <a href="https://youtube.com/" target={"_blank"}>
              <img src={YouTubeLogo} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
