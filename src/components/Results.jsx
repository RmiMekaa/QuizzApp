import React from 'react'

export default function Results({ quizz, userAnswers }) {

  const score = () => {
    let score = 0;
    for (let i = 0; i < quizz.length; i++) {
      if (quizz[i].correct_answer === userAnswers[i]) score++;
    }
    return score;
  };

  return (
    <section className='results'>
      <h2>Results</h2>
      <div className='results__container'>
        <div className='results__score'>{score()}</div>

        <div className='results__answers'>
          {userAnswers.map(answer => {
            let questionNumber = userAnswers.indexOf(answer) + 1;
            return <span key={'user_answer_' + questionNumber}>Question {questionNumber} : {answer}</span>
          })}
        </div>
      </div>
    </section>
  )

}



