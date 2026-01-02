import { useNavigate } from "react-router-dom";
import "./styles.css";

function CountryList({country, setInfo, handleDelete}) {
  const navigate = useNavigate();

  const rateDescription =
  country.rating < 2 ? "Low" :
  country.rating < 4 ? "Below Avg" :
  country.rating < 6 ? "Okay" :
  country.rating < 8 ? "Good" :
  "Excellent";


  function handleInfo(e) {
    const target = e.target.className;
    if(target === `remove-btn`) {
      setInfo();
      handleDelete(country.id)
    }
    else {
      setInfo(()=> country)}
      navigate(`?=${country.name}`)
  }

  


  return(
    <div className="country-list" onClick={(e)=> handleInfo(e)}>
      <img src={country.flag} alt={country.name} />
      <p className="name">{country.name}</p>
      <p className="rated">⭐ {country.rating}/10</p>
      <p className="rate-description">{rateDescription}</p>
      <p className="remove-btn" onClick={(e)=> handleInfo(e)}>X</p>
    </div>
  )
}

export default CountryList;