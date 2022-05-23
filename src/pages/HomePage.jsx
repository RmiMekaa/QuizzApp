import React from 'react'
import { useNavigate } from 'react-router-dom'
import { categoryOptions, difficultyOptions, quantityOptions } from '../data/SelectOptions'
import Categories from '../components/Categories';

export default function HomePage({
  selectedDifficulty,
  setDifficulty,
  selectedCategory,
  setCategory,
  selectedQuantity,
  setQuantity
}) {
  const navigate = useNavigate();

  return (
    <main className='homePage'>
      <Categories {...{ selectedCategory, setCategory }} />
      <select onChange={(e) => setDifficulty(e.target.value)}>
        {difficultyOptions.map(option => <option key={option}>{option}</option>)}
      </select>
      <select value={selectedQuantity} onChange={(e) => setQuantity(e.target.value)}>
        {quantityOptions.map(option => <option key={option}>{option}</option>)}
      </select>

      <button onClick={() => {
        navigate('/quizz')
      }}>Start</button>
    </main>
  )
}