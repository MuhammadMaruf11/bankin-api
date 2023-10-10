import React from "react";
import { Link } from "react-router-dom";

const PricingPlan = () => {
  return (
    <section className="pricing-area">
      <div className="container">
        <div className="outer-box">
          <div className="row mb-3">
            <div className="col-12 text-center">
              <h2>Get a Plan</h2>
            </div>
          </div>
          <div className="row">
            <div className="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
              <div className="inner-box">
                <div className="icon-box">
                  <div className="icon-outer">
                    <i className="fas fa-paper-plane"></i>
                  </div>
                </div>
                <div className="price-box">
                  <div className="title"> Day Pass</div>
                  <h4 className="price">$35.99</h4>
                </div>
                <ul className="features">
                  <li className="true">Conference plans</li>
                  <li className="true">Free Lunch And Coffee</li>
                  <li className="true">Certificate</li>
                  <li className="false">Easy Access</li>
                  <li className="false">Free Contacts</li>
                </ul>
                <div className="btn-box">
                  <Link
                    to="https://codepen.io/anupkumar92"
                    className="theme-btn"
                  >
                    BUY plan
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                  <div className="icon-outer">
                    <i className="fas fa-gem"></i>
                  </div>
                </div>
                <div className="price-box">
                  <div className="title">Full Pass</div>
                  <h4 className="price">$99.99</h4>
                </div>
                <ul className="features">
                  <li className="true">Conference plans</li>
                  <li className="true">Free Lunch And Coffee</li>
                  <li className="true">Certificate</li>
                  <li className="true">Easy Access</li>
                  <li className="false">Free Contacts</li>
                </ul>
                <div className="btn-box">
                  <a
                    href="https://codepen.io/anupkumar92"
                    className="theme-btn"
                  >
                    BUY plan
                  </a>
                </div>
              </div>
            </div>

            <div
              className="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="800ms"
            >
              <div className="inner-box">
                <div className="icon-box">
                  <div className="icon-outer">
                    <i className="fas fa-rocket"></i>
                  </div>
                </div>
                <div className="price-box">
                  <div className="title">Group Pass</div>
                  <h4 className="price">$199.99</h4>
                </div>
                <ul className="features">
                  <li className="true">Conference plans</li>
                  <li className="true">Free Lunch And Coffee</li>
                  <li className="true">Certificate</li>
                  <li className="true">Easy Access</li>
                  <li className="true">Free Contacts</li>
                </ul>
                <div className="btn-box">
                  <Link to="/" className="theme-btn">
                    BUY plan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
