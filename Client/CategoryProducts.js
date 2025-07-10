import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import allProducts from "./allProducts";
import "./CategoryProducts.css";
import { useCart } from "./CartContext"; // ✅ Import useCart

const CategoryProducts = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // ✅ Destructure addToCart

  const filteredProducts = allProducts.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="categorys-products-section">
      <h2 className="categorys-products-heading">
        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Products
      </h2>

      {/* Back to Home Button */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          className="categorys-products-btn"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="categorys-products-empty">
          No products found in this category.
        </div>
      ) : (
        <div className="categorys-products-grid">
          {filteredProducts.map((product, index) => (
            <div key={index} className="categorys-products-card">
              <div className="aspect-ratio-box">
                <img
                  src={product.image}
                  alt={product.name}
                  className="categorys-products-img"
                />
              </div>
              <div className="categorys-products-title">{product.name}</div>
              <div className="categorys-products-price">₹{product.price}</div>
              
              {/* ✅ Updated Add to Cart Button */}
              <button
                className="categorys-products-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryProducts;
