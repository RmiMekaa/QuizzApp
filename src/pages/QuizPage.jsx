import React, { useState } from 'react'
import QuestionCard from '../components/QuestionCard'
import useGetQuiz from '../hooks/useGetQuiz'
import Results from '../components/Results'

export default function QuizPage({ appState }) {
  const [index, updateIndex] = useState(0)
  const { selectedCategory, selectedDifficulty, selectedQuantity } = appState;
  const { loading, quiz, error } = useGetQuiz(selectedCategory, selectedDifficulty, selectedQuantity)

  if (!quiz) return;
  if (loading) return <span>Loading...</span>
  if (error) console.log(error)

  return (
    <div className='quizPage'>
      {index === quiz.length
        ? <Results {...{ quiz }} />
        : <QuestionCard question={quiz[index]} index={index} updateIndex={updateIndex}
        />
      }
    </div>
  )
}
