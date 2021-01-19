import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../Images/train1.jpg";
import image2 from "../Images/train2.jpg";
import image3 from "../Images/train3.jpg";
import "./About.css";


function About() {
  return (
    <div className="about">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={image1}
            alt="First slide"
            height="500px"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
            height="500px"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
            height="500px"
          />
        </Carousel.Item>

        
      </Carousel>
      <div className = "aboutUs" align ="center">
      <h1>About Us</h1>
      <p className ="para1">If you’re exploring Sri Lanka for the first time or embarking on your next Sri Lankan adventure, traveling by train is the ideal option to explore the beautiful cities and landscapes of Sri Lanka. We are here to make sure your Sri Lankan journey will remain remarkable. CHIN-CHIN makes it easy and affordable to buy Sri Lankan train tickets online. For daily travelers to far away journey travelers, we let you book your train journey easily, anytime, anywhere. CHIN-CHIN was launched in 2021 where our primary focus is to help our customers connect their interests by train, island wide. We are dedicated to offer the best experience to our customers which includes the following.</p>
      <p>- Direct real-time connectivity to the Sri Lankan railway system, allowing us to provide the best fares and availability.</p>
      <p>- eTicketing on most Sri Lankan trains.</p>
      <p>We look forward to meeting your Sri Lankan train tickets needs.</p>
      <h3>Plan your Journey with us!</h3>

      </div>
    </div>
  );
}

export default About;
