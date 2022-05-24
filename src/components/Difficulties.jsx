import React from 'react'
import { difficultyOptions } from '../data/SelectOptions'

export default function Difficulties({ selectedDifficulty, setDifficulty }) {
  return (
    <section className='optionContainer'>
      <h3 className='optionContainer__heading'>Difficulty</h3>
      {difficultyOptions.map(option => {
        return <button
          className={(option === selectedDifficulty) ? 'optionContainer__button selected' : 'optionContainer__button'}
          onClick={() => setDifficulty(option)}
        >
          {option}
        </button>
      })}
    </section>
  )
}
