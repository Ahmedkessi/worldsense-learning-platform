import { Link } from "react-router-dom";
import "./styles.css";
import { useSelector } from "react-redux";


function QuizNav() {
    const username = useSelector(store => store?.user?.profile?.username)
    const level = useSelector(store => store?.user?.progress?.level)
    const xp = useSelector(store => store?.user?.progress?.xp)
    const avatar = useSelector(store => store?.user?.profile?.avatar)

  return (
    <div className='quiz-nav'>
        <Link className="link" to={`/Quiz/Profile`}>
            <div className="div">
                <img src={avatar} alt="user_logo" />
            </div>
            <div className="info">
                <p>{username.split(` `).slice(0,2).join(` `)}</p>
                <p className="lvl"><span>⭐ LvL</span> {level}</p>
            </div>
        </Link>

        <div className="xp-box">
            <div className="icon">XP</div>
            <p>{xp}</p>
        </div>
    </div>
  );
};

export default QuizNav;