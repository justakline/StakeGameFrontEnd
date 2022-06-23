import "./Input.css";

const Input = ({ bntText, ...rest }) => {
  return (
    <div className="cusInput">
      <input type="number" min="0" {...rest} />
      {bntText && <button>{bntText}</button>}
    </div>
  );
};

export default Input;
