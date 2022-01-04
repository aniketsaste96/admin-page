import React from "react";
import "./featuredinfo.css";
import { ProgressBar } from "react-bootstrap";

export default function Featuredinfo() {
  return (
    <div className="featured">
      <div className="featuredItem Monthly" id="featuredItemone">
        <span className="featureTitleMonthly">Earning (Monthly)</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$40,000</span>
        </div>
      </div>
      <div className="featuredItem Annual" id="featuredItemtwo">
        <span className="featureTitleAnnual">Earning (Annual)</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$215,000</span>
        </div>
      </div>
      <div className="featuredItem Tasks" id="featuredItemthree">
        <span className="featureTitleTasks">Tasks</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">50%</span>

          <ProgressBar animated now={50} label="Task Completed" />
        </div>
      </div>
      <div className="featuredItem Pending" id="featuredItemfour">
        <span className="featureTitlePending">Pending Request</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">18</span>
        </div>
      </div>
    </div>
  );
}
