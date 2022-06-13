import { useEffect, useState } from "react";
import { Textfit } from "react-textfit";
import "./App.css";
function App() {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    if (input.includes(".") && e.target.innerText === ".") return;

    if (total) {
      setPreState("");
    }

    curState
      ? setCurState((pre) => pre + e.target.innerText)
      : setCurState(e.target.innerText);
    setTotal(false);
  };

  useEffect(() => {
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);

  const reset = () => {
    setPreState("");
    setCurState("");
    setInput("0");
  };
  const minusPlus = (e) => {};
  const percent = (e) => {
    const esponse = curState.split(operator).pop();
    const calc = esponse / 100;
    const replace = curState.replace(esponse, calc);
    setInput(replace);
    setCurState(replace);
  };
  const operatorType = (e) => {
    setOperator(e.target.innerText);
    curState
      ? setCurState((pre) => pre + e.target.innerText)
      : setCurState(e.target.innerText);
  };
  const equals = (e) => {
    setInput(eval(curState));
    setCurState(eval(curState));
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
        <div className="btn light-gray" onClick={minusPlus}>
          +/-
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
