import { Link } from "react-router-dom";


function CardButtons() {
  return (
    <div className="card-btn">
      <p className="title">Explore More</p>
      <p>Worldwise is a powerful platform for learning world geography.</p>
      <p>Discover new features and expand your global understanding.</p>
      
      <div className="btns">
        <Link to={`/Quiz/QuizGame/Start`}><button>Start Quiz</button></Link>
        <Link to={`/`}><button>Add new country</button></Link>
      </div>
    </div>
  );
};

export default CardButtons;