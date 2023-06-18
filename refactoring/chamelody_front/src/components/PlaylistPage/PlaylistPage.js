import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TitleLogo from "../utils/TitleLogo";
import WordBlock from "../utils/WordBlock";
import Emoji from "../EmotionSelectionPage/Emoji";
import thumbs_up from "../../images/thumbs_up.png";
import spotify_logo from "../../images/spotify_logo.png";
import logo from "../../images/logo_only.png";
import "./PlaylistPage.css";

const word_blocks = [
  { word: "a", option: "normal" },
  { word: "# journey", option: "filled" },
  { word: "of", option: "normal" },
  { word: "shifting", option: "line" },
];

function PlaylistPage() {
  const location = useLocation();

  console.log(location.state.musicList);
  const fromEmoji = location.state.fromEmoji;
  const toEmoji = location.state.toEmoji;

  const [fallingEmojis, setFallingEmojis] = useState([]);

  useEffect(() => {
    const generateRandomEmojis = () => {
      const emojis = [fromEmoji, toEmoji];
      const numEmojis = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10

      const randomEmojis = [];
      for (let i = 0; i < numEmojis; i++) {
        const randomIndex = Math.floor(Math.random() * emojis.length);
        randomEmojis.push(emojis[randomIndex]);
      }

      setFallingEmojis(randomEmojis);
    };

    generateRandomEmojis();
  }, [fromEmoji, toEmoji]);

  function FallingEmoji({ emoji }) {
    const [position, setPosition] = useState({
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
      width: `${Math.random() * 300}px`,
    });

    useEffect(() => {
      const animationDuration = 3000; // milliseconds

      setTimeout(() => {
        setPosition({
          top: "100vh",
          left: position.left,
          width: position.width,
        });
      }, animationDuration);
    }, [position]);

    return (
      <div
        className="emoji-falling-container"
        style={{ top: position.top, left: position.left }}
      >
        <div className="emoji-falling">
          <Emoji emotion={emoji} mode="display" size={position.width} />
        </div>
      </div>
    );
  }

  return (
    <div className="animation_bg">
      <div className="left">
        <TitleLogo />

        <div className="playlist-msg">
          <div className="slogan-line center emotion-msg">
            <WordBlock word={["From"]} option={"line"} />
            <div className="Emoji-field">
              <Emoji emotion={fromEmoji} mode="display" />
              <p># {fromEmoji.slice(0, -1)}</p>
            </div>
            <WordBlock word={["mood"]} option={"normal"} />
          </div>
          <div className="slogan-line center emotion-msg line-2">
            <WordBlock word={["to"]} option={"normal"} />
            <div className="Emoji-field">
              <Emoji emotion={toEmoji} mode="display" />
              <p># {toEmoji.slice(0, -1)}</p>
            </div>
            <WordBlock word={["mood, "]} option={"normal"} />
          </div>
          <div className="slogan-line emotion-msg">
            {word_blocks.map((item, index) => (
              <WordBlock key={index} word={item.word} option={item.option} />
            ))}
          </div>
        </div>

        <div className="user-reaction">
          <div className="blackBtn thumbs_up">
            <img className="" src={thumbs_up} alt="thumbs_up" />
          </div>

          <div className="blackBtn add-playlist-Btn">
            <img className="" src={spotify_logo} alt="spotify_logo" />
            <img className="" src={logo} alt="logo" />
            <div className="add-playlist">Add my Playlist</div>
          </div>
        </div>
      </div>

      <div className="playlist-container">
        <div className="playlist-blank">
          <div className="playlist-bg">
            <div className="playlist-box">
              {location.state.musicList.map((music, index) => (
                <div key={index} className="playlist-list">
                  <div className="playlist-title">{music.name}</div>
                  <div className="playlist-artists">{music.artists}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {fallingEmojis.map((emoji, index) => (
        <FallingEmoji key={index} emoji={emoji} />
      ))}
    </div>
  );
}

export default PlaylistPage;
