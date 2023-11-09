import React from "react";
import "./styles.css";
import DetailsTabs from "../DetailsTabs";
import Emails from "../Emails";
const Details = () => {
  return (
    <div className="details-container">
      <div className="details-heading">Details</div>
      <DetailsTabs />
      <div className="details-time">2h 37mins</div>
      <Emails />
    </div>
  );
};
export default Details;
