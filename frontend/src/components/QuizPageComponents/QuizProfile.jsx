import QuizTabs from "./QuizTabs";
import "./styles.css";
import Profile from "./ProfileComponents/Profile";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";


function QuizProfile() {
  const navigate = useNavigate();
  return (
    <div className="quiz">
        <div onClick={()=> navigate(-1)} className="flex mt-4 ml-2 mb-1 duration-75 max-w-28 cursor-pointer hover:text-gray-400">
          <ArrowLeft className="mr-1 h-5 w-5 mt-0.5"></ArrowLeft>
          <h4>Profile</h4>
        </div>
        <Profile />
    </div>
  );
};

export default QuizProfile;