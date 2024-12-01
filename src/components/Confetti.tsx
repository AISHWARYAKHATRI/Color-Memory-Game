import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const ConfettiEffect: React.FC<{ show: boolean }> = ({ show }) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateWindowSize(); // Set initial size
    window.addEventListener("resize", updateWindowSize);

    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  if (!show) return null;

  return (
    <Confetti
      width={windowSize.width}
      height={windowSize.height}
      numberOfPieces={50}
      gravity={0.8}
      colors={["#FF5733", "#33FF57", "#3357FF", "#F3FF33"]}
    />
  );
};

export default ConfettiEffect;
