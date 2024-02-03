// Footer.js
import React from "react";
import titanFooter from "../images/titanFooter.png";
import { FaRegQuestionCircle } from "react-icons/fa";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="left columns">
          <ul className="footer-col">
            {props.firstColFooterTitles.map((item, index) => (
              <li key={index} className="no-list-style">
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>

          <ul className="footer-col">
            {props.secondColFooterTitles.map((item, index) => (
              <li key={index} className="no-list-style">
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="right">
          <p>Subscribe to our newsletter</p>
          <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              value=""
              className="formholder"
            />
            <button type="submit">Enter</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-download">
          <img src={titanFooter} alt="Titan Logo" className="Footer-logo" />
          <p>DOWNLOAD THE APP</p>
        </div>

        <div>
          <p className="help-text">
            <FaRegQuestionCircle className="question-icon" />
            Help
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
