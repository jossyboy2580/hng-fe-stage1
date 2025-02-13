/* Import styles */
import "./css/reset.css";
import "./css/App.css";
/* Import componenets */
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import GameModal from "./components/GameModal";
/* Import Context creation tools */
import { useState, createContext } from "react";

export const ScoreContext = createContext(null);

function App() {
  const [modal, setModal] = useState({
    isVisible: false,
    message: "",
    type: "",
  });

  const showModal = (message, type) => {
    setModal({ isVisible: true, message, type });
  };

  const hideModal = () => {
    setModal({ isVisible: false, message: "", type: "" });
  };

  const [score, setScore] = useState(0);
  return (
    <ScoreContext.Provider value={{ score, setScore, showModal, hideModal }}>
      <GameModal
        isVisible={modal.isVisible}
        message={modal.message}
        type={modal.type}
        onClose={hideModal}
      />
      <Header />
      <GameBoard />
    </ScoreContext.Provider>
  );
}

export default App;
