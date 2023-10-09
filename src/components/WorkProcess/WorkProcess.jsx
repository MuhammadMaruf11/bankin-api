import React from "react";
import Arrow from "../../assets/img/arrow.png";

const WorkProcess = () => {
  return (
    <section className="work-process-area">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-xl-6 col-lg-9 text-center">
            <div className="section-title">
              <h6>Work Process</h6>
              <h2>Where your financial dreams becomer reality</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="flowchart-wrap">
              <div className="flowchart-container">
                <div className="node digital-decoder">Digital Decoder</div>{" "}
                <div className="arrow">
                  <i className="fa-sharp fa-solid fa-right-long"></i>
                </div>
                <div className="node card-holder">Card Holder</div>{" "}
                <div className="arrow">
                  <i className="fa-sharp fa-solid fa-right-long"></i>
                </div>
                <div className="node merchant-website">Merchant Website</div>{" "}
                <div className="arrow">
                  <i className="fa-sharp fa-solid fa-right-long"></i>
                </div>
                <div className="node moneris-gateway">Moneris Gateway</div>{" "}
                <div className="arrow">
                  <i className="fa-sharp fa-solid fa-right-long"></i>
                </div>
                <div className="node card-brand">Card Brand</div>{" "}
                <div className="arrow">
                  <i className="fa-sharp fa-solid fa-right-long"></i>
                </div>
                <div className="node bank">Bank</div>
              </div>
              <div className="flowchart-arrow">
                {" "}
                <div className="img-arrow arrow-1">
                  <img src={Arrow} alt="arrow" />
                </div>
                <div className="img-arrow arrow-2">
                  <img src={Arrow} alt="arrow" />
                </div>
                <div className="img-arrow arrow-3">
                  <img src={Arrow} alt="arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="work-process-content">
            <h3>How it works:</h3>
            <ul>
              <li>Cardholder visits website, selects items and checks out.</li>
              <li>Cardholder selects a method of payment.</li>
              <li>Cardholder enters payment information and clicks submit.</li>
              <li>
                Merchant’s website will post cardholder details to the Moneris
                Gateway
              </li>
              <li>
                Cardholder details are sent through the Moneris gateway to the
                card associations for authorization
              </li>
              <li>
                The message will travel through MasterCard or Visa’s data
                processing networks. The card number and expiry date is sent
                through the corresponding network to the cardholder’s issuing
                bank.{" "}
              </li>
              <li>
                The cardholder’s bank reviews the authorization request and
                sends the authorization response.
              </li>
              <li>
                Moneris (Moneris Gateway) returns the response to the merchant
                to display the final receipt.
              </li>
              <li>
                Merchant will be required to generate a cardholder receipt in
                accordance with the guidelines provided on this site.
              </li>
              <li>
                Cardholder receives confirmation of order through merchant’s
                website.
              </li>
            </ul>
            <p>ALternate Customized Solutions:</p>
            <ul>
              <li>Hosted Pay Page</li>
              <li>Batch Upload</li>
              <li>Tokenization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
