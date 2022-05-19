import React, { useState } from 'react'
import QuestionCard from '../components/QuestionCard'
import useGetQuizz from '../hooks/useGetQuizz'
import Results from '../components/Results'

export default function QuizzPage({ difficulty, category }) {
  const [index, updateIndex] = useState(0)
  const { loading, quizz, error } = useGetQuizz(difficulty, category)

  if (loading) return <span>Loading...</span>
  if (error) console.error(error)
  if (!quizz) return;

  return (
    <main className='quizzPage'>
      {index > quizz.length - 1
        ? <Results {...{ quizz }} />
        : <QuestionCard question={quizz[index]} {...{ index, updateIndex }} />
      }
    </main>
  )
}
