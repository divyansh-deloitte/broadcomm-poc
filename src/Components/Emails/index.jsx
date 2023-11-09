import React, { useEffect, useState } from "react";
import { ClayInput } from "@clayui/form";
import ClayIcon from "@clayui/icon";
import "./styles.css";
const Emails = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    setEmails([
      {
        subject: "Issue Related to Symantec Details",
        time: "6:01 pm",
        sender: ["Rajendra Pandey"],
        recipients: ["Rajneesh Kumar", "Shubham Kumar Varma"],
      },
      {
        subject: "Issue Related to Symantec Details",
        time: "6:01 pm",
        sender: ["Rajendra Pandey"],
        recipients: ["Rajneesh Kumar", "Shubham Kumar Varma"],
      },
      {
        subject: "Issue Related to Symantec Details",
        time: "6:01 pm",
        sender: ["Rajendra Pandey"],
        recipients: ["Rajneesh Kumar", "Shubham Kumar Varma"],
      },
      {
        subject: "Issue Related to Symantec Details",
        time: "6:01 pm",
        sender: ["Rajendra Pandey"],
        recipients: ["Rajneesh Kumar", "Shubham Kumar Varma"],
      },
      {
        subject: "Issue Related to Symantec Details",
        time: "6:01 pm",
        sender: ["Rajendra Pandey"],
        recipients: ["Rajneesh Kumar", "Shubham Kumar Varma"],
      },
    ]);
  }, []);
  return (
    <div className="emails-container">
      <div className="search-box">
        <img
          src={require("../../images/search-icon.png")}
          className="search-icon"
          alt="search-icon"
        />
        <ClayInput
          type="text"
          className="search-input"
          placeholder="Search by keyword or person name"
        />
      </div>
      {emails.length !== 0 &&
        emails.map((val) => {
          return (
            <div className="email">
              <div className="email-heading">
                <div className="email-title">
                  <img
                    className="email-icon"
                    alt="email-icon"
                    src={require("../../images/inbox-icon.png")}
                  />
                  <div className="email-subject">Re: {val.subject}</div>
                </div>
                <div className="email-time">{val.time}</div>
              </div>
              <div className="email-sender">
                <span>From:</span>
                <span className="email-people">{val.sender}</span>
              </div>
              <div className="email-recipients">
                <span>To:</span>
                <span className="email-people">
                  {val.recipients.join(", ")}
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default Emails;
