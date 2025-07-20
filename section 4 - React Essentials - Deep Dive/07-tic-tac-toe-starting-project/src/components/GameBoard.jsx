import React from "react";
import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  
  function handleSelectSquare(rowIndex, colIndex) {
    // // Verificar si la casilla ya está ocupada
    // // if (gameBoard[rowIndex][colIndex] !== null) 
    // {
    //   return; // No hacer nada si la casilla ya está ocupada
    // }

    setGameBoard((prevGameBoard) => {
      const updatedBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
      // CORRECCIÓN PRINCIPAL: Asignar el valor directamente, no como objeto
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updatedBoard;
    });

    onSelectSquare();
  }

  return (
    <>
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <ol key={rowIndex}>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button 
                  onClick={() => handleSelectSquare(rowIndex, colIndex)}
                //  disabled={playerSymbol !== null} // Deshabilitar si ya está ocupada
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        ))}               
      </ol>
    </>
  );
}