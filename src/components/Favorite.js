import React from "react";
import "../styles.css";

export default function Favorite({ players }) {
  if (!Array.isArray(players)) {
    return <p>Players Not Available !!</p>;
  }

  return (
    <div>
      <div></div>
      <h2 className="player-name">Favorite Players</h2>
      {players.length === 0 ? (
        <p>No players in Favorites</p>
      ) : (
        <ul>
          {players.map((player, index) => (
            <li key={index} className="player">
              <p>
                <img src={`images/${player.image}`} alt={player.name} />
              </p>
              {player.name} - {player.ppg}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}