import React from "react";

export function Button({ onClick, className, children }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 text-white bg-gray-700 rounded ${className}`}
    >
      {children}
    </button>
  );
}
