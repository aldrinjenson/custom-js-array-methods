import React from "react";

const Square = ({ value, onSquareClick }) => {
  return (
    <button data-testid='square' className='square' onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
