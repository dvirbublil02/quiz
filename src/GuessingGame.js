import React, { useState } from 'react';
import './App.css';

const GuessingGame = () => {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isGameWon, setIsGameWon] = useState(false);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  const handleInputChange = (event) => {
    setUserGuess(event.target.value);
  };

  const handleGuess = () => {
    const guess = parseInt(userGuess, 10);

    if (isNaN(guess) || guess < 1 || guess > 10) {
      setFeedback('Please enter a valid number between 1 and 10. רק מספר בין 1 ל 10');
    } else {
      if (guess === targetNumber) {
        setFeedback('Congratulations! You guessed the correct number. יפהה הצלחת לזהות את המספר');
        setIsGameWon(true);
      } else if (guess < targetNumber) {
        setFeedback('Too low! Try again. נמוך מדי , נסה שוב');
      } else {
        setFeedback('Too high! Try again. גבוה מדי נסה שוב');
      }
    }
  };

  const handleReset = () => {
    setTargetNumber(generateRandomNumber());
    setUserGuess('');
    setFeedback('');
    setIsGameWon(false);
  };

  return (
    <div className="mt-5">
      <h2 className="text-center mb-4" style={{ color: 'white' }}>משחק הניחושים  </h2>

      {!isGameWon && (
        <>
          <p className="text-center" style={{ color: 'white' }}>Guess a number between 1 and 10:  נחש מספר בין 1 ל 10</p>
          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              value={userGuess}
              onChange={handleInputChange}
            />
            <button className="btn btn-outline-primary" style={{ color: 'white' }} onClick={handleGuess}>
              נחש
            </button>
          </div>
        </>
      )}

      {feedback && <p className="text-center" style={{ color: 'white' }}>{feedback}</p>}

      {isGameWon && (
        <div className="text-center " style={{ color: 'white' }}>
          <p>Congratulations! You won!  יפה ניצחת !</p>
          <button className="btn btn-outline-primary" style={{ color: 'white' }} onClick={handleReset}>
            Play Again שחק שוב
          </button>
        </div>
      )}
    </div>
  );
};

export default GuessingGame;
