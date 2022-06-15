import { useEffect, useState } from "react";
import { Textfit } from "react-textfit";
import stringMath from "string-math";
import "./App.css";
function App() {
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [count, setCount] = useState(0);

  const inputNum = (e) => {
    const esponse = curState.split(operator).pop();
    console.log(esponse);
    if (input.includes(".") && e.target.innerText === "." && operator == null)
      return;
    if (
      operator !== null &&
      e.target.innerText === "." &&
      esponse.includes(".")
    )
      return;
    curState
      ? setCurState((pre) => pre + e.target.innerText)
      : setCurState(e.target.innerText);
  };

  useEffect(() => {
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);

  const reset = () => {
    setCurState("");
    setInput("0");
    setCount(0);
  };
  const delDigit = (e) => {
    const charRemove = curState.slice(0, -1);
    setCurState(charRemove);
    setInput(charRemove);
  };
  const percent = (e) => {
    const esponse = curState.split(operator).pop();
    const calc = esponse / 100;
    const replace = curState.replace(esponse, calc);
    setInput(replace);
    setCurState(replace);
  };
  const operatorCheck = (operator) => {
    if (
      operator === "/" ||
      operator === "*" ||
      operator === "+" ||
      operator === "-"
    ) {
      return true;
    }
  };

  const operatorType = (e) => {
    const lastIndex = curState.charAt(curState.length - 1);
    if (
      lastIndex === e.target.innerText ||
      (operatorCheck(lastIndex) === true &&
        operatorCheck(e.target.innerText) === true)
    )
      return;
    setCount((pre) => pre + 1);
    setOperator(e.target.innerText);
    if (count >= 1) {
      setCount((prev) => 1);
      setInput(stringMath(curState).toString());
      setCurState(stringMath(curState).toString());
    }
    curState
      ? setCurState((pre) => pre + e.target.innerText)
      : setCurState(e.target.innerText);
  };

  const equals = (e) => {
    setInput(stringMath(curState).toString());
    setCurState(stringMath(curState).toString());
  };

  return (
    <div className="container">
      <div className="wrapper">
        <Textfit className="screen" mode="single" max={70}>
          {input}
        </Textfit>
        <div className="btn light-gray" onClick={reset}>
          AC
        </div>
        <div className="btn light-gray" onClick={delDigit}>
          DEL
        </div>
        <div className="btn light-gray" onClick={percent}>
          %
        </div>
        <div className="btn orange" onClick={operatorType}>
          /
        </div>
        <div className="btn " onClick={inputNum}>
          7
        </div>
        <div className="btn " onClick={inputNum}>
          8
        </div>
        <div className="btn " onClick={inputNum}>
          9
        </div>
        <div className="btn orange" onClick={operatorType}>
          *
        </div>
        <div className="btn " onClick={inputNum}>
          4
        </div>
        <div className="btn " onClick={inputNum}>
          5
        </div>
        <div className="btn " onClick={inputNum}>
          6
        </div>
        <div className="btn orange" onClick={operatorType}>
          -
        </div>
        <div className="btn " onClick={inputNum}>
          1
        </div>
        <div className="btn " onClick={inputNum}>
          2
        </div>
        <div className="btn " onClick={inputNum}>
          3
        </div>
        <div className="btn orange" onClick={operatorType}>
          +
        </div>
        <div className="btn " onClick={inputNum}>
          0
        </div>
        <div className="btn " onClick={inputNum}>
          .
        </div>
        <div className="btn zero" onClick={equals}>
          =
        </div>
      </div>
    </div>
  );
}

export default App;
