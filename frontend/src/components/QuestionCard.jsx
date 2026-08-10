
import React from "react";

function QuestionCard({
  question,
  onAnswer,
  selectedAnswer,
  answerChecked,
}) {
  if (!question) {
    return null;
  }

  return (
    <div className="question-content">

      {/* =========================================
          QUESTION - RAINBOW TEXT
      ========================================= */}

      <div className="rainbow-question">
        {question.question}
      </div>

      {/* =========================================
          OPTIONS
      ========================================= */}

      {question.options.map(
        (option, index) => {
          const isSelected =
            selectedAnswer === index;

          const isCorrect =
            answerChecked &&
            index === question.correctAnswer;

          const isWrong =
            answerChecked &&
            isSelected &&
            index !== question.correctAnswer;

          let optionClass =
            "option-btn";

          if (isSelected) {
            optionClass += " selected";
          }

          if (isCorrect) {
            optionClass += " correct";
          }

          if (isWrong) {
            optionClass += " wrong";
          }

          return (
            <button
              key={`${question._id}-${index}`}
              type="button"
              className={optionClass}
              onClick={() =>
                onAnswer(index)
              }
              disabled={
                selectedAnswer !== null ||
                answerChecked
              }
            >
              {option}

              {/* Correct indicator */}
              {answerChecked &&
                isCorrect && (
                  <span className="answer-icon">
                    ✓
                  </span>
                )}

              {/* Wrong indicator */}
              {answerChecked &&
                isWrong && (
                  <span className="answer-icon">
                    ✕
                  </span>
                )}
            </button>
          );
        }
      )}

      {/* =========================================
          ANSWER RESULT
      ========================================= */}

      {answerChecked && (
        <div
          className={`answer-result ${
            selectedAnswer ===
            question.correctAnswer
              ? "answer-result-correct"
              : "answer-result-wrong"
          }`}
        >
          {selectedAnswer ===
          question.correctAnswer ? (
            <div>
              🎉 Correct Answer!
            </div>
          ) : (
            <div>
              ❌ Wrong Answer!
            </div>
          )}

          {/* =====================================
              CORRECT ANSWER - RAINBOW TEXT
          ===================================== */}

          <div className="correct-answer-box">
            <span className="correct-answer-label">
              Correct Answer:
            </span>

            <span className="rainbow-correct-answer">
              {question.options[
                question.correctAnswer
              ]}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuestionCard;
