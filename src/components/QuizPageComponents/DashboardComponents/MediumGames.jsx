import GameCard from "./GameCard";
import "./styles.css";


function MediumGames({type, msg, setQueCategory, setQueDificulity}) {
  const btnDisable = type === `lock`;

  return (
    <div className={`medium-games`}>
        <div className={`${type}`}>
            {msg}
        </div>

        <p className="game-title">MediumGames</p>
        <div className="game-cards">

            {Array.from({length: 6}, (_, i)=> 
              <GameCard setQueCategory={setQueCategory} setQueDificulity={setQueDificulity} key={i} category="Natural" disable={btnDisable} xp={50} dificulity="Medium" />
            )}

        </div>
    </div>
  );
};

export default MediumGames;