import React, { useState } from "react";
import Board from "./components/Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (moveIndex) => {
    setCurrentMove(moveIndex);
  };

  return (
    <div className='game'>
      <div className='game-board'>
        <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />
      </div>
      <div className='game-info'>
        <ol>
          {history.map((squares, moveIndex) => {
            let description = "Go to game start";
            if (moveIndex > 0) {
              description = "Go to move #" + moveIndex;
            }
            return (
              <li>
                <button onClick={() => jumpTo(moveIndex)}>{description}</button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
