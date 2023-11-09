import React, { useEffect, useState } from "react";
import { ClayInput } from "@clayui/form";
import "./styles.css";
const Emails = () => {
  const [emails, setEmails] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [displayEmails, setDisplayEmails] = useState([]);

  useEffect(() => {
    setEmails([
      {
        id: 1,
        subject: "Issue Related to Semantic Details",
        time: "6:01 pm",
        sender: "Rajendra Pandey",
        recipients: ["Rajneesh", "Shubham"],
      },
      {
        id: 2,
        subject: "Issue Related to Syntax Details",
        time: "6:01 pm",
        sender: " Pandey",
        recipients: ["Kumar", "Varma"],
      },
      {
        id: 3,
        subject: "Issue Related to Runtime Details",
        time: "6:01 pm",
        sender: "Aman",
        recipients: ["Divyansh", "HashedIn"],
      },
      {
        id: 4,
        subject: "Issue Related to Type Details",
        time: "6:01 pm",
        sender: "Broadcomm",
        recipients: ["USI", "US"],
      },
      {
        id: 5,
        subject: "Issue Related to Compile Details",
        time: "6:01 pm",
        sender: "Deloitte",
        recipients: ["IT", "HR"],
      },
    ]);
  }, []);

  useEffect(() => {
    setDisplayEmails(emails);
  }, [emails]);

  function handleSearch(value) {
    setSearchQuery(value);
    if (value.trim()) {
      const filteredEmails = emails.filter(
        (email) =>
          email.subject.toLowerCase().includes(value.trim().toLowerCase()) ||
          email.sender.toLowerCase().includes(value.trim().toLowerCase()) ||
          email.recipients.some((recipient) =>
            recipient.toLowerCase().includes(value.trim().toLowerCase())
          )
      );
      setDisplayEmails(filteredEmails);
    }
  }

  return (
    <div className="emails-container">
      <div className="search-box">
        <img
          src={require("../../images/search-icon.png")}
          className="search-icon"
          alt="search-icon"
        />
        <ClayInput
          value={searchQuery}
          type="text"
          className="search-input"
          placeholder="Search by keyword or person name"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
      </div>
      {emails.length !== 0 &&
        displayEmails.map((val) => {
          return (
            <div className="email" key={val.id}>
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
