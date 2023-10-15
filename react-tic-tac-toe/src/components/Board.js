import React from "react";
import Square from "./Square";

const sampleGameBoardRows = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

export default function Board({ squares = [], xIsNext, onPlay }) {
  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) return;
    const newSquares = [...squares];
    newSquares[i] = xIsNext ? "X" : "O";
    onPlay(newSquares);
  };

  const winner = calculateWinner(squares);

  const getStatus = () => {
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else if (squares.every((el) => el)) {
      status = "Draw Match";
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }
    return status;
  };

  return (
    <div>
      <div className='status'>{getStatus()}</div>
      {sampleGameBoardRows.map((row, index) => (
        <div className='board-row' key={index}>
          {row.map((col) => (
            <Square
              key={col}
              value={squares[col]}
              onClick={() => handleClick(col)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
