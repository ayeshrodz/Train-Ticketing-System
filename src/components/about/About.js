import React from "react";
import "./About.css";
import RailwayStation from "../Images/RailwayStation.jpg";

function About() {
  console.log(RailwayStation );
  return (
    <div >
    <div className = "background">
<img src = {RailwayStation } alt = "RailwayStationImage" width = {1000} />
</div>
      <div className="heading-about">
        <h1>About Us</h1>
      </div>
      <div className="para1">
        <p>
          If you’re exploring Sri Lanka for the first time or embarking on your
          next Sri Lankan adventure, traveling by train is the ideal option to
          explore the beautiful cities and landscapes of Sri Lanka. We are here
          to make sure your Sri Lankan journey will remain remarkable. CHIN-CHIN
          makes it easy and affordable to buy Sri Lankan train tickets online.
          For daily travelers to far away journey travelers, we let you book
          your train journey easily, anytime, anywhere. CHIN-CHIN was launched
          in 2021 where our primary focus is to help our customers connect their
          interests by train, island wide. We are dedicated to offer the best
          experience to our customers. We look forward to meeting your Sri
          Lankan train tickets needs.
        </p>

        <div className="subhead">
          <p>Plan your Journey with us!</p>
        </div>
      </div>
    </div>
  );
}

export default About;
