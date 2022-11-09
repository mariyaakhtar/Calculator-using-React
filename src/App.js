import { useState } from "react";

import * as math from "mathjs";

import "./App.css";
import Keypad from "./components/Keypad";
import Input from "./components/Input";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addToText = (val) => {
    setText((text) => [...text, val + " "]);
  };

  const calculateResult = () => {
    const input = text.join("");

    setResult(math.evaluate(input));
  };

  const resetInput = () => {
    setText("");
    setResult("");
  };

  const buttonColor = "#0A0908";

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />
        <div className="row">
          <Keypad symbol="7" handleClick={addToText} />
          <Keypad symbol="8" handleClick={addToText} />
          <Keypad symbol="9" handleClick={addToText} />
          <Keypad symbol="/" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Keypad symbol="4" handleClick={addToText} />
          <Keypad symbol="5" handleClick={addToText} />
          <Keypad symbol="6" handleClick={addToText} />
          <Keypad symbol="*" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Keypad symbol="1" handleClick={addToText} />
          <Keypad symbol="2" handleClick={addToText} />
          <Keypad symbol="3" handleClick={addToText} />
          <Keypad symbol="+" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Keypad symbol="0" handleClick={addToText} />
          <Keypad symbol="." handleClick={addToText} />
          <Keypad symbol="=" handleClick={calculateResult} />
          <Keypad symbol="-" color={buttonColor} handleClick={addToText} />
        </div>
        <Keypad symbol="Clear" color={"#343a40"} handleClick={resetInput} />
      </div>
    </div>
  );
};

export default App;
