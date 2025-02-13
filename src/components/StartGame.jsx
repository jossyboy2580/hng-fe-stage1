import logo from "../assets/logo.png";
import "../css/StartGame.css";
import { GameContext } from "../contexts/GameContext";
import { useContext } from "react";

function StartGame() {
  const { setGameStarted } = useContext(GameContext);
  return (
    <div className='start-game-container'>
      <div className='start-game-header'>
        <img src={logo} alt='the logo of the colour guessing game' />
      </div>
      <div>
        <p className='game-information'>
          This is a colour guessing game, you are given 6 options to choose
          from, click on a colour of your choice which represents your guess of
          the colour in the box above (which is hidden by default)
        </p>
        <button
          className='start-game btn'
          onClick={() => {
            setGameStarted(true);
          }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

export default StartGame;
