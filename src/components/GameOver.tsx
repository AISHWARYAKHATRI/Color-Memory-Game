const GameOver = ({
  rounds,
  onClick,
  boxes,
}: {
  rounds: number;
  onClick: () => void;
  boxes: number;
}) => {
  return (
    <div className="gameover-container">
      <h1>
        {rounds <= Math.floor(boxes / 2)
          ? `Amazing! You took ${rounds} rounds to match all the colors with ${boxes} boxes.`
          : rounds <= boxes
          ? `Well done! You took ${rounds} rounds. `
          : `It took you ${rounds} rounds, but don't worry, practice makes perfect!`}
      </h1>
      <button className="btn" onClick={onClick}>
        Reset
      </button>
    </div>
  );
};

export default GameOver;
