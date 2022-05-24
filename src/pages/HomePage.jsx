import React from 'react'
import { useNavigate } from 'react-router-dom'
import Categories from '../components/Categories';
import Difficulties from '../components/Difficulties';
import Quantity from '../components/Quantity';

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
      <div style={{ display: 'flex', gap: '1.25rem' }}>
        <Difficulties {...{ selectedDifficulty, setDifficulty }} />
        <Quantity {...{ selectedQuantity, setQuantity }} />
      </div>

      <button className='startButton' onClick={() => {
        navigate('/quizz')
      }}>Start</button>
    </main>
  )
}