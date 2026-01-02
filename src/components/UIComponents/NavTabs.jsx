import "./styles.css";
import { NavLink } from "react-router-dom";

function NavTabs({ setIsOpen }) {
  return (
    <ul className="nav-tabs">
      <NavLink to="/" onClick={() => setIsOpen(false)}>
        <li>Home</li>
      </NavLink>

      <NavLink to="/Favourites" onClick={() => setIsOpen(false)}>
        <li>Favourites</li>
      </NavLink>

      <NavLink to="/Quiz" onClick={() => setIsOpen(false)}>
        <li>Quiz</li>
      </NavLink>

      <NavLink to="/About&Developer" onClick={() => setIsOpen(false)}>
        <li>About & Developer</li>
      </NavLink>
    </ul>
  );
}

export default NavTabs;
