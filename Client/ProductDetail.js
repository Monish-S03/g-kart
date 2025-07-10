import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productData } from "./Products";
import { useCart } from "./CartContext";
import { FaShoppingCart, FaBolt, FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = productData.find((item) => item.id === parseInt(id));
  if (!product) return <h2>❌ Product not found</h2>;

  const handleBuyNow = async () => {
    const token = localStorage.getItem("token");
    const userEmail = localStorage.getItem("userEmail");

    if (!token || !userEmail) {
      alert("❌ Please login to place an order.");
      return navigate("/login");
    }

    const orderData = {
      productId: product.id,
      productName: product.name,
      price: product.price,
      userEmail,
      image: product.image,
      quantity: 1,
      date: new Date(),
    };

    try {
      const res = await axios.post("http://localhost:5000/api/orders", orderData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (res.status === 201 || res.status === 200) {
        alert("✅ Order placed successfully!");
        navigate("/orders");
      }
    } catch (error) {
      if (error.response?.status === 404) {
        alert("❌ Route not found. Check backend /api/orders");
      } else if (error.response?.status === 401) {
        alert("❌ Unauthorized. Please log in.");
        navigate("/login");
      } else {
        alert("❌ Something went wrong!");
      }
      console.error(error);
    }
  };

  return (
    <div className="product-detail-wrapper">
      <div className="back-button-container">
        <button className="btn-back-home" onClick={() => navigate("/")}>
          <FaArrowLeft /> Back to Home
        </button>
      </div>

      <div className="single-product-page">
        <div className="single-product-image-box">
          <img src={product.image} alt={product.name} className="single-product-img" />
        </div>

        <div className="single-product-details">
          <h2 className="single-product-title">{product.name}</h2>
          <p className="single-product-price">Original Price: ₹{product.originalPrice || product.price}</p>
          <p className="single-product-discount">Discount: {product.discount || 0}%</p>
          <p className="single-product-final-price">Now Only: ₹{product.discountedPrice || product.price}</p>
          <p className="single-product-description">{product.description || `Premium-quality ${product.name}.`}</p>

          <div className="single-product-button-group">
            <button onClick={() => addToCart(product)} className="btn-cart">
              <FaShoppingCart /> Add to Cart
            </button>
            <button onClick={handleBuyNow} className="btn-buy">
              <FaBolt /> Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
