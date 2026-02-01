import { useDispatch } from "react-redux";
import "./styles.css";
import TitleBox from "./TitleBox";
import { Map } from "lucide-react";
import { addToLearning } from "../../../features/QuizSlice";
import { useState } from "react";
import CountrySummary from "./CountrySummary";


function NotLearned({countries}) {
    const dispatch = useDispatch()
    console.log(countries);
    const [currCountry, setCurrCountry] = useState();

    if(currCountry) return <CountrySummary currCountry={currCountry} setCurrCountry={setCurrCountry} />

    

    function handleLearning(id) {
        dispatch(addToLearning(id))
    }
    

  return (
    <div className='learn-box not-learned'>
        <TitleBox title={`Not Learned Yet`} />
        {countries?.length < 1 ? 
            <p className="err">All caught up! Every country is on your radar.</p>
        :
            <div className="boxes">
                {countries?.map(country => <CountryBox key={country.id} handleLearning={handleLearning} country={country} setCurrCountry={setCurrCountry} />)}
            </div>
        }
    </div>
  );
};

export default NotLearned;



function CountryBox({country, handleLearning, setCurrCountry}) {
    return (
        <div className="country-box">

            <div className="top">
                <img src={country.flag} alt={country.name} />
                <h4>{country.name}</h4>
                <div className="con">
                    <Map />
                    <p>{country.continent}</p>
                </div>
            </div>

            <div className="main-box">
                <p>Capital: <span>{country.capital}</span></p>
                <p>🌟Rated: <span>{country.rating}</span></p>
                <div className="btns">
                    <button onClick={()=> setCurrCountry(()=>country)}>Explore Country</button>
                    <button onClick={()=> handleLearning(country.id)}>Add to learning</button>
                </div>
            </div>

        </div>
    )
}