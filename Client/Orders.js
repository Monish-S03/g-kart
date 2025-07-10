import React, { useEffect, useState } from "react";
import "./Orders.css"; // Ensure this CSS file exists

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const userEmail = localStorage.getItem("userEmail");

  // ✅ Fetch orders from backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const encodedEmail = encodeURIComponent(userEmail);
        const res = await fetch(`http://localhost:5000/api/orders/${encodedEmail}`);

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`❌ Fetch failed: ${res.status} - ${text}`);
        }

        const data = await res.json();
        setOrders(data);
      } catch (err) {
        console.error("❌ Fetch order error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (userEmail) {
      fetchOrders();
    }
  }, [userEmail]);

  // ✅ Cancel order handler
  const handleCancelOrder = async (orderId) => {
    if (!window.confirm("Are you sure you want to cancel this order?")) return;

    console.log("🧪 Trying to cancel order ID:", orderId);

    try {
      const res = await fetch(`http://localhost:5000/api/orders/${orderId}`, {
        method: "DELETE",
      });

      const result = await res.json(); // ✅ Only use this once
      console.log("✅ Order deleted:", result);

      if (!res.ok) {
        throw new Error(`❌ Error deleting order: ${res.status} - ${result.message}`);
      }

      // ✅ Update frontend state
      setOrders((prev) => prev.filter((order) => order._id !== orderId));
      alert("✅ Order cancelled successfully!");
    } catch (err) {
      console.error("❌ Cancel error:", err);
      alert("❌ Could not cancel order.");
    }
  };

  // ✅ UI rendering
  if (!userEmail) return <p>❌ Please log in to view your orders.</p>;

  return (
    <div className="orders-container">
      <h2 className="orders-title">📦 My Orders</h2>

      {loading ? (
        <p className="orders-loading">Loading orders...</p>
      ) : orders.length === 0 ? (
        <p className="orders-empty">No orders yet.</p>
      ) : (
        <ul className="orders-list">
          {orders.map((order) => (
            <li key={order._id} className="order-item">
              <img
                src={order.image}
                alt={order.productName}
                className="order-image"
              />
              <div className="order-details">
                <strong>{order.productName}</strong>
                <div>₹{order.price}</div>
                <span>
                  Ordered on:{" "}
                  {order.createdAt
                    ? new Date(order.createdAt).toLocaleDateString()
                    : "N/A"}
                </span>
                <button
                  className="cancel-button"
                  onClick={() => handleCancelOrder(order._id)}
                >
                  ❌ Cancel Order
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;
