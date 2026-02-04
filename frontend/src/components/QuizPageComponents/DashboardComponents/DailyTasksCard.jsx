import "./styles.css";
import { useSelector } from "react-redux";


function DailyTasksCard() {
    const daily = useSelector(store => store?.user?.daily);
    const DAILY_GAME_NEED = 3;
    const games = daily.gamesPlayedToday > DAILY_GAME_NEED ? 3 : daily.gamesPlayedToday;


  return (
    <div className="daily-tasks-card">
        <div className="cont">
            <div className="img-cont">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWoUfkR7RzCEV3cQQydEf1p1U7QqvV0t9agg&s" alt="#" />
            </div>
            <p className={`result ${daily.rewardClaimed ? `completed` : `incomplete`}`}>
                {daily.rewardClaimed ? `completed` : `incomplete`}</p>
        </div>

        <div className="info">
            <p className="title">Daily Tasks</p>
            <p className="mission">Play 3 Quiz</p>
            <p className="vision">Play and Earn Your Daily Quiz.</p>

            <div className="process">
                <div className="progress">
                     <div style={{width: `${(games * 100) / DAILY_GAME_NEED}%` }} className="pro"></div>
                </div>
                <div className="progress-info">
                    <p>Progress</p>
                    <p>{games}/3</p>
                </div>
            </div>

        </div>

        
        <div className="result-acheivement">
            <div className="icon">XP</div>
            <p>+30</p>
        </div>
    </div>
  );
};

export default DailyTasksCard ;