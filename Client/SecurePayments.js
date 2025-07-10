import React from "react";
import { useNavigate } from "react-router-dom";

const SecurePayments = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>🔒 Secure Payments</h2>
      <p style={{ lineHeight: "1.6", fontSize: "16px" }}>
        At our store, your payment security is our top priority. We use industry-standard encryption protocols to protect your sensitive information. All transactions are processed through trusted payment gateways like Razorpay, PayPal, and Stripe.
        <br /><br />
        We do not store your card details, ensuring maximum security during every step of the checkout process. Our platform is PCI-DSS compliant, so your personal and financial data are always safe.
        <br /><br />
        Whether you're using UPI, credit/debit cards, or net banking, your transaction is encrypted and transmitted securely to the respective bank servers.
        <br /><br />
        You can shop with confidence knowing that your privacy and financial safety are well-guarded.
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

export default SecurePayments;
