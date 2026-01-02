import { useState } from "react";

import NavTabs from "./NavTabs";
import Logo from "./Logo";
import MenuBar from "./MenuBar";
import "./styles.css";

function AppNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <ul className="nav">
        <Logo />
        <MenuBar setIsOpen={setIsOpen} isOpen={isOpen} />
      </ul>

      {isOpen && <NavTabs setIsOpen={setIsOpen} />}
    </div>
  );
}

export default AppNavigation;
