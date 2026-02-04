import { Loader2 } from "lucide-react";
import "./styles.css";

function LoadingPageSpinner({ type, msg = undefined, spin=true }) {
  return (
    <div className={`${type}-spinner spinner`}>
      {spin && <Loader2 className="load" />}
      <p>{msg || `Loading...`}</p>
    </div>
  );
}

export default LoadingPageSpinner;
