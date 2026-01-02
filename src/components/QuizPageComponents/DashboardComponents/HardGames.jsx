import "./styles.css";
import GameCard from "./GameCard";


function HardGames({type, msg, setQueCategory, setQueDificulity}) {
  const btnDisable = type === `lock`;

  return (
    <div className={`hard-games`}>
        <div className={`${type}`}>
            {msg}
        </div>

        <p className="game-title">HardGames</p>
        <div className="game-cards">

            {Array.from({length: 6}, (_, i)=> 
            <GameCard setQueCategory={setQueCategory} setQueDificulity={setQueDificulity} key={i} category="Football" disable={btnDisable} dificulity="Hard" xp={100} type="lock" />
            )}

        </div>
    </div>
  );
};

export default HardGames;