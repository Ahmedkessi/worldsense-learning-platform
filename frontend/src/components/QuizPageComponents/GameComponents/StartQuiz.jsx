import { useLocation } from "../../../hooks/LocationContext";
import Button from "../../UI/Button";
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
  
        <Button newStyle="py-1 px-5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-[grey] text-grey-100" handleClick={handlePlay}>Start</Button>
    </div>
    </>
  );
};

export default StartQuiz;