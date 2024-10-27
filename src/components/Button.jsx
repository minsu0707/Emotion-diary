import "./Button.css";

export const Button = ({ text, type, onClick }) => {
  return (
    <button onClick={onClick} className={`Button Button_${type}`}>
      {text}
    </button>
  );
};
