import "../css/Option.css";
import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

function Option({ option, target }) {
  const { setScore, showModal } = useContext(GameContext);
  return (
    <button
      className='color-option'
      data-testid='colorOption'
      style={{ backgroundColor: `${option}` }}
      onClick={() => {
        if (option == target) {
          showModal("You got a point!", "success");
          setScore((prev) => prev + 1);
        } else {
          showModal("You missed the question", "error");
        }
      }}
    ></button>
  );
}

export default Option;
