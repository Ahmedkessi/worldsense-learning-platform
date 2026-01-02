import "./styles.css";

function LoadingPageSpinner({ type, msg = undefined }) {
  return (
    <div className={`${type}-spinner`}>
      <p>{msg || `Loading...`}</p>
    </div>
  );
}

export default LoadingPageSpinner;
