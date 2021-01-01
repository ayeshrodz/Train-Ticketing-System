import React from "react";
import "./Profile.css";
import Header from "../header/Header";

function Profile() {
  return (
    <div className="profile">
      {/* Navigation Bar Component */}
      <Header />
      <h1>Profile Component</h1>
    </div>
  );
}

export default Profile;
