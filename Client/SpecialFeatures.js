import React from "react";
import { useNavigate } from "react-router-dom";
import "./SpecialFeatures.css";

const features = [
  { icon: "🔒", title: "Secure Payments", path: "/secure-payments" },
  { icon: "🚚", title: "Fast Delivery", path: "/fast-delivery" },
  { icon: "↩️", title: "Easy Returns", path: "/easy-returns" },
  { icon: "📞", title: "24x7 Support", path: "/support-24x7" },
];

const FeatureCards = () => {
  const navigate = useNavigate();

  return (
    <div className="feature-cards-container">
      {features.map((feature, index) => (
        <div
          key={index}
          className="feature-card"
          onClick={() => navigate(feature.path)}
        >
          <div className="feature-icon">{feature.icon}</div>
          <div className="feature-title">{feature.title}</div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
