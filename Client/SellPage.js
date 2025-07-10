import React, { useState }from "react";
import "./SellPage.css"; // ✅ Import CSS file

const BecomeSellerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    shopName: "",
    email: "",
    phone: "",
    description: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/seller/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Application submitted successfully!");
        setFormData({
          name: "",
          shopName: "",
          email: "",
          phone: "",
          description: "",
        });
      } else {
        setMessage(data.message || "Submission failed.");
      }
    } catch (err) {
      setMessage("Server error.");
    }
  };

  return (
    <div className="seller-form-container">
      <h2 className="seller-form-title">Become a Seller</h2>
      <form onSubmit={handleSubmit} className="seller-form">
        <input
          className="seller-input"
          name="name"
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="seller-input"
          name="shopName"
          type="text"
          placeholder="Shop Name"
          value={formData.shopName}
          onChange={handleChange}
          required
        />
        <input
          className="seller-input"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="seller-input"
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          className="seller-textarea"
          name="description"
          placeholder="Describe your shop or products"
          value={formData.description}
          onChange={handleChange}
        />
        <button className="seller-submit-btn" type="submit">
          Submit
        </button>
      </form>
      {message && <p className="seller-message">{message}</p>}
    </div>
  );
};


export default BecomeSellerForm;










