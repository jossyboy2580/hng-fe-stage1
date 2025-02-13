import { createContext, useState } from "react";

export const GameContext = createContext(null);

const GameProvider = ({ children }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
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

  const value = {
    gameStarted,
    setGameStarted,
    score,
    setScore,
    hideModal,
    showModal,
    modal,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export default GameProvider;
