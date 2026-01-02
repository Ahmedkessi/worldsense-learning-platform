import { useLocation } from "../../../hooks/LocationContext";
import "./styles.css";


function StartQuiz({msg, dispatch}) {
  const {questions} = useLocation();

  function handlePlay() {
        dispatch({type:`play`, payload: questions})
    }
  
  return (
    <>
    <h4>Game</h4> 
    <div className="start-quiz">
        <p className="title">Welcome to Worldwise Quiz</p>
        <p>Learn. Play. Explore the world.</p>
        {msg}
  
        <button onClick={handlePlay}>Start</button>
    </div>
    </>
  );
};

export default StartQuiz;