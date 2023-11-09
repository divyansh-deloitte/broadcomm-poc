import React, { useState } from "react";
import Summary from "../Summary";
import "./styles.css"; // Import the CSS file

const DetailsTabs = () => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="details-tab-list">
        <div
          className={`details-tab-item ${active === 0 ? "active" : ""}`}
          onClick={() => setActive(0)}
        >
          Emails(27)
        </div>
        <div
          className={`details-tab-item ${active === 1 ? "active" : ""}`}
          onClick={() => setActive(1)}
        >
          Meetings(13)
        </div>
      </div>
      <div className="details-tab-panel">
        {active === 0 ? <></> : "Connections content will come here."}
      </div>
    </div>
  );
};

export default DetailsTabs;
