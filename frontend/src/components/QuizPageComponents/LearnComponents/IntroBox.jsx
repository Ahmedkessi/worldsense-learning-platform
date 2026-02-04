import "./styles.css";

function InroBox() {


  function boxStyle(top, left) {
    return {
      height: `13px`,
      width: `13px`,
      background: `rgba(255, 0, 255, 0.32)`,
      position: `absolute`,
      transform: `rotate(40deg)`,
      top: `${top}px`,
      left: `${left}px`
    }
  }


  return (
    <div className="intro-box">
        <p className="hi">Hi Ahmed!</p>
        <p>Welcome to the <strong>Worldwise Quiz Game</strong> 🌍</p>
        <p>Are you ready to unlock new knowledge about your favourite countries?</p>
        <p>In this quiz game, you’ll answer questions about the countries you’ve saved.</p>
        <p>Make sure to review your Favourites page and learn about each country to boost your chances of success.</p>




        <div className="animation-boxes">
          <div style={boxStyle(10, 130)}></div>
          <div style={boxStyle(154, 130)}></div>
          <div style={boxStyle(103, 230)}></div>
          <div style={boxStyle(149, 430)}></div>
          <div style={boxStyle(10, 340)}></div>
          <div style={boxStyle(148, 20)}></div>
          <div style={boxStyle(50, 420)}></div>
        </div>
    </div>
  );
};

export default InroBox

/*
import IntroBox from "./LearnComponents/IntroBox";
import ErrorBox from "./LearnComponents/ErrorBox";
import SuccessBox from "./LearnComponents/SuccessBox";
import CardButtons from "./LearnComponents/CardButtons";
import FlagsCard from "./LearnComponents/FlagsCard";
import QuizSummaryCard from "./LearnComponents/QuizSummaryCard";
import {useFavourites} from "../../hooks/FavoritesContext";


  const {favouriteCountries} = useFavourites();

  const foundCountries = favouriteCountries.length > 0;
  const played = false;


  // Correct/Wrong Answers percentage:
    //Answers.Length / Questions.length * 100 : percentage.
    const fakeQuestionsLength = 100;
    const fakeCorrectAns = 70;
    const fakeWrongAnswers = 20;

    const correctAnsPer = fakeCorrectAns / fakeQuestionsLength * 100;
    const wrongAnsPer = fakeWrongAnswers / fakeQuestionsLength * 100;
    const notAnswered = fakeQuestionsLength - (correctAnsPer + wrongAnsPer)

    
<IntroBox />

      {allBoxes && 
        (
        foundCountries ?

        <SuccessBox>
          <p className="title">Your Progress</p>
          <p>We found {favouriteCountries.length} countries in your favourites list!</p>
          <p>Are you ready to turn these favourites into knowledge?</p>
          <p>Build a global mindset and improve your geography skills.</p>
          <p>Impress your geography teacher with your Worldwise knowledge.</p>
        </SuccessBox>
        :
        <ErrorBox>
          <p>No countries saved yet.</p>
          <p>Start exploring and add your favourites!</p>
        </ErrorBox>
        )
      }
 

      {allBoxes &&
        (
          played ? 
          <SuccessBox>
            <p>Games played: 10</p>
            <p>Points: 100</p>
            <p>Great progress so far!</p>
            <p>Keep playing to level up your world knowledge.</p>
          </SuccessBox>
        : 
          <ErrorBox>
            <p className="title">Game Status</p>
            <p>You haven’t played any quizzes yet.</p>
            <p>Current points: 0</p>
            <p>No games found.</p>
            <p>When you’re ready, test your knowledge and give it your best shot.</p>
          </ErrorBox>
        )
      }


      {foundCountries ?
        <>
        <p className="title flag">Flags</p>
        <div className="flags-card">
          {favouriteCountries.map(country => 
            <FlagsCard country={country} />
          )}
        </div>
        </>
      : 
        3
      }




      <QuizSummaryCard corrWidth={fakeCorrectAns} wrongWidth={fakeWrongAnswers} notAnswered={notAnswered} />

      <CardButtons />    
      */