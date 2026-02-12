import QuizTabs from "./QuizTabs";
import "./styles.css";
import Profile from "./ProfileComponents/Profile";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";


function QuizProfile() {
  return (
    <div className="quiz">
        <Link to={`/`} className="flex mt-4 ml-2 mb-1">
          <ArrowLeft></ArrowLeft>
          <h4>Profile</h4>
        </Link>
        <Profile />
    </div>
  );
};

export default QuizProfile;