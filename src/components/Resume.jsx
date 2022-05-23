import React from 'react';

export default function Resume({ questionResume }) {
  const { index, question, correctAnswer, userAnswer } = questionResume;
  let isCorrect = userAnswer === correctAnswer ? true : false;

  return (
    <details className={isCorrect ? "resume correct" : "resume"}>
      <summary>Question {index}</summary>
      <p className="resume__content">
        <span>{question} </span>
        <span className="correctAnswer">Correct answer : {correctAnswer} </span>
        {!isCorrect && <span className="userAnswer">Your answer : {userAnswer} </span>}
      </p>
    </details >
  );
}
