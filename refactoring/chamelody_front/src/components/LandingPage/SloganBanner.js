import React from 'react';
import './SloganBanner.css';
import logo_icon from '../../images/logo_only.png';
import WordBlock from '../utils/WordBlock';

const word_blocks = [
  { word: 'mood', option: 'line' },
  { word: '# Chamelody', option: 'filled' },
];

const SloganBanner = () => {
  return (
    <div className="slogan-banner-container">
      <div className="slogan-content">
        <div className="slogan-line">
          Change your <WordBlock word={word_blocks[0].word} option={word_blocks[0].option} />
        </div>
        <div className="slogan-line center">
          with a -
          <span className="logo-icon">
            <img src={logo_icon} alt="Chamelody Logo icon" />
          </span>
        </div>
        <div className="slogan-line">
          <WordBlock word={word_blocks[1].word} option={word_blocks[1].option} /> playlist
        </div>
      </div>
    </div>
  );
};

export default SloganBanner;
