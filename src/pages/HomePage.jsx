import React from 'react'
import { useNavigate } from 'react-router-dom'
import Categories from '../components/Categories';
import OptionPicker from '../components/OptionPicker';
import { difficultyOptions, quantityOptions } from '../data/options';

export default function HomePage({ appState, setAppState }) {
  const navigate = useNavigate();

  return (
    <div className='homePage'>
      <Categories {...{ appState, setAppState }} />
      <div style={{ display: 'flex', gap: '1.25rem' }}>
        <OptionPicker target='selectedDifficulty' options={difficultyOptions} {...{ appState, setAppState }} />
        <OptionPicker target='selectedQuantity' options={quantityOptions} {...{ appState, setAppState }} />
        <button
          className='startButton'
          onClick={() => {
            setAppState({ ...appState, selectedQuiz: null })
            navigate('/quiz')
          }}
        >
          Start
        </button>
      </div>

      <div className='customQuizzes'>
        {appState.customQuizzes.map(quiz => <span onClick={() => {
          setAppState({ ...appState, selectedCategory: "custom", selectedQuiz: quiz.questions })
          navigate('/quiz')
        }}>{quiz.name}</span>)}
      </div>

    </div >
  )
}