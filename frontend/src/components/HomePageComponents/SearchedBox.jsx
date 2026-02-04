import { Loader } from "lucide-react";
import { useLocation } from "../../hooks/LocationContext";
import "./styles.css";

const SearchedBox = ({setIsSearching, isLoading, countries, setVal}) => {
    const {setCountryName} = useLocation();

    if(!countries) return;

  return (
    <div className="searched-box">
        {isLoading ?
            <div className="loading-box">
                <Loader className="load" />
            </div>
        :
            countries.map((country,i)=> <ResultList setIsSearching={setIsSearching} setVal={setVal} country={country} setCountry={setCountryName} key={i} />)
        }
    </div>
  );
};

export default SearchedBox;


function ResultList({setCountry, country, setVal,setIsSearching}) {
    function handleClick() {
        setVal(``)
        setCountry(country?.name?.common)
        setIsSearching(``)
    }

    console.log(country);

    return(
        <>
            <li onClick={handleClick}>
                <img src={country?.flags?.png || `#`} alt={country?.name?.common} />
                <p>{country?.name?.common}</p>
            </li>
        </>
    )
}