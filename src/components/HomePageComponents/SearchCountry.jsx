import { useLocation } from "../../hooks/LocationContext";
import "./styles.css";

function SearchCountry() {
  const { setCountryName, setLocationMode } = useLocation();
  function handleInput(value) {
    setCountryName(()=> value);
    if(value.trim().length > 0) {
      setLocationMode(()=> `search`);
    }
    else {setLocationMode(()=> `geo`)}
  }

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Country"
        onChange={(e) => handleInput(e.target.value)}
      />
    </div>
  );
}

export default SearchCountry;
