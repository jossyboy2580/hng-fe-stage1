/* Import styles */
import "./css/reset.css";
import "./css/App.css";
/* Import componenets */
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import GameModal from "./components/GameModal";
import StartGame from "./components/StartGame";
/* Import context */
import { GameContext } from "./contexts/GameContext";
import { useContext } from "react";

function App() {
  const { modal, hideModal, gameStarted } = useContext(GameContext);

  return (
    <>
      {gameStarted ? (
        <div>
          <GameModal
            isVisible={modal.isVisible}
            message={modal.message}
            type={modal.type}
            onClose={hideModal}
          />
          <Header />
          <GameBoard />
        </div>
      ) : (
        <StartGame />
      )}
    </>
  );
}

export default App;
