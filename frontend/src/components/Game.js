import React from 'react';

const Game = ({ grid }) => {
  return (
    <div className="game-grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="game-row">
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className="game-cell"
              style={{ backgroundColor: `rgb(${cell[0]}, ${cell[1]}, ${cell[2]})` }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Game;