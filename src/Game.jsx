import React from 'react';
import Dino from "./Dino.jsx"

const Game = () => {
  return (
    <div id="desert">
      <h2 id="alert" />
      <div class="grid">
        <Dino />
      </div>
    </div>
  );
}

export default Game;
