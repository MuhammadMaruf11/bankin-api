import React from "react";
import { Link } from "react-router-dom";

function Banner({ h1Title, textTheme, bannerDescription, buttons }) {
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
                {h1Title} <span className="text-theme">{textTheme}</span>
              </h1>
              {bannerDescription ? <p>{bannerDescription}</p> : null}

              {buttons ? buttons : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
