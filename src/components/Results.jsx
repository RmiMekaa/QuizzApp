import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ScoreBar from './ScoreBar';

export default function Results({ quiz }) {
  const navigate = useNavigate();

  useEffect(() => {
    const dropdowns = document.querySelectorAll("details.resume");
    dropdowns.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        dropdowns.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    });
  })

  if (!quiz) {
    alert('error')
    navigate('/QuizzApp/')
  }

  let score = 0;
  const resume = [];
  for (let i = 0; i < quiz.length; i++) {
    resume.push({
      index: i + 1,
      question: quiz[i].question,
      correctAnswer: quiz[i].correctAnswer,
      userAnswer: quiz[i].userAnswer
    })
    if (quiz[i].correctAnswer === quiz[i].userAnswer) score++;
  }

  return (
    <section className='results'>
      <h2>Results</h2>
      <ScoreBar quiz={quiz} score={score} />
      <div className='results__answers'>
        {resume.map(question => {
          let isCorrect = question.userAnswer === question.correctAnswer ? true : false;
          return (
            <details className={isCorrect ? "resume correct" : "resume"}>
              <summary>Question {question.index}</summary>
              <p className="resume__content">
                <span>{question.question} </span>
                {!isCorrect && <span className="userAnswer">Your answer : {question.userAnswer} </span>}
                <span className="correctAnswer">Correct answer : {question.correctAnswer} </span>
              </p>
            </details >
          )
        })}
      </div>
    </section >
  )
}
