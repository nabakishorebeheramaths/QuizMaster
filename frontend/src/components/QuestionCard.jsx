import React from "react";

function QuestionCard({
  question,
  onAnswer,
  selectedAnswer,
}) {
  return (
    <div className="question-options">
      <h2>{question.question}</h2>

      {question.options.map((option, index) => {
        const isSelected = selectedAnswer === index;

        return (
          <button
            key={`${question._id}-${index}`}
            type="button"
            className={`option-btn ${
              isSelected ? "selected" : ""
            }`}
            onClick={() => onAnswer(index)}
            disabled={selectedAnswer !== null}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default QuestionCard;