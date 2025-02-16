import quizCompleteImg from "../assets/quiz-complete.png";
export default function Summary() {
  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy Icon" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
            <span className="number">10%</span>
            <span className="text">skipped</span>
        </p>
        <p>
            <span className="number">10%</span>
            <span className="text">Answered Correctly</span>
        </p>
        <p>
            <span className="number">10%</span>
            <span className="text">Answered Incorrectly</span>
        </p>
      </div>
    </div>
  );
}
