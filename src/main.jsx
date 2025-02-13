import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";
import GameProvider from "./contexts/GameContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </StrictMode>
);
