import React from 'react'
import Resume from './Resume';

export default function Results({ quizz }) {

  if (!quizz) return;

  let score = 0;
  const resume = [];
  for (let i = 0; i < quizz.length; i++) {
    resume.push({
      index: i + 1,
      question: quizz[i].question,
      correctAnswer: quizz[i].correctAnswer,
      userAnswer: quizz[i].userAnswer
    })
    if (quizz[i].correctAnswer === quizz[i].userAnswer) score++;
  }

  return (
    <section className='results'>
      <h2>Results</h2>
      {/* <div className='results__score'>{score}</div> */}
      <div className='results__answers'>
        {resume.map(questionResume => {
          return <Resume {...{ questionResume }} />
        })}
      </div>
    </section >
  )
}