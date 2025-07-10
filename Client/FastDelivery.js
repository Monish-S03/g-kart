import React from "react";
import { useNavigate } from "react-router-dom";

const FastDelivery = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>🚚 Fast Delivery</h2>
      <p style={{ lineHeight: "1.6", fontSize: "16px" }}>
        We know how exciting it is to receive your order quickly — that’s why we prioritize speed and efficiency in our delivery system. Our logistics network ensures your products reach you faster than ever.
        <br /><br />
        From the moment you place your order, our system begins processing it immediately. Our smart warehouse management and courier partnerships help us minimize delays and optimize routes.
        <br /><br />
        Enjoy real-time tracking updates at every step, so you’re always informed about your package’s journey. No more wondering where your product is — we’ll keep you updated right up to the delivery at your doorstep.
        <br /><br />
        We also offer express and same-day delivery options in select cities for maximum convenience. Your satisfaction is our delivery goal.
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

export default FastDelivery;

