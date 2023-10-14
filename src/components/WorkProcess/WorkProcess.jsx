import React from "react";
import Arrow from "../../assets/img/arrow.png";
import Car from "../../assets/img/car.png";
import { WorkProcessData } from "./WorkProcessData";

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
              <img className="running-bike" src={Car} alt="Bike" />
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
              {WorkProcessData &&
                WorkProcessData.slice(0, 10).map((data) => {
                  return (
                    <li key={data.id}>
                      <i className="fa-sharp fa-regular fa-arrows-up-down-left-right fa-spin"></i>
                      <span>{data.descritpion}</span>
                    </li>
                  );
                })}
            </ul>
            <h6 className="my-3">ALternate Customized Solutions:</h6>
            <ul>
              {WorkProcessData &&
                WorkProcessData.slice(10, 14).map((data) => {
                  return (
                    <li key={data.id}>
                      <i className="fa-sharp fa-regular fa-arrows-up-down-left-right fa-spin"></i>
                      <span>{data.descritpion}</span>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
