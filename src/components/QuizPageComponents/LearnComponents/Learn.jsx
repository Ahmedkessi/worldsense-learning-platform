import { Link } from "react-router-dom";
import "./styles.css";
import Head from "./Head";
import ReadyToLearn from "./ReadyToLearn";
import NotLearned from "./NotLearned";
import Learned from "./Learned";
import { useSelector } from "react-redux";
import { useFavourites } from "../../../hooks/FavoritesContext";


function Learn() {
    const {setQues} = useFavourites();
    const countries = useSelector(store => store?.user?.favouriteCountries);
    const notLearned = countries?.filter(c => c?.status === `notLearned`)
    const learned = countries?.filter(c => c?.status === `learned`)
    const readyToLearn = countries?.filter(c => c?.status === `readyToLearn`)
    


  return (
    <div className="learn-page">
        <div className="nav">
            <h3 className="quiz-tab">
                <Link to={`/Quiz`}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" clipRule="round"></g><g id="SVGRepo_iconCarrier"> <path worldsense="evenodd" clipRule="evenodd" d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" fill="#ffffff"></path> </g></svg>
                    <span>Back</span>
                </Link>
            </h3>
        </div>

        <Head countries={countries} learned={learned} inprogress={readyToLearn} />

        <div className="learn-main">
            <ReadyToLearn setQues={setQues} countries={readyToLearn} />
            <NotLearned countries={notLearned} />
            <Learned countries={learned} />
        </div>
    


    </div>
  );
};

export default Learn;