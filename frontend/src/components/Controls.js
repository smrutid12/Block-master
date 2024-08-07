import React from 'react';

const Controls = ({ onMove, onRotate, onDrop }) => {
  return (
    <div className="controls">
      <button onClick={() => onMove('left')}>Left</button>
      <button onClick={() => onMove('right')}>Right</button>
      <button onClick={() => onMove('down')}>Down</button>
      <button onClick={onRotate}>Rotate</button>
      <button onClick={onDrop}>Drop</button>
    </div>
  );
};

export default Controls;