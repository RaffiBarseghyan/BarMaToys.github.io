import React from "react";
import style from "./footer.module.scss";
import FacebookLogo from "../../assets/images/FacebookLogo.png";
import TwitterLogo from "../../assets/images/TwitterLogo.png";
import TIKTOK from "../../assets/images/TIKTOK.png";
import InstagramLogo from "../../assets/images/InstagramLogo.png";
import YouTubeLogo from "../../assets/images/YouTubeLogo.png";
import Accordion from "react-bootstrap/Accordion";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <div className={`${style.footerBg} `}>
        <Accordion
          defaultActiveKey={["0"]}
          alwaysOpen
          className={style.AccordionBody}
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header className={style.accordionHeader}>
              {t("Help")}
            </Accordion.Header>
            <Accordion.Body>
              <div className={`${style.price} d-flex`}>
                <ul className={style.helpUl}>
                  <li>{t("ContactUs")}</li>
                  <li>{t("HelpCentre")}</li>
                  <li>{t("ProductSafetyNotices")}</li>
                  <li>{t("Returns")}</li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header className={style.accordionHeader}>
              {t("AboutTheEntertainer")}
            </Accordion.Header>
            <Accordion.Body>
              <div className={`${style.price} d-flex`}>
                <ul className={style.helpUl}>
                  <li>AboutUs </li>
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header className={style.accordionHeader}>
              {t("Useful links")}
            </Accordion.Header>
            <Accordion.Body>
              <div className={`${style.price} d-flex`}>
                <ul className={style.helpUl}>
                  
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header className={style.accordionHeader}>
              {t("Other Information")}
            </Accordion.Header>
            <Accordion.Body>
              <div className={`${style.price} d-flex`}>
                <ul className={style.helpUl}>
                  
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className={style.displayNone}>
          <h3>{t("Help")}</h3>
          <ul className={style.helpUl}>
            <li>{t("ContactUs")}</li>
            <li>{t("HelpCentre")}</li>
            <li>{t("ProductSafetyNotices")}</li>
            <li>{t("Returns")}</li>
          </ul>
        </div>
        <div className={style.displayNone}>
          <h3>{t("AboutTheEntertainer")}</h3>
          <ul className={style.helpUl}>
            <li>AboutUs</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className={style.displayNone}>
          <h3>Useful links</h3>
        </div>
        <div className={style.displayNone}>
          <h3>Other Information</h3>
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
