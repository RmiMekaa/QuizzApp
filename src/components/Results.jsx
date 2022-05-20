import React from 'react'

export default function Results({ quizz }) {

  if (!quizz) return;

  let score = 0;
  const resume = [];
  for (let i = 0; i < quizz.length; i++) {
    resume.push({
      question: quizz[i].title,
      correctAnswer: quizz[i].correctAnswer,
      userAnswer: quizz[i].userAnswer
    })
    if (quizz[i].correctAnswer === quizz[i].userAnswer) score++;
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
                Correct answer : {questionResume.correctAnswer}
                Your answer : {questionResume.userAnswer}
              </p>
            )
          })}
        </div>
      </div>
    </main>
  )
}