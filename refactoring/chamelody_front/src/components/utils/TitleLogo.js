import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo_icon from '../../images/logo_only.png';
import logo_txt from '../../images/logo_txt.png';
import './TitleLogo.css';

const TitleLogo = () => {

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className="title_logo" onClick={handleLogoClick}>
        <img className="logo_icon" src={logo_icon} alt="Chamelody Logo icon" />
        <img className="logo_txt" src={logo_txt} alt="Chamelody Logo txt" />
    </div>
  );
};

export default TitleLogo;
