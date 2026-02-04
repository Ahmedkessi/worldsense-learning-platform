import { useLocation } from "../../hooks/LocationContext";
import "./styles.css";
import { MapPin, SearchIcon } from "lucide-react";

function SearchCountry({setIsSearching, val, setVal}) {
  const { setCountryName, setLocationMode, setIsByTap } = useLocation();
  function handleInput(value) {
    setVal(()=> value)
    setCountryName(()=> value);
    setIsSearching(()=> value)
    if(value.trim().length > 0) {
      setLocationMode(()=> `search`);
    }
    else {setLocationMode(()=> `geo`)}
  }

  function handleClick() {
    setVal(``)
    setIsSearching(``)
    setLocationMode(()=> `geo`);
  }

  return (
    <form onSubmit={(e)=> {
      e.preventDefault()
      setCountryName(val)
      setVal(``)
      setIsSearching(``)
    }}>
      <div className="search">
      <SearchIcon className="search-icon" />
      <input
        type="text"
        value={val}
        placeholder="Search Country"
        onChange={(e) => {
          setIsByTap(()=> false)
          handleInput(e.target.value)
        }}
      />
      <MapPin className="map-pin" onClick={handleClick} />
    </div>
    </form>
  );
}

export default SearchCountry;
