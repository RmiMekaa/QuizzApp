import React, { useState } from 'react'
import QuestionCard from '../components/QuestionCard'
import questions from '../mockData/questions.js'
import Results from '../components/Results'

export default function QuizzPage() {
  const [index, updateIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState([]);
  const quizz = questions;

  return (
    <main className='quizzPage'>
      {(index > quizz.length - 1)
        ? <Results {...{ quizz, userAnswers }} />
        : <QuestionCard question={quizz[index]} {...{ index, updateIndex, userAnswers, setUserAnswers }} />
      }
    </main>
  )
}