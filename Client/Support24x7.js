import React from "react";
import { useNavigate } from "react-router-dom";

const Support24x7 = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>📞 24x7 Support</h2>
      <p style={{ lineHeight: "1.6", fontSize: "16px" }}>
        We understand that your questions and concerns can arise at any time. That’s why our customer support team is available 24 hours a day, 7 days a week. Whether it's a late-night order issue or a general query, we’re just a message or call away.
        <br /><br />
        Our trained professionals are equipped to handle issues related to orders, payments, returns, product information, and more. You can reach out to us via live chat, email, or our dedicated support line.
        <br /><br />
        We strive to provide instant responses and effective resolutions to ensure a smooth shopping experience for you. Customer satisfaction is our top priority, and we’re committed to being there for you — always.
        <br /><br />
        No matter the time or day, we're here to listen, assist, and resolve.
      </p>

      <button 
        onClick={goHome}
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          backgroundColor: "#1976d2",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default Support24x7;

