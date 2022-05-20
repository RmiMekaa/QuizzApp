import React from 'react'

export default function Results({ quizz }) {

  if (!quizz) return;

  let score = 0;
  const resume = [];
  for (let i = 0; i < quizz.length; i++) {
    resume.push({
      question: quizz[i].title,
      correct_answer: quizz[i].correct_answer,
      user_answer: quizz[i].user_answer
    })
    if (quizz[i].correct_answer === quizz[i].user_answer) score++;
  }

  return (
    <main className='results'>
      <h2>Results</h2>
      <div className='results__container'>
        <div className='results__score'>{score}</div>
        <div className='results__answers'>
          {resume.map(questionResume => {
            let questionNumber = resume.indexOf(questionResume) + 1;
            return (
              <p className="results__answers__resume" key={'user_answer_' + questionNumber}>
                Question {questionNumber} : {questionResume.question}
                Correct answer : {questionResume.correct_answer}
                Your answer : {questionResume.user_answer}
              </p>
            )
          })}
        </div>
      </div>
    </main>
  )
}