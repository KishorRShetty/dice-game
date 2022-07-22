import { useState } from 'react';
import './App.css';
import Dice from './components/Dice';

function App() {

  const [dice, setDice] = useState(allNewDice())

  function generateNewDie() {
    return Math.ceil(Math.random() * 6);
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 1; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  return (
    <div className="diceMain">
      <Dice num="1" />
      {dice.map(die => (
        <Dice num={die} />
      ))}
    </div>
  );
}

export default App;
