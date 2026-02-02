import { useNavigate } from "react-router-dom";
import { useLocation } from "../../../hooks/LocationContext";
import {useFavourites} from "../../../hooks/FavoritesContext"
import "./styles.css";
import TitleBox from "./TitleBox";
import { Map } from "lucide-react";
import formatPopulation from "../../../utils/formatPopulation";


function ReadyToLearn({countries, setQues}) {
    const {setQuestions} = useLocation();
    const navigate = useNavigate()
    const {favouriteCountries} = useFavourites()

    

    function handleQues(country) {
        console.log(favouriteCountries.filter(c => c.capital !== country.capital))
        const threeCities = generateRandomArr(favouriteCountries?.filter(c => c?.capital !== country?.capital).map(c => c?.capital));
        const defaultCities = ["Tokyo","Paris","Cairo","Mogadishu",]      
        const isThreeCities = threeCities?.length === 3;

        const continents = generateRandomArr(["Europe", "Asia", "South America", "Afrika", "Antractica", "West America"], 4);
        const currencies = generateRandomArr(favouriteCountries?.filter(c => c?.currency !== country?.currency).map(c => c?.currency));

        const threeBoreders = generateRandomArr(favouriteCountries?.filter(c => c?.borders !== country?.borders).map(c => c?.borders));
        const isThreeBorders = threeBoreders.length === 3;
        const defaultBorder = ["Brazil","Canada","Japan"];

        const threeLanguages = generateRandomArr(favouriteCountries?.filter(c => c?.languages.map(l => l).map(c => !c.includes(country?.languages.join(` `)))).map(c => c?.languages.join(`, `)), 4);
        const foundLanguages = threeLanguages.filter(c => c !== country.languages.join(`, `))

        const threeFlags = generateRandomArr(favouriteCountries?.filter(c => c?.flag !== country?.flag).map(c => c?.flag));
        const threePopulation = generateRandomArr(favouriteCountries?.filter(c => c?.population !== country?.population).map(c => c?.population));
        const threeCountries = generateRandomArr(favouriteCountries?.filter(c => c?.name !== country?.name).map(c => c?.name));


        const name = country.name;
        const questions = [
            {
            id: 1,
            question: `What is the capital city of ${country.name}?`,
            incorrect_answers: isThreeCities ?
                threeCities
            :
                defaultCities.filter(c => c !== country.capital),
            correct_answer: country.capital,
            },

            {
            id: 2,
            question: `${country.name} is located on which continent?`,
            incorrect_answers: continents.filter(c => c !== country.continent),
            correct_answer: country.continent,
            },

            {
            id: 3,
            question: `Which of the following countries shares a border with ${country.name}?`,
            incorrect_answers: isThreeBorders ?
                threeBoreders.map(c => c.slice(0, 4).join(`, `))
                :
                defaultBorder,
            correct_answer: country.borders?.[0] || "None",
            },

            {
            id: 4,
            question: `What currency is used in ${country.name}?`,
            incorrect_answers: currencies.length === 3 ? 
             currencies
            :
             ["Dollar","Euro","Yen", "Bitcon"].filter(c => c !== country.currency),
            correct_answer: country.currency,
            },

            {
            id: 5,
            question: `Which language is commonly spoken in ${country.name}?`,
            incorrect_answers: threeLanguages.length === 3 ?
                foundLanguages
            :
                [
                    "Spanish",
                    "French",
                    "German",
                    "English"
                ].filter(c => !c.includes(country.languages?.join(`, `))),
            correct_answer: country.languages?.join(`, `),
            },

            {
            id: 6,
            question: `Which flag belongs to ${country.name}?`,
            incorrect_answers: threeFlags,
            correct_answer: country.flag,
            type: "image",
            },

            {
            id: 7,
            question: `The population of ${country.name} is closest to:`,
            incorrect_answers: threePopulation.length === 3 ?
                threePopulation.map(p => formatPopulation(p))
            :
                [
                    "5M",
                    "50M",
                    "200M",
                    "34M"
                ].filter(c => c !== country.population),
            correct_answer: formatPopulation(country.population),
            },

            {
            id: 8,
            question: `Which region best describes ${country.name}?`,
            incorrect_answers: continents.filter(c => c !== country.continent),
            correct_answer: country.continent,
            },

            {
            id: 9,
            question: `${country.capital} is the capital of which country?`,
            incorrect_answers: threeCountries.length === 3 ?
                threeCountries
            :
                [
                    "Italy",
                    "India",
                    "Mexico",
                    "Russia",
                ].filter(c => c !== country.capital),
            correct_answer: country.name,
            },

            {
            id: 10,
            question: `True or False: ${country.name} is located in ${country.continent}.`,
            incorrect_answers: ["False"],
            correct_answer: "True",
            type: "boolean",
            },
        ];

        setQues({name, questions});
        setQuestions(questions)
        navigate(`/Quiz/QuizGame`)
    }
    

  return (
    <div className='learn-box ready-to-learn'>
        <TitleBox title={`Ready To Learn`} />
        {countries?.length < 1 ? 
            <p className="err">No countries queued for a quiz.</p>
        : 
            <div className="boxes">
                {countries?.map(country => <CountryBox key={country.id} setQues={setQues} handleQues={handleQues} country={country} />)}
            </div>
        }
    </div>
  );
};

export default ReadyToLearn;


function CountryBox({country, handleQues}) {
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
                <p className="ove">{country.note}</p>
                <p>Capital: <span>{country.capital}</span></p>
                <p>🌟 Rated: <span>{country.rating}</span></p>
                <button onClick={()=> handleQues(country)}>Mark as Learned & Start Quiz</button>
            </div>

        </div>
    )
}



function generateRandomArr(arr, num = 3) {
   return arr.map(v => ({ v, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .slice(0, num)
    .map(({ v }) => v);
}