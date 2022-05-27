import React from 'react'
import Resume from './Resume';
import ScoreBar from './ScoreBar';

export default function Results({ quiz }) {

  if (!quiz) return;

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
        {resume.map(questionResume => {
          return <Resume {...{ questionResume }} />
        })}
      </div>
    </section >
  )
}