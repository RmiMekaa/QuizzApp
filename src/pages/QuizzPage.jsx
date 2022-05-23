import React, { useState } from 'react'
import QuestionCard from '../components/QuestionCard'
import useGetQuizz from '../hooks/useGetQuizz'
import Results from '../components/Results'

export default function QuizzPage({ category, difficulty, quantity }) {
  const [index, updateIndex] = useState(0)
  const { loading, quizz, error } = useGetQuizz(category, difficulty, quantity)

  if (!quizz) return;
  if (loading) return <span>Loading...</span>
  if (error) console.log(error)

  return (
    <main className='quizzPage'>
      {index === quizz.length
        ? <Results {...{ quizz }} />
        : <QuestionCard question={quizz[index]} index={index} updateIndex={updateIndex}
        />
      }
    </main>
  )
}
