import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
        <Player name={"Jugador 1"} symbol={"X"}/>
        <Player name={"Jugador 2"} symbol={"O"}/>           
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}

export default App;
