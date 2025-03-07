import React, { useState, useEffect } from "react";
import GameGrid from "./components/Game";
import Controls from "./components/Controls";
import "./css/App.css";

function App() {
  const [gameState, setGameState] = useState(null);

  const handleStart = () => {
    fetch("http://127.0.0.1:5000/start")
      .then((response) => response.json())
      .then((data) => {
        console.log("Initial game state:", data); // Debugging line
        setGameState(data);
      })
      .catch((error) => console.error("Error starting game:", error));
  };

  const handleMove = (direction) => {
    fetch("http://127.0.0.1:5000/move", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ direction }),
    })
      .then((response) => response.json())
      .then((data) => setGameState(data))
      .catch((error) => console.error("Error moving:", error));
  };

  const handleRotate = () => {
    fetch("http://127.0.0.1:5000/rotate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setGameState(data))
      .catch((error) => console.error("Error rotating:", error));
  };

  const handleDrop = () => {
    fetch("http://127.0.0.1:5000/drop", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setGameState(data))
      .catch((error) => console.error("Error dropping:", error));
  };

  return (
    <div className="App">
      <div className="game-player-body">
        <div className="game-grid-panel">
          {/* Ensuring gameState is not null before accessing grid */}
          <GameGrid grid={gameState ? gameState.grid : [[]]} />
        </div>
        <div className="game-control-panel">
          <Controls
            onMove={handleMove}
            onRotate={handleRotate}
            onDrop={handleDrop}
            onStart={handleStart}
          />
        </div>
      </div>

      {/* Debugging Info */}
      <h1>Block Puzzle Game</h1>
      <p>Score: {gameState ? gameState.score : 0}</p>
      <p>High Score: {gameState ? gameState.high_score : 0}</p>
    </div>
  );
}

export default App;
