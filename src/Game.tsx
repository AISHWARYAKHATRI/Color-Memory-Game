import { useEffect, useState } from "react";
import Box from "./components/Box";
import GameOver from "./components/GameOver";
import { generateBoxes } from "./utils/helperFunctions";
import ConfettiEffect from "./components/Confetti";

/** We need to build a grid N*M
 * M = 4 (column) N = total / M => 12 / 4 = 3 (rows)
 * Game skeleton, render a basic grid
 * Render boxes and have the logic of color rendering
 * Handle interactivity => click handlers and state management
 * Game over screen with reset functionality
 */
const Game = ({ total }: { total: number }) => {
  const [activeColors, setActiveColors] = useState<string[]>([]);
  const [revealedColors, setRevealedColors] = useState<Set<string>>(new Set());
  const [roundCount, setRoundCount] = useState<number>(0);
  const [boxes, setBoxes] = useState(generateBoxes(total));
  /**
   * Eg Total 12
   * Colors = 6
   * 2 boxes will have the same color to make a pair
   * Randomize it
   * Render the UI
   */
  useEffect(() => {
    resetGame();
  }, [total]);

  const handleClick = (currentSelectedColor: string) => {
    if (activeColors.length === 0) {
      setActiveColors([currentSelectedColor]);
      return;
    }
    if (activeColors[0] === currentSelectedColor) {
      setRevealedColors((prev) => new Set(prev.add(currentSelectedColor)));
      setActiveColors([]);
    } else {
      setActiveColors((prev) => [...prev, currentSelectedColor]);
      setTimeout(() => {
        setActiveColors([]);
      }, 400);
    }
    setRoundCount((prev) => prev + 1);
  };

  const resetGame = () => {
    setActiveColors([]);
    setRevealedColors(new Set());
    setRoundCount(0);
    setBoxes(generateBoxes(total));
  };

  return (
    <div className="game-container">
      {revealedColors.size === total / 2 ? (
        <>
          <ConfettiEffect show={true} />
          <GameOver rounds={roundCount} onClick={resetGame} boxes={total} />
        </>
      ) : (
        <div className="boxes">
          {boxes.map((box) => (
            <Box
              key={box.id}
              bgColor={box.bgColor}
              onClick={handleClick}
              revealedColors={revealedColors}
              activeColors={activeColors}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Game;
