import React from "react";
import "./Styles/Header&Footer.css";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaHandHoldingMedical } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          {" "}
          e-Medicines <FaHandHoldingMedical />
        </h3>

        <p className="footer-links">
          <a href="#">Home</a>|<a href="#">About</a>|<a href="#">Contact</a>|
          <a href="#">Blog</a>
        </p>

        <p className="footer-company-name">
          Copyright © 2021 <strong>Anshika Sethiya</strong> All rights reserved
        </p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>Ghaziabad</span>
            Delhi
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+91 74**9**258</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <span>
            <a style={{color:"#fff", textDecoration:"none"}} href="mailto:anshika.sethiya@yash.com">xyz@gmail.com</a>
          </span>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          <strong>e - Medicine</strong> Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="footer-icons">
          <a href="#">
            <AiOutlineFacebook />
          </a>
          <a href="#">
            <AiOutlineInstagram />
          </a>
          <a href="#">
            <AiOutlineLinkedin />
          </a>
          <a href="#">
            <AiOutlineTwitter />
          </a>
          <a href="#">
            <AiOutlineYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
