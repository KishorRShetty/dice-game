import { useState } from "react";
import "./App.css";
import Dice from "./components/Dice";
import { nanoid } from "nanoid";

function App() {
  const [dice, setDice] = useState(allNewDice());

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function holdDice(id) {
    setDice(oldDice =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  }

  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? die : generateNewDie()
  }))
  }

  return (
    <>
      <div className="diceMain">
        {dice.map((die) => (
          <Dice
            num={die.value}
            isHeld={die.isHeld}
            key={die.id}
            holdDice={() => holdDice(die.id)}
          />
        ))}
      </div>
      <button
        className="btn"
        onClick={rollDice}
      >
        Roll
      </button>
    </>
  );
}

export default App;
