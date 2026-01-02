import { useState } from "react";
import "./styles.css";
import TitleBox from "./TitleBox";
import { HeartIcon } from "lucide-react";
import CountrySummary from "./CountrySummary";



function Learned({countries}) {
  console.log(countries);
  const [currCountry, setCurrCountry] = useState();

    if(currCountry) return <CountrySummary currCountry={currCountry} setCurrCountry={setCurrCountry} />

  return (
    <div className='learn-box learned'>
        <TitleBox title={`Learned Countries`} />
        {countries?.length < 1 ? 
            <p className="err">There is no country you learned!</p>
        : 
            <div className="boxes">
                {countries?.map(country => <CountryBox setCurrCountry={setCurrCountry} key={country.id} country={country} />)}
            </div>
        }
    </div>
  );
};

export default Learned;



function CountryBox({country, setCurrCountry}) {
    return (
        <div className="country-box">

            <div className="top">
                <img src={country.flag} alt={country.name} />
                <h4>{country.name}</h4>
                <div className="con">
                    <HeartIcon className="heart" />
                    <p>{country.accuracy < 87 ? `Perfect` : `Experted`}</p>
                </div>
            </div>

            <div className="main-box">
                <p>Completed</p>
                <p>Score: <span>{country.score.split(` `).join(``)}</span></p>
                <p>Accuracy: <span>{country.accuracy}%</span></p>
                <button onClick={()=> setCurrCountry(()=> country)}>View Summary</button>
            </div>

        </div>
    )
}