import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div id="screen"></div>
      <div className="button-ctnr">
        <Button isOperator={false}>1</Button>
        <Button isOperator={false}>2</Button>
        <Button isOperator={false}>3</Button>
        <Button isOperator={true}>+</Button>
      </div>
      <div className="button-ctnr">
        <Button isOperator={false}>4</Button>
        <Button isOperator={false}>5</Button>
        <Button isOperator={false}>6</Button>
        <Button isOperator={true}>-</Button>
      </div>
      <div className="button-ctnr">
        <Button isOperator={false}>7</Button>
        <Button isOperator={false}>8</Button>
        <Button isOperator={false}>9</Button>
        <Button isOperator={true}>x</Button>
      </div>
      <div className="button-ctnr">
        <Button isOperator={true}>/</Button>
        <Button isOperator={true}>=</Button>
        <Button>C</Button>
      </div>
    </div>
  );
}

export default App;
