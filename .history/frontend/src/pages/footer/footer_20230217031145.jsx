import React from "react";
import style from "./footer.module.scss";
import FacebookLogo from "../../assets/images/FacebookLogo"

function Footer() {
  return (
    <>
      <div className={style.footerBg}>
        <div>
          <h3>Help</h3>
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
        <div>
          <h3>Follow us on</h3>
            
        </div>
      </div>
    </>
  );
}

export default Footer;
