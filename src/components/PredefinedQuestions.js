import React from "react";

const questions = [
  "Hi, what is the weather",
  "Hi, what is my location",
  "Hi, what is the temperature",
  "Hi, how are you",
];

function PredefinedQuestions({ onSelect }) {
  return (
    <div className="predefined-questions">
      {questions.map((question, index) => (
        <div
          key={index}
          className="question-card"
          onClick={() => onSelect(question)}
        >
          <h3>{question}</h3>
          <p>Get immediate AI generated response</p>
        </div>
      ))}
    </div>
  );
}

export default PredefinedQuestions;
