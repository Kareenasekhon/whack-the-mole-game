import React from 'react';

function StartButton({ onClick }) {
  return (
    <button className="start-btn" onClick={onClick}>
      Start Game
    </button>
  );
}

export default StartButton;
