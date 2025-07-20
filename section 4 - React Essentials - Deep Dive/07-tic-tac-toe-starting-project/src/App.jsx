import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [activePlayers, setActivePlayers] = useState('X');

  function handlePlayerChange() { 
    setActivePlayers((prevActivePlayer) => (prevActivePlayer === 'X' ? 'O' : 'X'));
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player active-player">
        <Player name={"Jugador 1"} symbol={"X"} isActive={activePlayers === 'X'}/>
        <Player name={"Jugador 2"} symbol={"O"} isActive={activePlayers === 'O'}/>           
        </ol>
        <GameBoard onSelectSquare={handlePlayerChange} activePlayerSymbol={activePlayers}/>
      </div>
    </main>
  );
}

export default App;
