import color from "../../public/color.png";
import RangeSlider from "./RangeSlider";

interface InstructionProps {
  value: number;
  onChange: (val: number | number[]) => void;
}

const Instructions = ({ value, onChange }: InstructionProps) => {
  return (
    <div className="instructions-container">
      <div className="logo-container">
        <img src={color} alt="Color Memory Game" width="100%" />
        <h3 className="pinkish-red">ColorMemory</h3>
      </div>
      <h2 className="pinkish-red">How to Play the Color Memory Game</h2>
      <ol style={{ padding: "20px" }}>
        <li>
          <strong>Goal:</strong> Match all the color pairs with the fewest
          moves.
        </li>
        <li>
          <strong>Play:</strong>
          <ul>
            <li>Click a box to reveal its color.</li>
            <li>Click another box to find its match.</li>
            <li>
              If the colors match, they stay revealed. If not, they reset after
              a moment.
            </li>
          </ul>
        </li>
        <li>
          <strong>Win:</strong> Reveal all pairs to finish the game!
        </li>
        <li>
          <strong>Restart:</strong> Click "Restart" to shuffle and play again.
        </li>
      </ol>
      <p style={{ margin: "1rem 0" }} className="pinkish-red">
        <strong>Tip:</strong> Remember the colors and their positions to match
        faster! 🎯
      </p>
      <RangeSlider value={value} onChange={onChange} />
    </div>
  );
};

export default Instructions;
