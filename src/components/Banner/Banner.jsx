import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <section className="banner-area">
      <div className="banner-image">
        <Link
          className="d-none"
          to="https://blog.ibtapps.com/hubfs/apibanking.jpg"
        >
          copyright
        </Link>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="banner-content pe-4">
              <h1>
                Welcome to <span className="text-theme">API Banking</span>
              </h1>
              <p>
                API Banking is a revolutionary way to access and manage your
                financial information and transactions. Our robust API platform
                provides seamless integration with your bank accounts, allowing
                you to harness the power of modern technology for all your
                banking needs. With API Banking, you can securely retrieve
                account balances, track transactions, initiate payments, and
                much more, all through a user-friendly interface or by
                integrating our APIs into your own applications. Whether you're
                a developer looking to create innovative financial solutions or
                a consumer wanting to simplify your banking experience, API
                Banking has you covered. Our platform adheres to the highest
                security standards, ensuring that your financial data remains
                private and protected. Your trust and security are our top
                priorities. Explore the endless possibilities of API Banking and
                take control of your finances like never before. Join us on this
                journey of convenience, efficiency, and innovation in the world
                of banking.
              </p>
              <div className="cta-btn">
                <Link to="/">Get Started</Link>
              </div>
              &nbsp; &nbsp; &nbsp;
              <div className="contact-btn">
                <Link to="/">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
