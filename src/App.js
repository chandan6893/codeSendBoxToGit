import "./styles.css";
import React, { useState, useMemo } from "react";

export default function App() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  function increment() {
    setCountOne(countOne + 1);
  }

  function decrement() {
    setCountTwo(countTwo - 2);
  }
  // const isEven = useMemo(()=>{
  //   for(let i=0;i<10000;i++){};
  //   return countOne%2===0;
  // },[countOne])
  const isEven = () => {
    for (let i = 0; i < 10000; i++) {}
    return countOne % 2 === 0;
  };
  return (
    <div className="App">
      <button onClick={increment}>Count1:{countOne}</button>
      <button onClick={decrement}>Count2:{countTwo}</button> <br />
      <br />
      {isEven() ? "Even" : "Odd"}
    </div>
  );
}
