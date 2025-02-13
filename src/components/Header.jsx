import logo from "../assets/logo.png";
import "../css/Header.css";
import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

export default function Header() {
  const { score, setScore } = useContext(GameContext);
  return (
    <header className='site-header'>
      <img src={logo} alt='site-logo' className='app-logo' />
      <div className='actions-info'>
        <p>
          Score:{" "}
          <span className='score' data-testid='score'>
            {score}
          </span>
        </p>
        <button
          className='reset-btn'
          data-testid='newGameButton'
          onClick={() => {
            setScore(0);
          }}
        >
          Restart Game
        </button>
      </div>
    </header>
  );
}
