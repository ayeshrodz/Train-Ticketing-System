import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../Images/train1.jpg';
import image2 from '../Images/train2.jpg';
import image3 from '../Images/train3.jpg';
import image4 from '../Images/train4.jpg';
import image5 from '../Images/train5.jpg';
import image6 from '../Images/train6.jpg';
import image7 from '../Images/train7.jpg';
import image8 from '../Images/train8.jpg';
import image9 from '../Images/train9.jpg';
import image10 from '../Images/train10.jpg';
import image11 from '../Images/train11.jpg';

function About() {
  return (
    <div className="about">
      <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image1} 
      alt="First slide"
      
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image4}
      alt="Fourth slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image5}
      alt="Fifth slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image6}
      alt="Sixth slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image7}
      alt="Seventh slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image8}
      alt="Eighth slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image9}
      alt="Nineth slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image10}
      alt="Tenth slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image11}
      alt="Eleventh slide"
    />
  </Carousel.Item>

  
</Carousel>
    </div>
  );
}

export default About;
