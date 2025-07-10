import React from "react";
import { Carousel } from "react-bootstrap";
import "./HeroCarousel.css";

// Importing images
import slide1 from "./images/slide1.webp";
import slide2 from "./images/slide2.jpg";
import slide3 from "./images/slide3.jpg";
import slide4 from "./images/slide4.webp";
import slide5 from "./images/slide5.jpg";
import slide6 from "./images/slide6.jpg";

const slides = [slide1, slide2, slide3, slide4, slide5, slide6];

const HeroCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel fade interval={3000}>
        {slides.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 carousel-img"
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
