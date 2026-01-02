import "./styles.css";

function Button({
  children = `Button`,
  handleClick = null,
  className = `primary`,
}) {
  return (
    <button className={`button ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
