import React, { useState } from 'react'
import QuestionCard from '../components/QuestionCard'

const questions = [
  {
    title: 'À quel peintre doit-on « Le Voyageur contemplant une mer de nuages » ?',
    answers: ['Gustave Courbet', 'Caspar David Friedrich', 'Théodore Géricault', 'Eugène Delacroix'],
    correct_answer: 'Caspar David Friedrich'
  },
  {
    title: 'Qui a peint « Le baiser » ?',
    answers: ['Ferdinand Hodler', 'Odilon Redon', 'Gustave Klimt', 'Alphonse Osbert'],
    correct_answer: 'Gustave Klimt'
  }
]

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