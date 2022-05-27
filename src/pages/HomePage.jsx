import React from 'react'
import { useNavigate } from 'react-router-dom'
import Categories from '../components/Categories';
import OptionPicker from '../components/OptionPicker';
import { difficultyOptions, quantityOptions } from '../data/options';

export default function HomePage({ appState, setAppState }) {
  const navigate = useNavigate();
  console.log(appState);

  return (
    <div className='homePage'>
      <Categories {...{ appState, setAppState }} />
      <div style={{ display: 'flex', gap: '1.25rem' }}>
        <OptionPicker target='selectedDifficulty' options={difficultyOptions} {...{ appState, setAppState }} />
        <OptionPicker target='selectedQuantity' options={quantityOptions} {...{ appState, setAppState }} />
      </div>

      <div className='customQuizzes'>
        {appState.customQuizzes.map(quiz => <span>{quiz.name}</span>)}
      </div>


      <button className='startButton' onClick={() => {
        navigate('/quiz')
      }}>Start</button>
    </div>
  )
}