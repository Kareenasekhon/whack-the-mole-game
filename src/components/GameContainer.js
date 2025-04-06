import React, { useState, useEffect } from 'react';
import Mole from './Mole';
import Scoreboard from './Scoreboard';
import GameOver from './GameOver';
import StartButton from './StartButton';
import '../index.css'; // Add your styles here

function GameContainer() {
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [activeMole, setActiveMole] = useState(-1);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    let moleTimer;
    let gameTimer;

    if (gameActive && timeLeft > 0) {
      moleTimer = setInterval(() => {
        setActiveMole(Math.floor(Math.random() * 9));
      }, 1000);

      gameTimer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      setGameActive(false);
      setGameOver(true);
    }

    return () => {
      clearInterval(moleTimer);
      clearInterval(gameTimer);
    };
  }, [gameActive, timeLeft]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameActive(true);
    setGameOver(false);
    setActiveMole(-1);
  };

  const whackMole = (index) => {
    if (index === activeMole) {
      setScore((prev) => prev + 1);
      setActiveMole(-1);
    }
  };

  return (
    <div className="game-container">
      <h1>Whack A Mole</h1>
      {!gameActive && !gameOver && <StartButton onClick={startGame} />}
      <Scoreboard score={score} timeLeft={timeLeft} />
      <div className="grid">
        {[...Array(9)].map((_, index) => (
          <Mole key={index} active={activeMole === index} onClick={() => whackMole(index)} />
        ))}
      </div>
      {gameOver && <GameOver score={score} onPlayAgain={startGame} />}
    </div>
  );
}

export default GameContainer;
