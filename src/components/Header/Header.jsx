import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo/logo.png";

const Header = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClassName = isHeaderFixed
    ? "header-area header-fixed"
    : "header-area";

  const [menuBtn, setMenuBtn] = useState(false);

  let mobileMenu;
  if (menuBtn) {
    mobileMenu = (
      <div class="mobileNavbar flex d-flex">
        <div className="navLink">
          <div className="socialLinks">
            <ul>
              <li>
                <Link to="/accounts">Accounts</Link>
              </li>
              <li>
                <Link to="/transactions">Transactions</Link>
              </li>
              <li>
                {" "}
                {isHeaderFixed ? (
                  <Link to="/user">Profile</Link>
                ) : (
                  <Link to="/user/login/">Login</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <header className={headerClassName}>
        <div className="container">
          <div className="row align-items-center justify-content-between py-2">
            <div className="col-3">
              <div className="header-logo">
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
            </div>
            <div className="col-xl-6 col-lg-6 d-lg-block d-none text-end">
              <div className="navLink">
                <div className="socialLinks">
                  <ul>
                    <li>
                      <Link to="/api-tools">Tool &amp; API</Link>
                    </li>
                    <li>
                      <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                      {" "}
                      {isHeaderFixed ? (
                        <Link to="/user">Profile</Link>
                      ) : (
                        <Link to="/user/login/">Login</Link>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6 d-lg-none d-block text-end">
              <button
                onClick={() => setMenuBtn(!menuBtn)}
                class="mobileMenuBtn"
              >
                <span class="bar1"></span>
                <span class="bar2"></span>
                <span class="bar3"></span>
              </button>
            </div>
            <div className="col-12">{mobileMenu}</div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
