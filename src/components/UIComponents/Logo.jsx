import { Link } from "react-router-dom";
import image from "../../assets/logo.png";
import "./styles.css";

function Logo() {
  return (
    <Link to={`/`}>
      <div>
        <img src={image} alt="WorldSense-dark-logo" />
      </div>
    </Link>
  );
}

export default Logo;
