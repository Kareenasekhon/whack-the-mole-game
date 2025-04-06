import React from 'react';

function GameOver({ score, onPlayAgain }) {
  return (
    <div className="game-over">
      <h2>Game Over!</h2>
      <p>Final Score: {score}</p>
      <button onClick={onPlayAgain}>Play Again</button>
    </div>
  );
}

export default GameOver;
