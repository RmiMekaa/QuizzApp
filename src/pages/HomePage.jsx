import React from 'react'
import { useNavigate } from 'react-router-dom'
import { categoryOptions, difficultyOptions, quantityOptions } from '../data/SelectOptions'

export default function HomePage({ setDifficulty, setCategory, quantity, setQuantity }) {
  const navigate = useNavigate();

  return (
    <main className='homePage'>
      <select onChange={(e) => setCategory(e.target.value)}>
        {categoryOptions.map(option => <option key={option}>{option}</option>)}
      </select>
      <select onChange={(e) => setDifficulty(e.target.value)}>
        {difficultyOptions.map(option => <option key={option}>{option}</option>)}
      </select>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {quantityOptions.map(option => <option key={option}>{option}</option>)}
      </select>

      <button onClick={() => {
        navigate('/quizz')
      }}>Start</button>
    </main>
  )
}