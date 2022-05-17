import React, { useState } from 'react'
import QuestionCard from '../components/QuestionCard'
import questions from '../mockData/questions.js'


export default function QuizzPage() {
  const [questionNumber, setquestionNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState([]);

  const currentQuestion = questions[questionNumber]
  let i = 0;

  return (
    <main className='quizzPage'>
      {(questionNumber > questions.length - 1)
        ? (
          <div style={{ color: 'white' }}>
            <h1 >Results : </h1>
            {userAnswers.map(answer => {
              i++;
              return <span>Question{i} : {answer}</span>
            })}
          </div>
        )
        : <QuestionCard question={currentQuestion} {...{ questionNumber, setquestionNumber, userAnswers, setUserAnswers }} />
      }
    </main>
  )
}