

export default function GameBoard({ onSelectSquare,  board }) {
  

  return (
    <>
      <ol id="game-board">
        {board.map((row, rowIndex) => (
          <ol key={rowIndex}>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button 
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled ={playerSymbol !== null}
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