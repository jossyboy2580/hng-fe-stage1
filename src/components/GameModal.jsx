import "../css/GameModal.css";

const GameModal = ({ isVisible, message, type, onClose }) => {
  return (
    <div className={`modal-overlay ${isVisible ? "show" : ""}`}>
      <div className={`modal-content ${type}`}>
        <p className='yell'>{type === "success" ? "Correct" : "Oh no"}</p>
        <p>
          {type === "success"
            ? "You just earned 1 point"
            : "The correct color is"}
        </p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default GameModal;
