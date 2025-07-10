import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignupPage.css"; // optional styling

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // only for signup
  const [address, setAddress] = useState(""); // only for signup
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  // ✅ Check for existing login on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = isLogin
      ? { email, password }
      : { name, email, password, address };

    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/signup";

    try {
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        if (isLogin) {
          // ✅ Store data
          localStorage.setItem("token", data.token);
          localStorage.setItem("userId", data.user._id);
          localStorage.setItem("userEmail", data.user.email);

          alert("Login successful!");
          setIsLoggedIn(true);
          navigate("/"); // Home page
        } else {
          alert("Signup successful! Please log in.");
          setIsLogin(true);
          setEmail("");
          setPassword("");
          setName("");
          setAddress("");
        }
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    alert("Logged out successfully!");
    navigate("/"); // Redirect to home
  };

  return (
    <div className="auth-container">
      {!isLoggedIn ? (
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2>{isLogin ? "Login" : "Signup"}</h2>

          {!isLogin && (
            <>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </>
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">{isLogin ? "Login" : "Signup"}</button>

          <p onClick={() => setIsLogin(!isLogin)} className="toggle-link">
            {isLogin
              ? "Don't have an account? Signup"
              : "Already have an account? Login"}
          </p>
        </form>
      ) : (
        <div className="logout-section">
          <h2>Welcome, {localStorage.getItem("userEmail")}!</h2>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}

      <button className="home-btn" onClick={() => navigate("/")}>
        Go to Home
      </button>
    </div>
  );
};

export default LoginSignupPage;
