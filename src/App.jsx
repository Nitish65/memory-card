import Card from "./components/Card";
import GameHeader from "./components/GameHeader";
import WinMessage from "./components/WinMessage";
import { useGameLogic } from "./hooks/useGameLogic";

const cardValues = [
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
];

function App() {
  const { cards, score, moves, isGameComplete, initializeGame, handleCards } =
    useGameLogic(cardValues);
  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initializeGame} />
      {isGameComplete && <WinMessage moves={moves} />}
      <div className="cards-grid">
        {cards.map((card) => (
          <Card card={card} onClick={handleCards} />
        ))}
      </div>
    </div>
  );
}

export default App;
