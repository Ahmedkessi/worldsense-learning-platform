import  "./styles.css" 
import { Outlet } from "react-router-dom";


function QuizPage() {
  return (
    <div className="page quiz-page">
      <Outlet />
    </div>
  );
};

export default QuizPage;