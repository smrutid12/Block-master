import React from "react";
import "../css/control.css";
import {
  ChevronLeft,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  RotateCw,
  Power,
} from "lucide-react";

const DATA = {
  left: <ChevronLeft />,
  right: <ChevronRight />,
  up: <ChevronUp />,
  down: <ChevronDown />,
  rotate: <RotateCw />,
  drop: <ChevronDown />,
  start: <Power />,
};

const Controls = ({ onMove, onRotate, onDrop, onStart }) => {
  return (
    <div className="controls">
      <div className="controls-column">
        <button onClick={() => onMove("up")}>{DATA.up}</button>
        <div className="controls-row">
          <button onClick={() => onMove("left")}>{DATA.left}</button>
          <button onClick={() => onMove("right")}>{DATA.right}</button>
        </div>
        <button onClick={() => onMove("down")}>{DATA.down}</button>
      </div>
      <div>
        <div className="controls-row">
          <button onClick={onRotate}>{DATA.rotate}</button>
          <button onClick={onDrop}>{DATA.drop}</button>
          <button onClick={onStart}>{DATA.start}</button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
