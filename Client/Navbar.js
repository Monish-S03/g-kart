// Navbar.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="navbar-left">
        <Link to="/" className="logo">Grokart</Link>
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          className="search-box"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>

      {/* Right Section */}
      <div className={`navbar-right ${mobileMenu ? "open" : ""}`}>
        <Link to="/cart" className="nav-link cart-icon">
          <FaShoppingCart size={22} />
          <span className="cart-count">{cart.length}</span>
        </Link>
        <Link to="/sell" className="nav-link">Become a Seller</Link>

        <div
          className="dropdown-wrapper"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <div className="nav-item dropdown">
            <span className="nav-link" onClick={() => navigate("/LoginSignupPage")}>
              Login ⬇️
            </span>

            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/profile">My Profile</Link>
                <Link to="/orders">Orders</Link>
              </div>
            )}
          </div>
        </div>
        <Link to="/admin-login">Admin Login</Link>
      </div>

      {/* Mobile Toggle */}
      <div className="toggle-btn" onClick={() => setMobileMenu(!mobileMenu)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
















