import logo from "../assets/logo.png";
import "../css/Header.css";

export default function Header() {
  return (
    <header className='site-header'>
      <img src={logo} alt='site-logo' className='app-logo' />
      <div className='actions-info'>
        <p>
          Score: <span className='score'>400</span>
        </p>
        <button className='reset-btn'>Restart Game</button>
      </div>
    </header>
  );
}
