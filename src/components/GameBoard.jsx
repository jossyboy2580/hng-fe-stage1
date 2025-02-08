import { useState } from "react";
import "../css/GameBoard.css";
import Option from "./Option";

export default function GameBoard() {
  const [score, setScore] = useState(0);

  function scoreSelection() {
    dddd;
  }
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  }

  function shuffleOptions(options) {
    /* This shuffling function uses the Fisher-Yates shuffling algorithm*/
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
  }

  let options = Array();

  const handleButtonClick = () => {
    alert("i was clicked");
  };
  const targetColor = getRandomHexColor();
  options.push(targetColor);

  for (let i = 0; i < 5; i++) {
    const color = getRandomHexColor();
    options.push(color);
  }

  shuffleOptions(options);

  return (
    <div className='board'>
      <div
        className='target-color'
        style={{ backgroundColor: `${targetColor}` }}
      >
        Hidden Colour
      </div>
      <div className='options-wrapper'>
        <p className='prompt'>
          Guess the color of the card above by selecting a color from this
          options
        </p>
        <div className='color-options'>
          {options.map((option, index) => (
            <Option option={option} key={index} onClick={handleButtonClick} />
          ))}
        </div>
      </div>
    </div>
  );
}
