import React from "react";
import style from "./footer.module.scss";
import FacebookLogo from "../../assets/images/FacebookLogo.png";
import TwitterLogo from "../../assets/images/TwitterLogo.png";
import TIKTOK from "../../assets/images/TIKTOK.png";
import InstagramLogo from "../../assets/images/InstagramLogo.png";
import YouTubeLogo from "../../assets/images/YouTubeLogo.png";

function Footer() {
  return (
    <>
      <div className={`${style.footerBg} d-flex align-items-center justify-content-evenly`}>
        <div>
          <h3>Help</h3>
          ul*
        </div>
        <div>
          <h3>About The Entertainer</h3>
        </div>
        <div>
          <h3>Useful links</h3>
        </div>
        <div>
          <h3>Other Information</h3>
        </div>
        <div className={style.follow}>
          <h3>Follow us on</h3>
          <img src={FacebookLogo} alt="" />
          <img src={TwitterLogo} alt="" />
          <img src={TIKTOK} alt="" />
          <img src={InstagramLogo} alt="" />
          <img src={YouTubeLogo} alt="" />
        </div>
      </div>
    </>
  );
}

export default Footer;
