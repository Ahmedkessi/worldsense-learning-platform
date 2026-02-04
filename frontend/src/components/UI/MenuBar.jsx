import "./styles.css";
import { MenuIcon } from "lucide-react";
import { XIcon } from "lucide-react";

function MenuBar({ setIsOpen, isOpen }) {
  return (
    <div className="bar">
      <p onClick={() => setIsOpen((isOpen) => !isOpen)}>
        {" "}
        {isOpen ? <span><XIcon /></span> : <MenuIcon />}
      </p>
    </div>
  );
}

export default MenuBar;
