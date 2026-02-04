
function QuizSummaryCard({corrWidth, wrongWidth, notAnswered}) {
  return (
    <div className="quiz-summary-card">
        <p className="title">QuizSummary</p>
        <div>
            <p>Correct Answers: {corrWidth}%</p>
            <div className="progress">
                <div style={{width: `${corrWidth}%`}} className="pro"></div>
            </div>
        </div>

        <div>
            <p>Wrong Answers: {wrongWidth}%</p>
            <div className="progress">
                <div style={{width: `${wrongWidth}%`}}  className="pro"></div>
            </div>
        </div>

        <div>
            <p>Not Answered Yet: {notAnswered}%</p>
            <div className="progress">
                <div style={{width: `${notAnswered}%`}}  className="pro"></div>
            </div>
        </div>
    </div>
  );
};

export default QuizSummaryCard;