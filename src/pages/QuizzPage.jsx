import React, { useState } from 'react'
import QuestionCard from '../components/QuestionCard'
import useGetQuizz from '../hooks/useGetQuizz'
import Results from '../components/Results'

export default function QuizzPage({ selectedCategory, selectedDifficulty, selectedQuantity }) {
  const [index, updateIndex] = useState(0)
  const { loading, quizz, error } = useGetQuizz(selectedCategory, selectedDifficulty, selectedQuantity)

  if (!quizz) return;
  if (loading) return <span>Loading...</span>
  if (error) console.log(error)

  return (
    <div className='quizzPage'>
      {index === quizz.length
        ? <Results {...{ quizz }} />
        : <QuestionCard question={quizz[index]} index={index} updateIndex={updateIndex}
        />
      }
    </div>
  )
}
