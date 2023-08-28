// About.js
import React from 'react';
import './AboutUs.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="background-image" style={{ backgroundImage: `url('/images/about.jpg')` }} />
      <div className="about-content">
        <h1>About Us</h1>
        <p>Welcome to Tours & Travels, your gateway to extraordinary journeys and unforgettable experiences. We are dedicated to providing you with the best travel packages that cater to your wanderlust and desire for exploration.</p>
        <p>With a team of experienced travel enthusiasts, we curate and design travel packages that encompass the essence of each destination. Whether you're seeking a relaxing beach getaway, an adventurous trek through the mountains, or a cultural immersion in bustling cities, we have the perfect package for you.</p>
        <p>Our mission is to turn your travel dreams into reality. We take care of all the details, from transportation and accommodations to guided tours and local recommendations. Your only task is to embrace the journey and create cherished memories.</p>
        <p>Join us in embarking on journeys that go beyond the ordinary. Let us be your companions as you explore the world, one destination at a time.</p>
      </div>
    </div>
  );
};

export default About;
