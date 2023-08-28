// ServicesCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Services.css';

const ServicesCarousel = () => {
  const tourpackages = [
    {
      image: '/images/img-2.jpg', // Update with image URL
      title: 'Beach Getaway',
      description: 'Relax on pristine beaches and enjoy the sun and sea. - 1600$'
    },
    {
      image: '/images/img-3.jpg', // Update with image URL
      title: 'Middle of the ocean',
      description: 'Come and experience the adventure with a safety. - 2000$'
    },
    {
      image: '/images/img-4.jpg', // Update with image URL
      title: 'Football',
      description: 'Come and take a tour of most beautifull football stadium in the world . -2100$'
    },
    {
      image: '/images/img-7.jpg', // Update with image URL
      title: 'cultural tour',
      description: 'Take a tour and explore cultures all over the world. -1800$'
    },
    {
      image: '/images/img-6.jpg', // Update with image URL
      title: 'SignUp to see more packages',
      
    },
    // Add more tourtourpackages
  ];

  return (
    <div className="carousel-container">
      <Carousel showStatus={false} showIndicators={true} showThumbs={false}>
        {tourpackages.map((tourpackage, index) => (
          <div key={index} className="carousel-item">
            <img src={tourpackage.image} alt={`tourPackage ${index + 1}`} />
            <div className="carousel-caption">
              <h2>{tourpackage.title}</h2>
              <p>{tourpackage.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ServicesCarousel;
