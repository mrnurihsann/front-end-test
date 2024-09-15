import React from "react";
import Charts from "../charts/Charts";
import "./Man.css";

import Request from "../../assets/clipboard-import.png";
import Gateway from "../../assets/electricity2.png";
import Source from "../../assets/scroll2.png";
import User from "../../assets/user2.png";
import ChartComponent from "../charts/ChartsComponent";

const Utama = () => {
  return (
    <main>
      <div className="main__container">
        <div className="main__cards">
          <div className="card">
            <div className="card_inner">
              <img src={Request} alt="Total Request" className="card_image" />
              <div>
                <h3 className="font-bold text-title">Total Request</h3>
                <p className="text-primary-p">
                  Total of requests in the last 30 days
                </p>
                <span className="font-bold text-title">208</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
              <img src={Gateway} alt="Total Gateway" className="card_image" />
              <div>
                <h3 className="font-bold text-title">Total Gateway</h3>
                <p className="text-primary-p">Total of existing gateways</p>
                <span className="font-bold text-title">89</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
              <img src={Source} alt="Total Source" className="card_image" />
              <div>
                <h3 className="font-bold text-title">Total Source</h3>
                <p className="text-primary-p">Total of existing sources</p>
                <span className="font-bold text-title">622</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card_inner">
              <img src={User} alt="Total User" className="card_image" />
              <div>
                <h3 className="font-bold text-title">Total User</h3>
                <p className="text-primary-p">Total of registered users</p>
                <span className="font-bold text-title">120</span>
              </div>
            </div>
          </div>
          <ChartComponent />
        </div>

        <div className="charts">
          <div className="charts__left__cards">
            <div className="card active_card">
              <span className="font-bold text-title">120</span>
              <h3 className="font-bold text-title">Total Token</h3>
              <p className="text-primary-p">
                The total of the types of existing tokens
              </p>
            </div>

            <div className="card">
              <span className="font-bold text-title">90</span>
              <h3 className="font-bold text-title">Total Active</h3>
              <p className="text-primary-p">
                The total of tokens that are still active and ready to use
              </p>
            </div>

            <div className="card">
              <span className="font-bold text-title">12</span>
              <h3 className="font-bold text-title">Total Revoke</h3>
              <p className="text-primary-p">
                The total of tokens that have been revoked
              </p>
            </div>

            <div className="card">
              <span className="font-bold text-title">18</span>
              <h3 className="font-bold text-title">Total Expire</h3>
              <p className="text-primary-p">
                The total of expired tokens that are no longer active
              </p>
            </div>
          </div>

          <div className="charts__right">
            <Charts />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Utama;
