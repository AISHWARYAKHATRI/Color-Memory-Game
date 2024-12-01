import { useEffect, useState } from "react";

const DEFAULT_COLOR = "#ffffff";

const Box = ({
  bgColor,
  onClick,
  revealedColors,
  activeColors,
}: {
  bgColor: string;
  onClick: (color: string) => void;
  revealedColors: Set<string>;
  activeColors: string[];
}) => {
  const isRevealted = revealedColors.has(bgColor);
  const [background, setBackground] = useState(
    isRevealted ? bgColor : DEFAULT_COLOR
  );

  useEffect(() => {
    if (!isRevealted && activeColors.length === 0) {
      setBackground(DEFAULT_COLOR);
    }
  }, [activeColors]);

  const handleClick = () => {
    if (activeColors.length < 2) {
      if (background !== DEFAULT_COLOR) return;
      setBackground(bgColor);
      onClick(bgColor);
    }
  };
  return (
    <div
      className="box"
      style={{
        background: background,
      }}
      onClick={handleClick}
    />
  );
};

export default Box;
