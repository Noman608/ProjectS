import React, { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helper";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
import "./styles/root.scss"

function App() {

  const [history, setHistory] = useState([{ board: Array(9).fill(null), isXNext: true }]);
  const [isXNext, setIsXNext] = useState(false);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const winner = calculateWinner(current.board);

  const handleSqureClick = (position) => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory((prev) => {

      const last = prev[prev.length - 1];

      const newBoard = last.board.map((squre, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }
        return squre;
      })
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    setCurrentMove(prev => prev + 1);
  }
  const moveTo = (move) => {
    setCurrentMove(move);
  }
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
       <StatusMessage winner={winner} current={current}/>
      <Board board={current.board} handleSqureClick={handleSqureClick} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
