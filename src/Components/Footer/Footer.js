import React from "react";
import footerImg from "../img/favicon1.ico";

function Footer() {
  return (
    <div className="footer d__flex align__items__center justify__content__space__between pz-10" style={{ padding: "10px 20px", zIndex: "100", backgroundColor:'#191919'}}>
     
      <img src={footerImg} alt="" className="footer__img pointer" style={{ width: "50px", height: "50px", borderRadius: "20px" }}/>
      <span className="copyright" style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}>
       MY LOCATION:- <b style={{color:'white'}}>Hapur, Uttar Pradesh, India.</b> PINCODE:- <b style={{color:'white'}}>245101</b>
      </span>
      <span className="copyright" style={{ color: "#c6c9d8", fontSize: "14px", opacity: "0.75" }}>
        Copyright © 2022 Programmer Vanshaj Mittal. All Rights Reserved.
      </span>
      
    </div>
  );
}

export default Footer;
