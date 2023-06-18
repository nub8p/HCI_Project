import React from 'react';
import './WordBlock.css';

const WordBlock = ({ word, option }) => {
  let className = 'word-block';
  if (option === 'line') {
    className = 'word-block-line-highlight';
  } else if (option === 'filled') {
    className = 'word-block-filled-highlight';
  }
  return <span className={className}>{word}</span>;
};

export default WordBlock;
