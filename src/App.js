import { useState } from "react";
import "./App.css";

const cardImages = [
  { src: "/img/robot-01.png" },
  { src: "/img/robot-02.png" },
  { src: "/img/robot-03.png" },
  { src: "/img/robot-04.png" },
  { src: "/img/robot-05.png" },
  { src: "/img/robot-06.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
  );
}

export default App;
