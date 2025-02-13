import "../css/GameBoard.css";
import Option from "./Option";
import { getRandomHexColor, shuffleOptions } from "../utils/utils";
import { TargetColor } from "./TargetColor";

export default function GameBoard() {
  let options = Array();
  const targetColor = getRandomHexColor();
  options.push(targetColor);

  for (let i = 0; i < 5; i++) {
    const color = getRandomHexColor();
    options.push(color);
  }

  shuffleOptions(options);

  return (
    <div className='board'>
      <TargetColor targetColor={targetColor} />
      <div className='options-wrapper'>
        <p className='prompt' data-testid='gameInstructions'>
          Guess the color of the card above by selecting a color from these
          options
        </p>
        <div className='color-options'>
          {options.map((option, index) => (
            <Option option={option} key={index} target={targetColor} />
          ))}
        </div>
      </div>
    </div>
  );
}
