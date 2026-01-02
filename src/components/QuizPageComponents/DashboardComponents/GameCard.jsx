import { Link } from "react-router-dom";
import { QUIZ_CATEGORIES } from "../../../features/quizCategories";

function GameCard({dificulity=`Easy`, disable, xp, setQueCategory, setQueDificulity}) {
    const randomCategory = Math.floor(Math.random() * (32 - 9 + 1)) + 9;
    const index = QUIZ_CATEGORIES.map(m => m.id);
    const i = index.indexOf(randomCategory)
    const data = QUIZ_CATEGORIES[i];
    const Icon = data.icon;
    
    function handlePlay() {
        setQueCategory(randomCategory)
        setQueDificulity(dificulity.toLocaleLowerCase())
    }

    return(
        <div className="game-card">
            <Icon size={30} />
            <p className="game-category">{data.name}</p>
            <p className="game-dificulity">{dificulity}</p>
            <Link className="link" to={`/Quiz/QuizGame`}>
                <button disabled={disable} onClick={handlePlay}>play</button>
            </Link>

            <div className="result-acheivement">
                <div className="icon">XP</div>
                
            </div>
        </div>
    )
}

export default GameCard;