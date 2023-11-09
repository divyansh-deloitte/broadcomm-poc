import React, { useState } from "react";
import Summary from "../Summary";
import Details from "../Details";
import "./styles.css"; // Import the CSS file

const Tabs = () => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="custom-tab-list">
        <div
          className={`custom-tab-item ${active === 0 ? "active" : ""}`}
          onClick={() => setActive(0)}
        >
          Summary
        </div>
        <div
          className={`custom-tab-item ${active === 1 ? "active" : ""}`}
          onClick={() => setActive(1)}
        >
          Connections
        </div>
      </div>
      <div className="custom-tab-panel">
        {active === 0 ? (
          <>
            <Summary /> <Details />
          </>
        ) : (
          "Connections content will come here."
        )}
      </div>
    </div>
  );
};

export default Tabs;
