import React from 'react'
import QuestionCard from '../components/QuestionCard'

export default function quizzPage() {
  return (
    <main className='quizzPage'>
      < QuestionCard i={1} question={"Bla bla bla bla bla ?"} answers={['1', '2', '3', '4']} />
    </main>
  )
}