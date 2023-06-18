import React from 'react';
import './LandingPage.css';
import Button from '../utils/Button';
import TitleLogo from '../utils/TitleLogo';
import run from '../../images/running.png';
import SloganBanner from './SloganBanner';

const LandingPage = () => {
  return (
    <div className="green_bg">
      <div className="left">
        <TitleLogo />
        <SloganBanner />
        <div className="button-wrapper">
            <Button text="Try it for Free" icon={run} to="/emotionSelect" />
        </div>
      </div>
      <div className="right">
        <div className='right-contianer'>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
