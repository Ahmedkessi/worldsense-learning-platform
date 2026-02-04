import "./styles.css";

function Error({ msg, type }) {
  return (
    <div className={`${type}-error`}>
      <p>{msg}</p>
    </div>
  );
}

export default Error;
