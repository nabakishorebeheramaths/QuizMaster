import React from "react";

function QuestionCard({
  question,
  onAnswer,
  selectedAnswer,
}) {
  return (
    <div className="question-card">

      <h2>{question.question}</h2>

      {question.options.map((option, index) => (

        <button
          key={index}
          className={
            selectedAnswer !== null
              ? index === question.correctAnswer
                ? "option-btn correct"
                : index === selectedAnswer
                ? "option-btn wrong"
                : "option-btn"
              : "option-btn"
          }
          onClick={() => onAnswer(index)}
          disabled={selectedAnswer !== null}
        >
          {option}
        </button>

      ))}

    </div>
  );
}

export default QuestionCard;