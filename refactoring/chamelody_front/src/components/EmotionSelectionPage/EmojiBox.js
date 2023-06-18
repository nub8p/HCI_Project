import React from 'react';
import './EmojiBox.css';
import Emoji from './Emoji';

const EmojiBox = ({ emotion, onClick }) => {
  const handleClick = (selectedEmoji) => {
    onClick(emotion, selectedEmoji);
  };

  return (
    <div className="emoji-box">
      <div className="emoji-tag">
        <div className="emoji-tag-container">#{emotion}</div>
      </div>
      <div className="emoji-field">
        <div className="emoji-container big-emoji">
          <Emoji emotion={`${emotion}1`} onClick={() => handleClick(1)} />
        </div>
        <div className="emoji-container small-emoji">
          <Emoji emotion={`${emotion}2`} onClick={() => handleClick(2)} />
          <Emoji emotion={`${emotion}3`} onClick={() => handleClick(3)} />
        </div>
      </div>
    </div>
  );
};

export default EmojiBox;
