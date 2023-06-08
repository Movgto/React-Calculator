import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Screen from './components/Screen';
import {evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  const [syntaxErr, setSyntaxErr] = useState(false);

  const operatorClickHandler = value =>{

    if (input.length > 70) return;

    if(syntaxErr) {
      setInput(value);
      setSyntaxErr(false);
      return;
    }

    setInput(input + value);
  };

  const clearClickHandler = () => {
    setInput('');
  };

  const resultClickHandler = () => {

  const syntaxErrorRegEx = /(\*{3})|([.+-/]{2})|(\.\d+\.\d*)|(\.[+-/*])|(^[.+-/*]+$)/ig;

    if (syntaxErrorRegEx.test(input)) {
      setInput('Syntax Error');
      setSyntaxErr(true);
      return;
    }

    let result = evaluate(input);
    setInput(result);
  };

  return (
    <div className="App">
      <Screen input={input} />
      <div className="button-ctnr">
        <Button clickHandler={operatorClickHandler}>1</Button>
        <Button clickHandler={operatorClickHandler}>2</Button>
        <Button clickHandler={operatorClickHandler}>3</Button>
        <Button clickHandler={operatorClickHandler}>+</Button>
      </div>
      <div className="button-ctnr">
        <Button clickHandler={operatorClickHandler}>4</Button>
        <Button clickHandler={operatorClickHandler}>5</Button>
        <Button clickHandler={operatorClickHandler}>6</Button>
        <Button clickHandler={operatorClickHandler}>-</Button>
      </div>
      <div className="button-ctnr">
        <Button clickHandler={operatorClickHandler}>7</Button>
        <Button clickHandler={operatorClickHandler}>8</Button>
        <Button clickHandler={operatorClickHandler}>9</Button>
        <Button clickHandler={operatorClickHandler}>*</Button>
      </div>
      <div className="button-ctnr">
        <Button clickHandler={operatorClickHandler}>.</Button>
        <Button clickHandler={operatorClickHandler}>0</Button>
        <Button clickHandler={operatorClickHandler}>/</Button>
        <Button clickHandler={resultClickHandler}>=</Button>
      </div>
      <div className="button-ctnr">
        <Button customClass={true} classValue='clear-btn' clickHandler={clearClickHandler}>Clear</Button>
      </div>
    </div>
  );
}

export default App;
