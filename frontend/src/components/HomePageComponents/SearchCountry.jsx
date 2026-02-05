import { useLocation } from "../../hooks/LocationContext";
import "./styles.css";
import { MapPin, SearchIcon } from "lucide-react";

function SearchCountry({setIsSearching, val, setVal}) {
  const { setCountryName, setLocationMode, setIsByTap, isDetecting, error } = useLocation();
  function handleInput(value) {
    if(value.trim().length > 0) {
      setLocationMode(()=> `search`);
    }
    else {setLocationMode(()=> `geo`)}
    setVal(()=> value)
    setCountryName(()=> value);
    setIsSearching(()=> value)
  }

  function handleClick() {
    setLocationMode(()=> `geo`);
    setVal(``)
    setIsSearching(``)
  }
console.log(error);

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
        placeholder={isDetecting && !error.length > 0 ? `Getting Your Location...`: "Search Country"}
        disabled={isDetecting && !error.length > 0}
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
