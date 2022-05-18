import React from 'react'

export default function ResultsPage({ quizz }) {

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
    <main className='resultsPage'>
      <h2>Results</h2>
      <div className='resultsPage__container'>
        <div className='resultsPage__score'>{score}</div>
        <div className='resultsPage__answers'>
          {resume.map(res => {
            let questionNumber = resume.indexOf(res) + 1;
            return <p key={'user_answer_' + questionNumber}>
              Question {questionNumber} : {res.question}
              Correct answer : {res.correct_answer}
              Your answer : {res.user_answer}
            </p>
          })}
        </div>
      </div>
    </main>
  )
}