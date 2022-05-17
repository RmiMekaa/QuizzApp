import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <main className='homePage'>
      <button onClick={() => navigate('/quizz')}>Start</button>
    </main>
  )
}