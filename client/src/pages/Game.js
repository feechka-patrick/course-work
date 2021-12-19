import React, { useState } from 'react';
import Square from '../components/Square';
import '../css/GameComponents.css'
import { calculateWinner, getNextStep } from './GameUtils';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [countStep, setCount] = useState(0)
  const winner = calculateWinner(board)


  const buttonClick = (index) => {
    const boardCopy = [...board]
    let step = 0;

    if (winner || boardCopy[index]) return;
    boardCopy[index] = 'x'
    step++

    const tmpwinner = calculateWinner(boardCopy)
    if (tmpwinner === null && countStep < 8) {
      index = getNextStep(boardCopy)
      boardCopy[index] = 'o'
      step++
    }

    setCount(countStep + step)
    setBoard(boardCopy)
  }

  const startNewGame = () => {
    setBoard(Array(9).fill(null))
    setCount(0)
}
  return (
    <div className='black_back'>

      <button 
      variant={"outline-light"} 
      className="start__btn" 
      onClick={() => startNewGame()}> NEW GAME</button>

      <div className="board">
        {
          board.map((square, i) => (
            <Square
              key={i}
              value={square}
              onClick={() => buttonClick(i)} />
          ))
        }
      </div>
      <div className='game__info'> {winner ? "Победил " + winner + " !": "Ходит: X"}</div>
    </div>
  );
}

export default Game;
