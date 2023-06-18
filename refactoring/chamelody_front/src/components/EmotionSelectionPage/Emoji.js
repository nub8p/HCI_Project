import React, { useState, useEffect } from "react";

const Emoji = ({ emotion, onClick, resetState, mode = "input", size }) => {
  const [emojiState, setEmojiState] = useState("normal");
  const [resetEmoji, setResetEmoji] = useState(false);

  useEffect(() => {
    if (resetState) {
      setEmojiState("normal");
      setResetEmoji(true);
    } else {
      setResetEmoji(false);
    }
  }, [resetState]);

  const handleClick = () => {
    if (mode === "input") {
      setEmojiState("clicked");
      onClick();
    }
  };

  const handleMouseEnter = () => {
    if (emojiState !== "clicked" && mode === "input") {
      setEmojiState("hover");
    }
  };

  const handleMouseLeave = () => {
    if (emojiState !== "clicked" && mode === "input") {
      setEmojiState("normal");
    }
  };

  const getEmojiImage = () => {
    let imageSrc = require(`../../images/${emotion}.png`);

    if (emojiState === "hover") {
      imageSrc = require(`../../images/${emotion}_hover.png`);
    } else if (emojiState === "clicked") {
      imageSrc = require(`../../images/${emotion}_black.png`);
    }

    return imageSrc;
  };

  const emojiImage = getEmojiImage();

  return (
    <img
      src={emojiImage}
      alt={emotion}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      key={resetEmoji.toString()} // Use resetEmoji state as key to force component re-rendering on reset
      style={{ width: size }}
    />
  );
};

export default Emoji;
