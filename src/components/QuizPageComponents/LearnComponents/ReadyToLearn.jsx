import { useNavigate } from "react-router-dom";
import { useLocation } from "../../../hooks/LocationContext";
import "./styles.css";
import TitleBox from "./TitleBox";
import { Map } from "lucide-react";


function ReadyToLearn({countries, setQues}) {
    const {setQuestions} = useLocation();
    const navigate = useNavigate()

    function handleQues(country) {
        const name = country.name;
        const questions = [
            {
            id: 1,
            question: `What is the capital city of ${country.name}?`,
            difficulty: `medium`,
            incorrect_answers: [
                "Tokyo",
                "Paris",
                "Cairo",
            ],
            correct_answer: country.capital,
            },

            {
            id: 2,
            question: `${country.name} is located on which continent?`,
            incorrect_answers: [
                "Europe",
                "Asia",
                "South America",
            ],
            correct_answer: country.continent,
            },

            {
            id: 3,
            question: `Which of the following countries shares a border with ${country.name}?`,
            incorrect_answers: [
                "Brazil",
                "Canada",
                "Japan",
            ],
            correct_answer: country.borders?.[0] || "None",
            },

            {
            id: 4,
            question: `What currency is used in ${country.name}?`,
            incorrect_answers: [
                "Dollar",
                "Euro",
                "Yen",
            ],
            correct_answer: country.currency,
            },

            {
            id: 5,
            question: `Which language is commonly spoken in ${country.name}?`,
            incorrect_answers: [
                "Spanish",
                "French",
                "German",
            ],
            correct_answer: country.languages?.join(`, `),
            },

            {
            id: 6,
            question: `Which flag belongs to ${country.name}?`,
            incorrect_answers: [
                "flag1.png",
                "flag2.png",
                "flag3.png",
            ],
            correct_answer: country.flag,
            type: "image",
            },

            {
            id: 7,
            question: `The population of ${country.name} is closest to:`,
            incorrect_answers: [
                "5 m",
                "50 m",
                "200 m",
            ],
            correct_answer: formatPopulation(country.population),
            },

            {
            id: 8,
            question: `Which region best describes ${country.name}?`,
            incorrect_answers: [
                "Eastern Europe",
                "Oceania",
                "South Asia",
            ],
            correct_answer: country.continent,
            },

            {
            id: 9,
            question: `${country.capital} is the capital of which country?`,
            incorrect_answers: [
                "Italy",
                "India",
                "Mexico",
            ],
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
            <p className="err">There is no country founded!</p>
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



const formatPopulation = (num) => {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
  return num.toString();
};