import React from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const grandTotal = cart.reduce(
    (total, item) => total + item.priceAfterDiscount * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-box">
        <h2>Your Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {/* ✅ Table Header Row */}
            <div className="cart-header-row">
              <span className="col-product">Product</span>
              <span className="col-price">Single Price</span>
              <span className="col-quantity">Quantity</span>
              <span className="col-total">Price</span>
              <span className="col-remove">Remove</span>
            </div>

            <ul>
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <span className="col-product">{item.name}</span>
                  <span className="col-price">₹{item.priceAfterDiscount}</span>
                  <span className="col-quantity">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="qty-input"
                    />
                  </span>
                  <span className="col-total">
                    ₹{item.priceAfterDiscount * item.quantity}
                  </span>
                  <span className="col-remove">
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </span>
                </li>
              ))}
            </ul>

            <h3>Total: ₹{grandTotal}</h3>
            <button className="cancel-btn" onClick={clearCart}>
              Cancel All
            </button>
          </>
        )}

        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back to Products
        </button>
      </div>
    </div>
  );
};

export default Cart;
