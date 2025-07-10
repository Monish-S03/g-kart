import React from "react";
import { useNavigate } from "react-router-dom";

const EasyReturns = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>↩️ Easy Returns</h2>
      <p style={{ lineHeight: "1.6", fontSize: "16px" }}>
        Your satisfaction is our priority. If you're not completely happy with your purchase, we offer a simple and convenient return policy within 7 days of delivery.
        <br /><br />
        The return process is quick and easy. Simply go to your orders section, select the item you wish to return, and follow the guided steps. We’ll arrange a pickup at your doorstep — no extra charges, no questions asked.
        <br /><br />
        Once we receive the returned item in its original condition, your refund or replacement will be processed swiftly. We ensure complete transparency throughout the process with status updates and notifications.
        <br /><br />
        Whether it's the wrong size, a change of mind, or a defective product — we’ve got your back. Shop with confidence knowing that returning an item is just as simple as buying it.
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

export default EasyReturns;
