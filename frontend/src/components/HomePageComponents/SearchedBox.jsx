import { Loader } from "lucide-react";
import { useLocation } from "../../hooks/LocationContext";
import "./styles.css";

const SearchedBox = ({setIsSearching, isLoading, countries, setVal}) => {
    const {setCountryName, setIsByTap} = useLocation();

    if(!countries) return;

  return (
    <div className="searched-box">
        {isLoading ?
            <div className="loading-box">
                <Loader className="load" />
            </div>
        :
            countries.map((country,i)=> <ResultList setIsByTap={setIsByTap} setIsSearching={setIsSearching} setVal={setVal} country={country} setCountryName={setCountryName} key={i} />)
        }
    </div>
  );
};

export default SearchedBox;


function ResultList({setCountryName, country, setVal,setIsSearching, setIsByTap}) {
    function handleClick() {
        
        setVal(``)
        setCountryName(country?.name?.common)
        setIsSearching(``)
    }


    return(
        <>
            <li onClick={handleClick}>
                <img src={country?.flags?.png || `#`} alt={country?.name?.common} />
                <p>{country?.name?.common}</p>
            </li>
        </>
    )
}