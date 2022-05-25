import React from 'react'
import { useNavigate } from 'react-router-dom'
import Categories from '../components/Categories';
import OptionPicker from '../components/OptionPicker';
import { difficultyOptions, quantityOptions } from '../data/options';

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
        <OptionPicker options={difficultyOptions} selectedOption={selectedDifficulty} setOption={setDifficulty} />
        <OptionPicker options={quantityOptions} selectedOption={selectedQuantity} setOption={setQuantity} />
      </div>

      <button className='startButton' onClick={() => {
        navigate('/quizz')
      }}>Start</button>
    </main>
  )
}