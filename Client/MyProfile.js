import React from "react";
import "./MyProfile.css"; // Make sure this file exists

const MyProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return (
      <div className="profile-container">
        <p className="profile-message">Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="profile-heading">👤 My Profile</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.isAdmin ? "Admin" : "User"}</p>
      </div>
    </div>
  );
};

export default MyProfile;


