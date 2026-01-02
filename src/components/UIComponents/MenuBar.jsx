import "./styles.css";

function MenuBar({ setIsOpen, isOpen }) {
  return (
    <div className="bar">
      <p onClick={() => setIsOpen((isOpen) => !isOpen)}>
        {" "}
        {isOpen ? <span>&times;</span> : `=`}
      </p>
    </div>
  );
}

export default MenuBar;
