import React from "react";
import "./styles.css";
import Chart from "../Charts";
const Summary = () => {
  return (
    <div className="summary-container">
      <div class="summary-heading">Activity Trends</div>

      <div className="trends-total">
        <div className="trend-item">
          <img
            src={require("../../images/message-icon.png")}
            alt="icon"
            class="icon"
          />
          <div>
            <div className="value">319</div>
            <div className="trends-label">Outbound</div>
          </div>
        </div>
        <div className="trend-item">
          <img
            src={require("../../images/inbox-icon.png")}
            alt="icon"
            class="icon"
          />
          <div>
            <div className="value">223</div>
            <div className="trends-label">Inbound</div>
          </div>
        </div>
        <div className="trend-item">
          <img
            src={require("../../images/calender-icon.png")}
            alt="icon"
            class="icon"
          />
          <div>
            <div className="value">90</div>
            <div className="trends-label">Meetings</div>
          </div>
        </div>
      </div>
      <br />
      {/* <Chart /> */}
    </div>
  );
};
export default Summary;
