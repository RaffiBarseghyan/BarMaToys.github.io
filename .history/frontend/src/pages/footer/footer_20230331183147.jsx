import React from "react";
import style from "./footer.module.scss";
import FacebookLogo from "../../assets/images/FacebookLogo.png";
import TwitterLogo from "../../assets/images/TwitterLogo.png";
import TIKTOK from "../../assets/images/TIKTOK.png";
import InstagramLogo from "../../assets/images/InstagramLogo.png";
import YouTubeLogo from "../../assets/images/YouTubeLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer() {
  return (
    <>
      <div className={`${style.footerBg} `}>
        <div>
          <h3>Help <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/></svg></h3>
          <ul className={style.helpUl}>
            <li>Contact Us</li>
            <li>Help Centre</li>
            <li>Product Safety Notices</li>
            <li>Returns</li>
          </ul>
        </div>
        <div>
          <h3>About The Entertainer</h3>
          <ul>
            <li>About us</li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <h3>Useful links</h3>
        </div>
        <div>
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
