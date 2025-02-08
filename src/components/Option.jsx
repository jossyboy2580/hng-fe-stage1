import "../css/Option.css";

function Option({ option }) {
  return (
    <button className='color-option' style={{ backgroundColor: `${option}` }}>
      {option}
    </button>
  );
}

export default Option;
