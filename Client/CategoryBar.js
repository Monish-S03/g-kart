import React from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryBar.css";

const categories = [
  { icon: "📱", title: "Mobiles" },
  { icon: "🛒", title: "Grocery" },
  { icon: "💻", title: "Electronics" },
  { icon: "👕", title: "Fashion" },
  { icon: "🛋️", title: "Furniture" },
  { icon: "🧊", title: "Appliances" },
  { icon: "🧸", title: "Toys" },
  { icon: "🏍️", title: "Two Wheelers" },
];

const CategoryBar = () => {
  const navigate = useNavigate();
  return (
    <div className="category-bar">
      {categories.map((cat, i) => (
        <div key={i} onClick={() => navigate(`/category/${cat.title.toLowerCase()}`)} className="category-item">
          <div>{cat.icon}</div>
          <div>{cat.title}</div>
        </div>
      ))}
    </div>
  );
};

export default CategoryBar;

