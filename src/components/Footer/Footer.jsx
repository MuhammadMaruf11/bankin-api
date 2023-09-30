import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footerArea">
        <div className="container pb-40 footer-border-bottom">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <Link className="footer-logo" to="/">
                <img
                  src="https://digitaldecoderltd.com/static/media/logo.695cdd6ed7de71118a90.png"
                  alt="logo"
                />
              </Link>
              <div className="footerWrapper">
                <div className="socialLinks">
                  <ul>
                    <li>
                      <Link to="/">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fab fa-facebook-square"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fab fa-dribbble"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fab fa-github"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-2">
              <div className="footerWidget">
                <h6 className="titleText">useful links</h6>
                <ul>
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <Link to="/">Blog</Link>
                  </li>
                  <li>
                    <Link to="/">Github</Link>
                  </li>
                  <li>
                    <Link to="/">free Products</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-2">
              <div className="footerWidget">
                <h6 className="titleText">other resources</h6>
                <ul>
                  <li>
                    <Link to="/">MIT License</Link>
                  </li>
                  <li>
                    <Link to="/">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-30">
          <div className="row">
            <div className="col-12 text-center">
              <div className="copyRightText">
                {/* Additional information */}
                <span>
                  Copyright &copy; {new Date().getFullYear()} and All rights
                  reserved by <Link to='/'>Digital Decoder Ltd</Link>
                </span>
                <br />
                <span>Privacy Policy | Terms of Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
