import { useSelector } from "react-redux";
import "./styles.css";
import { Heart, CircleCheckBig, Trophy, BookOpen } from "lucide-react";

function Head({countries, learned, inprogress}) {
    const completed = useSelector(store => store?.user.lessonQuizCompleted)
  return (
    <div className="head">
        <h2>Your Personal Geography Learning Space</h2>
        <p>Explore your favourite countries, study their geography and test your knowledge with interactive quizzes</p>

        <div className="cards">
            <div className="card">
                <Heart className="heart" />
                <div className="ove">
                    <div className="title">Favourite Countries</div>
                    <p className="total">{countries?.length}</p>
                </div>
            </div>

            <div className="card">
                <CircleCheckBig className="check" />
                <div className="ove">
                    <div className="title">Learned Countries</div>
                    <p className="total">{learned?.length}</p>
                </div>
            </div>

            <div className="card">
                <BookOpen className="" />
                <div className="ove">
                    <div className="title">In Progress</div>
                    <p className="total">{inprogress?.length}</p>
                </div>
            </div>

            <div className="card">
                <Trophy className="trophy" />
                <div className="ove">
                    <div className="title">Quizzes Completed</div>
                    <p className="total">{completed}</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Head;