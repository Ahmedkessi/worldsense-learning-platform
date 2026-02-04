/*
import { Link } from "react-router-dom";
import "./styles.css";
import { useLocation } from "../../../hooks/LocationContext";
import { useEffect, useState } from "react";
import Timer from "./Timer";
import { useFavourites } from "../../../hooks/FavoritesContext";


function shuffleArray(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}


const PlayQuiz = ({index, points, dispatch, secondsRemaining}) => {
  const {ques, setQues} = useFavourites()
  const [disable, setDisable] = useState(false)
  const [showNext, setShowNext] = useState(false)
  const {questions} = useLocation();
  const [locked, setLocked] = useState(false);
  console.log(ques);

  if(index+1 === questions.length+1) {
    dispatch({type:`finish`})
  }

  const currQuestion = questions[index]
  const dif = currQuestion.difficulty;
  const POINTS_PER_QUESTION = dif === `easy` ? 10 : 
                              dif === `medium` ? 20 : 30;
  const totalPoints = questions.length * POINTS_PER_QUESTION;

  const answers = shuffleArray([
    ...currQuestion.incorrect_answers,
    currQuestion.correct_answer,
  ]);
  const width = (index +1) *100/ questions.length;


  function handleNext() {
    setDisable(false)
    setShowNext(false)
    dispatch({type: `next`})
  }


  useEffect(() => {
    setLocked(false);
}, [index])


  return (
    <div className="play-quiz"> 

        <div className="play-header">
          <Link className="back-tab" to={`/Quiz/QuizDashboard`} onClick={()=> setQues({})}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" clipRule="round"></g><g id="SVGRepo_iconCarrier"> <path worldsense="evenodd" clipRule="evenodd" d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" fill="#ffffff"></path> </g></svg>
          </Link>

          <p className="questions-tracker">Questions {index+1}/{questions.length}</p>
          <p className="reset" onClick={()=> dispatch({type: `rety`})}>↩️</p>
        </div>


        <div className="game-process">
          <div  className="game-progress">
            <div style={{width:`${width}%`}} className="pro"></div>
          </div>
          <div className="game-progress-info">
            <p>Points: {points}/{totalPoints}</p>
            <p className={`${currQuestion.difficulty} dif`}>{currQuestion.difficulty}</p>
            <p>Question: {index+1}/{questions.length}</p>
          </div>
        </div>


        <div className="question-card">
          <p className="question">{decodeHTML(currQuestion.question)}</p>
        </div>


        <div className="answers">
          {answers.map((ans,i)=> 
            <Answer 
              dispatch={dispatch} ans={ans} i={i} key={i} 
              points={POINTS_PER_QUESTION} disable={disable} 
              setDisable={setDisable} 
              corrAns={currQuestion.correct_answer} 
              setShowNext={setShowNext}
              setLocked={setLocked}
              locked={locked}
              type={currQuestion?.type}
              />
           )}
        </div>


        <div className="btns">
          <button className="answer time">
            <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
          </button>
          {showNext && <button className="answer next" onClick={handleNext}>Next</button>}
          <button onClick={()=> dispatch({type: `addSec`})}>+10</button>
        </div>


    </div>
  );
};

export default PlayQuiz;



function Answer({i, ans, corrAns, disable, setDisable, type, points, dispatch, setShowNext, setLocked, locked}) {

  const corrected = ans === corrAns;
  const corrNum = corrected ? 1 : 0;
  const wrnogNum = corrected ? 0 : 1;
  const getPoints = corrected ? points : 0;


  function handleClick(){
    dispatch({type:`answered`, payload: {corrected: corrNum, wrong: wrnogNum, points: getPoints}})
    setDisable(true)
    setShowNext(true)
    setLocked(true)
  }

  return (
    <button key={i} className={`answer ${locked ? (corrected ? `correct` : `wrong`) : ``}

  }`} onClick={handleClick} disabled={disable}>

    {type === `image` ? 
      <img src={ans} alt="answer_flag" /> 
    :
      `${(i+1)} ${decodeHTML(ans)}`
    }
    </button>
  )
}






function decodeHTML(text) {
  const txt = document.createElement("textarea");
  txt.innerHTML = text;
  return txt.value;
}
  */