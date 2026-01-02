import QuizTabs from "./QuizTabs";
import "./styles.css";
import Profile from "./ProfileComponents/Profile";


function QuizProfile() {
  return (
    <div className="quiz">
        <h4>Profile</h4>
        <Profile />
        <QuizTabs />
    </div>
  );
};

export default QuizProfile;