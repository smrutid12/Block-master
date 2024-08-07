import React, { useState, useEffect } from 'react';
import Game from './components/Game';
import Controls from './components/Controls';
import './App.css';

function App() {
  const [gameState, setGameState] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/start')
      .then(response => response.json())
      .then(data => {
        console.log('Initial game state:', data); // Debugging line
        setGameState(data);
      })
  }, []);

  const handleMove = (direction) => {
    fetch('http://localhost:5000/move', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ direction }),
    })
      .then(response => response.json())
      .then(data => setGameState(data));
  };

  const handleRotate = () => {
    fetch('http://localhost:5000/rotate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => setGameState(data));
  };

  const handleDrop = () => {
    fetch('http://localhost:5000/drop', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => setGameState(data));
  };

  return (
    <div className="App">
      <h1>Block Puzzle Game</h1>
      {gameState && <Game grid={gameState.grid} />}
      <Controls onMove={handleMove} onRotate={handleRotate} onDrop={handleDrop} />
      <div>
        <p>Score: {gameState ? gameState.score : 0}</p>
        <p>High Score: {gameState ? gameState.high_score : 0}</p>
      </div>
    </div>
  );
}

export default App;
