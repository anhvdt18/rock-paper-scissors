import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [play, setPlay] = useState("LET PLAY");

  let playerHand;
  let npcHand;

  const match = () => {
    let a = playerHand + npcHand;
    console.log(a, "a is here");
    if (a === "11" || a === "22" || a === "33") {
      setPlay("PEACE");
    } else if (a === "13" || a === "21" || a === "32") {
      setPlay("YOU WIN");
    } else {
      setPlay("YOU LOST");
    }
    return;
  };

  let color =
    play === "YOU WIN" ? "green" : play === "YOU LOST" ? "red" : "blue";

  const rock = () => {
    npcHand = npcPlay();
    playerHand = "1";
    match();
    console.log(playerHand + npcHand, "ROCK");
  };
  const paper = () => {
    npcHand = npcPlay();
    playerHand = "2";
    match();
    console.log(playerHand + npcHand, "PAPER");
  };
  const cissors = () => {
    npcHand = npcPlay();
    playerHand = "3";
    match();
    console.log(playerHand + npcHand, "CISSORS");
  };

  const npcPlay = (min = 1, max = 3) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="container">
      <label className="label">Result</label>
      <span style={{ color }} className="result">
        {play}
      </span>
      <div className="team-play">
        <div className="player-icon">👤</div>
        <label className="label">VS</label>
        <div className="player-icon">🖥</div>
      </div>
      <div className="choice-group">
        <span onClick={rock} className="hand-choice">
          👊
        </span>
        <span onClick={paper} className="hand-choice">
          🖐
        </span>
        <span onClick={cissors} className="hand-choice">
          ✌
        </span>
      </div>
    </div>
  );
};

export default App;
