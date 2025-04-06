import React from 'react';

function Scoreboard({ score, timeLeft }) {
  return (
    <div>
      <div className="score">Score: {score}</div>
      <div className="score">Time Left: {timeLeft}s</div>
    </div>
  );
}

export default Scoreboard;
