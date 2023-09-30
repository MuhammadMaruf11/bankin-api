import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
                </ul>
              </div>
            </div>
          </div>
        );

    }

    return (
      <>
            <header className={headerClassName + " border-bottom"}>
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-2 col-3">
                <Link to="/">
                  <img
                    src="https://digitaldecoderltd.com/static/media/logo.695cdd6ed7de71118a90.png"
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="col-xl-6 col-lg-6 d-lg-block d-none text-end">
                <div className="navLink">
                  <div className="socialLinks">
                    <ul>
                      <li>
                        <Link to="/accounts">Accounts</Link>
                      </li>
                      <li>
                        <Link to="/transactions">Transactions</Link>
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
