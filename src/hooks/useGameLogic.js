import { useEffect, useState } from "react";

export const useGameLogic = (cardValues) => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const shufleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const initializeGame = () => {
    // SHUFFLE THE CARDS

    const shuffled = shufleArray(cardValues);
    const finalCards = shuffled.map((value, index) => ({
      id: index,
      value,
      isFlipped: false,
      isMatched: false,
    }));
    setCards(finalCards);
    setIsLocked(false);
    setMoves(0);
    setScore(0);
    setFlippedCards([]);
    setMatchedCards([]);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    initializeGame();
  }, []);

  const handleCards = (card) => {
    // Don't allow clicking if card is already flipped or matched
    if (
      card.isFlipped ||
      card.isMatched ||
      isLocked ||
      flippedCards.length === 2
    ) {
      return;
    }

    // Update card flipped state
    const newCards = cards.map((c) => {
      if (c.id === card.id) {
        return { ...c, isFlipped: true };
      } else {
        return c;
      }
    });
    setCards(newCards);
    const newFlippedCards = [...flippedCards, card.id];
    setFlippedCards(newFlippedCards);

    // check for match if two cards are flipped
    if (flippedCards.length === 1) {
      setIsLocked(true);
      const firstCard = cards[flippedCards[0]];

      if (firstCard.value === card.value) {
        setTimeout(() => {
          setMatchedCards((prev) => [...prev, firstCard.id, card.id]);
          setScore((prev) => prev + 1);
          setCards((prev) =>
            prev.map((c) => {
              if (c.id === card.id || c.id === firstCard.id) {
                return { ...c, isMatched: true };
              } else {
                return c;
              }
            }),
          );
          setFlippedCards([]);
          setIsLocked(false);
        }, 1000);
      } else {
        // Flip back card 1, card 2
        setTimeout(() => {
          const flippedBackCards = newCards.map((c) => {
            if (newFlippedCards.includes(c.id) || c.id === card.id) {
              return { ...c, isFlipped: false };
            } else {
              return c;
            }
          });
          setCards(flippedBackCards);
          setFlippedCards([]);
          setIsLocked(false);
        }, 1000);
      }
      setMoves((prev) => prev + 1);
    }
  };
  const isGameComplete = matchedCards.length === cardValues.length;
  return {
    cards,
    score,
    moves,
    isGameComplete,
    initializeGame,
    handleCards,
  };
};
