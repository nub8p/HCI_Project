import React from 'react';
import TitleLogo from '../utils/TitleLogo';
import logo from '../../images/logo_bigsize.png';
import './LoadingPage.css';


function LoadingPage() {
  return (
    <div className="animation_bg">
      <div className="loading-bg">
        <TitleLogo />
        <div className="loading-container">
          <img className="middle-logo" src={logo} alt="logo" />
          <div className="middle-msg">
            <p>making playlist...</p>
          </div>
          <p>Chamelody guides you by drawing an emotion map.</p>
        </div>
      </div>
      <div className="corner-gradient-animation">
        <div className="corner-gradient-animation-inner"   />
      
      </div>
    </div>
  );
}

export default LoadingPage;
