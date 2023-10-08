import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo/logo.png";

const Footer = () => {
  return (
    <>
      <div className="footerArea">
        <div className="container pb-40 footer-border-bottom">
          <div className="row">
            <div className="col-xl-4 col-lg-4 ">
              <div className="header-logo mb-3">
                <Link
                  className="d-none"
                  to="https://fbs-tax.com/wp-content/uploads/2020/02/1553262102-api.jpg"
                >
                  copyright
                </Link>
                <Link to="/">
                  <img src={Logo} alt="logo" /> Banking
                </Link>
              </div>
              <div className="footer-description ms-3 mb-3 pe-5">
                <p>
                  Discover the future of banking with API Banking. Seamlessly
                  integrate our powerful APIs into your financial solutions or
                  manage your accounts effortlessly through our user-friendly
                  interface. Experience the convenience, security, and
                  innovation that API Banking brings to your financial world.
                  Join us today and unlock a new era of banking possibilities.
                </p>
              </div>
              <div className="footerWrapper ms-3">
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
                    <Link to="/">Free Products</Link>
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
                <span>
                  Copyright &copy; {new Date().getFullYear()} and All rights
                  reserved by{" "}
                  <Link target="_blank" to="https://digitaldecoderltd.com/">
                    Digital Decoder Ltd
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
