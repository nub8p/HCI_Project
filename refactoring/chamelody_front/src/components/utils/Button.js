import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Button.css';

const Button = ({ text, icon, to, onClick, status }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick(); // 호출할 onClick 함수 실행
    }
    navigate(to, {
      state: {
        status, // 기존 state 값 유지
        ...location.status // 이전 페이지에서 전달된 state 값 유지
      }
    });
  };

  return (
    <button className="button" onClick={handleClick}>
      <div className="button-text">{text}</div>
      <div className="button-icon-container">
        <img className="button-icon" src={icon} alt="" />
      </div>
    </button>
  );
};

export default Button;
