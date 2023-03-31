import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>Land the perfect job!</h1>
      <p>We only show relevant roles.</p>
      <div className='button-login'>
        <Button
          className='login-button'
          buttonStyle='primary-button'
          buttonSize='large'
          onClick={console.log('heya')}
        >
          Sign in!
        </Button>
      </div>
    </div>
  );
}

export default MainSection;
