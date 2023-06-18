import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmotionSelectionPage.css';
import TitleLogo from '../utils/TitleLogo';
import WordBlock from '../utils/WordBlock';
import Button from '../utils/Button';
import Emoji from './Emoji';
import arrow from '../../images/block - arrow.png';
import headphone from '../../images/headphone.png';
import selectIcon from '../../images/selectEmoji.png';


const line1 = [
  { word: 'I', option: 'plain' },
  { word: 'want', option: 'plain' },
  { word: 'to', option: 'plain' },
  { word: 'chamelody', option: 'line' },
];

const EmotionSelectionPage = () => {
  const navigate = useNavigate();
  const emotions = ['happy', 'anger', 'sad', 'fear', 'love'];

  // State variables to keep track of the current and next mood images
  const [currentMoodImg, setCurrentMoodImg] = useState('');
  const [nextMoodImg, setNextMoodImg] = useState('');
  const [shouldShake, setShouldShake] = useState(false);

  const handleEmotionClick = (emotion, selectedEmoji) => {
    // Set the current mood image on the first click
    if (!currentMoodImg) {
      setCurrentMoodImg(`${emotion}${selectedEmoji}`);
    }
    // Set the next mood image on the second click
    else if (!nextMoodImg) {
      setNextMoodImg(`${emotion}${selectedEmoji}`);
    }
  };

  useEffect(() => {
    const shouldApplyShake = !currentMoodImg && !nextMoodImg;
    console.log(shouldApplyShake); // Check the value of shouldApplyShake
    setShouldShake(shouldApplyShake);
  }, [currentMoodImg, nextMoodImg]);


  const handleCancelClick = (buttonType) => {
    if (buttonType === 'curMoodBtn') {
      // Reset the current mood image
      setCurrentMoodImg('');
    } else if (buttonType === 'nxtMoodBtn') {
      // Reset the next mood image
      setNextMoodImg('');
    }
  };

  const sendMoodImagesToAPI = () => {
    const apiUrl = 'http://chamelody.kro.kr:46577/playlist'; 
    const data = {
      fromEmotion: currentMoodImg.slice(0, -1).toUpperCase(),
      toEmotion: nextMoodImg.slice(0, -1).toUpperCase()
    };
  
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.musicList)
        navigate('/playlist', {
          state: {
            musicList: data.musicList,
            fromEmoji: currentMoodImg, 
            toEmoji : nextMoodImg
          }
        })
      })
      .catch(error => {
        console.error('Error occurred while sending mood images:', error);
      });
  };
  
  

  const shouldShowButton = currentMoodImg && nextMoodImg;

  return (
    <div className="green_bg">
      <div className="selection-container">
        <div className="guide-container">
          <TitleLogo />

          <div className="message">
            {line1.map((item, index) => (
              <WordBlock key={index} word={item.word} option={item.option} />
            ))}
          </div>

          <div className="contentDiv">
            <button
              id="curMoodBtn"
              className="fadeIn"
              onClick={() => handleCancelClick('curMoodBtn')}
            >
              <p id="currMoodText"> #
                {currentMoodImg && (
                  <>
                    {currentMoodImg.slice(-1) === '1' && ' extremely'}
                    {currentMoodImg.slice(-1) === '2' && ' very'}
                    {currentMoodImg.slice(-1) === '3' && ' quite'}
                  </>
                )}
                {currentMoodImg ? ` ${currentMoodImg.slice(0, -1)}` : ' current mood'}
              </p>
              
              {currentMoodImg && <Emoji emotion={currentMoodImg} mode = 'display'/>}
            </button>
            <img className="arrowIcon fadeIn" src={arrow} alt="arrow" />
            <button
              id="nxtMoodBtn"
              className="fadeIn"
              onClick={() => handleCancelClick('nxtMoodBtn')}
            >
              
              <p id="nextMoodText"> #
                {nextMoodImg && (
                  <>
                    {nextMoodImg.slice(-1) === '1' && ' extremely'}
                    {nextMoodImg.slice(-1) === '2' && ' very'}
                    {nextMoodImg.slice(-1) === '3' && ' quite'}
                  </>
                )}
                {nextMoodImg ? ` ${nextMoodImg.slice(0, -1)}` : ' mood I want'}
              </p>
              {nextMoodImg && <Emoji emotion={nextMoodImg} mode = 'display'/>}
            </button>
          </div>

          {shouldShowButton && ( // Render the button only if currentMoodImg and nextMoodImg are both set
          <div className="button-wrapper-select">
            <div className='btn-guide'>
                <p>Chamelody guides you by drawing an emotion map.</p> 
                <p>Shall we follow the playlist created by finding a path between the two emotions of your choice?</p>  
            </div>
            <Button text="Go to Playlist" icon={headphone} to="/loading" onClick={sendMoodImagesToAPI} 
              status={{
                fromEmotion: currentMoodImg.slice(0, -1).toUpperCase(),
                toEmotion: nextMoodImg.slice(0, -1).toUpperCase()
              }}
            />
          </div>
        )}
        {!currentMoodImg && !nextMoodImg && (
          <div className="message-select-emoji">
             <div className='message-item'>Select the Emoji </div>
            <span className="guide-message">
               <img src={selectIcon} alt="Chamelody Logo icon" />
            </span>
          </div>
        )}


        </div>

        <div className={`bar_bg`}>
          {emotions.map((emotion, index) => (
            <div className="emoji-box" key={index}>
              <div className="emoji-tag">
                <div className="emoji-tag-container">#{emotion}</div>
              </div>
              <div className="emoji-field">
                <div className={`emoji-container big-emoji ${shouldShake ? 'shake' : ''} `}>
                  <Emoji emotion={`${emotion}1`} onClick={() => handleEmotionClick(emotion, 1)} resetState={!currentMoodImg && !nextMoodImg} />
                </div>
                <div className={`emoji-container small-emoji`}>
                  <div className={`emoji-cell ${shouldShake ? 'shake' : ''} `}>
                  <Emoji emotion={`${emotion}2`} onClick={() => handleEmotionClick(emotion, 2)} resetState={!currentMoodImg && !nextMoodImg} />
                  </div>
                
                  <div className={`emoji-cell ${shouldShake ? 'shake' : ''} `}>
                  <Emoji emotion={`${emotion}3`} onClick={() => handleEmotionClick(emotion, 3)} resetState={!currentMoodImg && !nextMoodImg} />
                  </div>
                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmotionSelectionPage;
