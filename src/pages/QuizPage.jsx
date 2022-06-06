import React, { useState } from 'react'
import QuestionCard from '../components/QuestionCard'
import Results from '../components/Results'
import useGetQuiz from '../hooks/useGetQuiz'

export default function QuizPage({ appState }) {
  const [index, updateIndex] = useState(0)
  //const { loading, error, quiz } = useGetQuiz(appState)
  let quiz = appState.selectedQuiz;

  if (!quiz) {
    return <p>Error!</p>
  }
  //if (loading) return <p>Loading...</p>;
  //if (error) return <p>Error!</p>;

  if (quiz) {
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
}
