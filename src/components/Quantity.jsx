import React from 'react'
import { quantityOptions } from '../data/SelectOptions'

export default function Quantity({ selectedQuantity, setQuantity }) {
  return (
    <section className='optionContainer'>
      <h3 className='optionContainer__heading'>Difficulty</h3>
      {quantityOptions.map(option => {
        return <button
          className={(option === selectedQuantity) ? 'optionContainer__button selected' : 'optionContainer__button'}
          onClick={() => setQuantity(option)}
        >
          {option}
        </button>
      })}
    </section>
  )
}
