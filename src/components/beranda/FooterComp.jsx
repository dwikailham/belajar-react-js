import React from "react";
import * as AiIcons from "react-icons/ai";
import "./FooterComp.css";

const FooterComp = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Alamat</h4>
            <ul className="link-unstyled link">
              <li>Jalan Pangeran Wirosobo</li>
              <li>Sorosutan, Umbulharjo</li>
              <li>Yogyakarta City, DIY</li>
            </ul>
          </div>
          <div className="col">
            <h4>Client</h4>
            <ul className="link-unstyled">
              <li className="link">BTN</li>
              <li className="link">Octo Clicks</li>
              <li className="link">Octo Mobile</li>
            </ul>
          </div>
          <div className="col">
            <h4>Social Media</h4>
            <ul className="link-unstyled">
              <li className="link">
                <AiIcons.AiOutlineInstagram /> Instagram
              </li>
              <li className="link">
                <AiIcons.AiOutlineFacebook /> Facebook
              </li>
              <li className="link">
                <AiIcons.AiOutlineLinkedin /> LinkedIn
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="paragraph">
            &copy;{new Date().getFullYear()} dwikailham | All Right Reserved |
            Term Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
