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
    <div className='homePage'>
      <div>
        <Categories {...{ selectedCategory, setCategory }} />
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          <OptionPicker options={difficultyOptions} selectedOption={selectedDifficulty} setOption={setDifficulty} />
          <OptionPicker options={quantityOptions} selectedOption={selectedQuantity} setOption={setQuantity} />
        </div>
      </div>

      <div className='customQuizes'>
        My quizzes
      </div>


      <button className='startButton' onClick={() => {
        navigate('/quiz')
      }}>Start</button>
    </div>
  )
}