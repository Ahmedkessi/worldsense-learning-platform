import { useNavigate } from "react-router-dom";
import "./styles.css";
import formatPopulation from "../../utils/formatPopulation";


function CountryInfo({country, setInfo}) {
  const navigate = useNavigate()

  function handleClose() {
    setInfo()
    navigate();
  }


 return(
    <div className="info-page">
      <div className="country-information">

      <div className="top">
        <img src={country.flag} alt={country.name} />
        <p className="name">{country.name}</p>
      </div>

      <div className="middle">
        <p>Continent: <span>{country.continent}</span></p>
        <p>Capital: <span>{country.capital}</span></p>
        <p>Population: <span>{formatPopulation(country.population)}</span></p>
        <p>Languages: <span>{country.languages}</span></p>
        <p>Currency: <span>{country.currency}</span></p>
      </div>

     <div className="bottom">
        <p className="rated">Rated: <span>⭐ {country.rating}/10</span></p>
        <p>visited: <span>{country.visited}</span></p>
        <p>want to visit: <span>{country.hopeToVisit}</span></p>
     </div>
      
      <div>
        <p className="c-i-close" onClick={handleClose}>X</p>
      </div>

    </div>
    </div>
 )
}

export default CountryInfo;