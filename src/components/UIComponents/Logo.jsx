import { Link } from "react-router-dom";
import image from "../../assets/logo.png";
import "./styles.css";

function Logo() {
  return (
    <Link to={`/`}>
      <div className="logo-box">
        <img src={image} alt="WorldSense-logo" />
      </div>
    </Link>
  );
}

export default Logo;
