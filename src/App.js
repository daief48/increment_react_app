import { useState } from "react";
import React from "react";
function App() {
  let [num,setnum] = useState(1);
  const incre = () => {
    num ++;
    setnum(num);
  }
  const decre = () => {
    num --;
    setnum(num);
  }
  return (
    <div className="box">
      <div className="increment">
      <h1>{num}</h1>
      <div className="btn">
      <button onClick={incre}>Increment</button>
      <button onClick={decre}>Decrement</button>
      </div>
    </div>
    </div>
  );
}

export default App;
