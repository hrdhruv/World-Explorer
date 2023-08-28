import React from 'react';
import '../App.css';
import { Button } from './button';
import './HeroSection.css';
function HeroSection() {
  return (
    <div className='HeroSection-container'>
        <video src='./videos/video-3.mp4' autoPlay loop muted/> 
        <h1> EXPLORE THE WORLD </h1>
        <p> what are you waiting for ? </p>
        <div className='HeroSection-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' onClick={console.log('hey')}>
                WATCH <i className='far fa-play-circle'/>
            </Button>
        </div>
    </div>
    //<HeroSection/>
  );
}

export default HeroSection;
