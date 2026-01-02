import GameCard from "./GameCard";
import "./styles.css";


function EasyGames({type, msg, setQueCategory, setQueDificulity}) {
  const btnDisable = type === `lock`;

  return (
    <div className={`easy-games`}>
        <div className={`${type}`}>
            {msg}
        </div>

        <p className="game-title">EasyGames</p>
        <div className="game-cards">

            {Array.from({length: 6}, (_, i)=> <GameCard setQueCategory={setQueCategory} setQueDificulity={setQueDificulity} key={i} disable={btnDisable} xp={20} />)}

        </div>

    </div>
  );
};

export default EasyGames