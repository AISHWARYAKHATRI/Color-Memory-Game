import { useState } from "react";

import Instructions from "./components/Instructions";
import "./App.css";
import Game from "./Game";

function App() {
  const [total, setTotal] = useState<number>(12);

  const onChange = (val: number | number[]) => {
    if (!Array.isArray(val)) setTotal(val);
  };
  return (
    <div className="grid-container">
      <Instructions value={total} onChange={onChange} />
      <Game total={total} />
    </div>
  );
}

export default App;
