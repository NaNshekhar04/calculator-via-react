//IMPORTING HOOKS AND STYLES !

import { useState } from "react";
import '../src/index.css'

function App() {

  // USING THE USESTATE HOOK 

  const [result, setResult] = useState("")


  //FUNCTION FOR HANDLING CLICK ON BUTTON PRESS!

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }
  //FUNCTION FOR HANDLING CLEARING INPUT!

  const Clear = () => {
    setResult('');
  }
  //FUNCTION FOR HANDLING BACKSPACE !

  const Backspace = () => {
    setResult(result.slice(0, result.length - 1))
  }
  //FUNCTION FOR HANDLING CALCULATIONS ON BUTTON PRESS!

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult('Error !')
    }
  }

  return (
    <>
      <div className="container">

        {/* INPUT FIELD FOR RESULT  */}
        <form>
          <input type="text" value={result} />
        </form>

        {/* ALL OF OUR BUTTONS KEYPADS ! */}

        <div className="keypad">
          <button className="highlight" onClick={Clear} id="clear">Clear</button>
          <button className="highlight" name="C" onClick={Backspace} id='backspace'>C</button>
          <button className="highlight" name="/" onClick={handleClick}>&divide;</button>

          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>

          <button className="highlight" name="*" onClick={handleClick}>&times;</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>

          <button className="highlight" name="-" onClick={handleClick}>&ndash;</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>

          <button className="highlight" name="+" onClick={handleClick}>+</button>
          <button name="0" onClick={handleClick}>0</button>
          <button name="." onClick={handleClick}>.</button>

          <button className="highlight" id="result" onClick={calculate}>=</button>
        </div>
      </div>
    </>
  );
}

export default App;
