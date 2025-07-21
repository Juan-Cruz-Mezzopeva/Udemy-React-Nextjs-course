import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [activePlayers, setActivePlayers] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  function handlePlayerChange(rowIndex, colIndex) {
    setActivePlayers((prevActivePlayer) =>
      prevActivePlayer === "X" ? "O" : "X"
    );
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  
    return (
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player active-player">
            <Player
              name={"Jugador 1"}
              symbol={"X"}
              isActive={activePlayers === "X"}
            />
            <Player
              name={"Jugador 2"}
              symbol={"O"}
              isActive={activePlayers === "O"}
            />
          </ol>
          <GameBoard
            onSelectSquare={handlePlayerChange}
            turns={gameTurns}
          />
        </div>
        <Log />
      </main>
    );
}
export default App;
