import "./styles.css";

function Button({
  children = `Button`,
  handleClick = null,
  className = `primary`,
  newStyle = ``,
}) {
  return (
    <button className={`${newStyle.length > 0 ? newStyle + `p-52`: `button ${className}` }`} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
