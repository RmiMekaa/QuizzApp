import React, { useState } from 'react'
import QuestionCard from '../components/QuestionCard'
import questions from '../mockData/questions.js'
import Results from '../components/Results'

export default function QuizzPage() {
  const [questionNumber, setquestionNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState([]);
  const quizz = questions;

  return (
    <main className='quizzPage'>
      {(questionNumber > quizz.length - 1)
        ? <Results {...{ quizz, userAnswers }} />
        : <QuestionCard question={quizz[questionNumber]} {...{ questionNumber, setquestionNumber, userAnswers, setUserAnswers }} />
      }
    </main>
  )
}