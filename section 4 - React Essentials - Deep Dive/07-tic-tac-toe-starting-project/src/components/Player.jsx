import { useState } from "react";
export default function Player({ name, symbol, isActive, onChangeName}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
    onChangeName(symbol, playerName);

    if (isEditing){
      onChangeName(symbol, playerName)
    } 
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick} onChange={handleChange}>
          {isEditing ? "save" : "Edit"}
        </button>
      </li>
    </>
  );
}
