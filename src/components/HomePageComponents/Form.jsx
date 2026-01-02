import "./styles.css";
import Button from "../UIComponents/Button";
import StarRating from "../UIComponents/StarRating";
import { useState } from "react";
import { useLocation } from "../../hooks/LocationContext";
import {useFavourites} from "../../hooks/FavoritesContext";
import LoadingPageSpinner from "../UIComponents/LoadingPageSpinner";
import { useDispatch } from "react-redux";
import { addFavouriteCountry } from "../../features/QuizSlice";
import Error from "../UIComponents/Error";


function Form() {
  const dispatch = useDispatch()
  const [rating, setRating] = useState(0);
  const {country, images, countryDescription} = useLocation();
  const [visited, setVisited] = useState(`choose`);
  const [hopeToVisit, setHopeToVisit] = useState(`choose`);
  const [note, setNote] = useState("");
  const [defaultRating, setDefaultRating] = useState(-2)
  const {favouriteCountries, setFavouriteCountries} = useFavourites();
  const [accErr, setAccErr] = useState(``)

  const prevCountries = favouriteCountries.filter((data)=> data?.name === country?.name?.common)  
  if(!country || !countryDescription) return;



  function handlerSubmit(e) {
    e.preventDefault();
    if(!localStorage.getItem(`WorldWise_currentUser`)) {
      setAccErr(`You have not Quiz Account! please go to QUIZ and create an account.`)
      return;
    }
    setAccErr(``)
    const languages = Object.values(country.languages);
    const currency = Object.values(country.currencies)[0]?.name;
    const id = crypto.randomUUID().slice(0,9);


    if(hopeToVisit === `choose` || visited === `choose` || note.length === 0) return;

    const currCountry = {
      id,
      name: country.name.common,
      capital: country.capital[0],
      continent: country.continents[0],
      borders: country.borders,
      currency,
      languages,
      flag: country.flags.png,
      population: country.population,
      visited,
      hopeToVisit,
      note,
      rating,
      images,
      countryDescription,
    }
    setFavouriteCountries((data)=> [...data, currCountry]);
    setRating(0);
    setVisited(`choose`);
    setHopeToVisit(`choose`);
    setNote("");
    setDefaultRating(-1);
    dispatch(addFavouriteCountry({...currCountry, status:`notLearned`, accuracy: 0, score: 0}))
  }

  
  


  return (
    prevCountries.length > 0 ?
        <LoadingPageSpinner msg={`You’ve already saved ${country.name.common} ✨`} type={`small`} />

    :

    <form className="form" onSubmit={handlerSubmit}>
      <h4>Save This Place🗺️</h4>
      <p className="subtitle">
        Rate it and choose how this country fits your journey
      </p>

      {accErr.length > 0 &&
      <Error type={`small`} msg={accErr} />}

      <div className="form-que">
        <div className="select">
          <label htmlFor="visited">Have you ever visited {country?.name?.common}?</label>
          <select name="visited" value={visited} onChange={(e)=> setVisited(e.target.value)}>
            <option value={`choose`} hidden>choose</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="select">
          <label htmlFor="Want to visit">
            Would you like to visit {country?.name?.common} in the future?
          </label>
          <select name="Want to visit" value={hopeToVisit} onChange={(e)=> setHopeToVisit(e.target.value)}>
            <option value={`choose`} hidden>choose</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="rate">
          <p>How would you rate {country?.name?.common}?</p>
          <div className="rating">
            <StarRating onSetRating={setRating} maxRating={10} size={22} defaultRating={defaultRating} />
          </div>
          {rating > 0 && <p>You rated {country?.name?.common} {rating}/10 ⭐</p>}
        </div>

        <div className="description">
          <textarea value={note} placeholder="Write Note..." onChange={(e)=> setNote(e.target.value)}></textarea>
        </div>
      </div>

      <div className="btns">
        <Button>Close</Button>
        <Button>Save</Button>
      </div>
    </form>
  );
}

export default Form;