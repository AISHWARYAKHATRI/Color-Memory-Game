import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface RangeSliderProps {
  value: number; // Current value
  onChange: (value: number | number[]) => void; // Callback to update the parent's state
}

const RangeSlider: React.FC<RangeSliderProps> = ({ value, onChange }) => {
  return (
    <>
      <Slider value={value} min={4} max={24} step={4} onChange={onChange} />
      <p style={{ textAlign: "center", marginTop: "10px" }}>
        <strong>Boxes:</strong> {value}
      </p>
    </>
  );
};

export default RangeSlider;
