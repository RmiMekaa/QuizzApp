import React, { useEffect, useState } from 'react'
import QuestionCard from '../components/QuestionCard'
import mockQuizz from '../mockData/mockQuizz.js'
import { Navigate } from 'react-router-dom'

export default function QuizzPage({ difficulty, category, quizz, setQuizz }) {
  const [index, updateIndex] = useState(0)

  useEffect(() => {
    //Fetch quizz here
    setQuizz(mockQuizz)
  }, [setQuizz])

  if (!quizz) return;

  return (
    <main className='quizzPage'>
      {index > quizz.length - 1
        ? <Navigate to="/results" />
        : <QuestionCard question={quizz[index]} {...{ index, updateIndex }} />
      }
    </main>
  )
}
