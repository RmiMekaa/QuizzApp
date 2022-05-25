import React from 'react'

export default function OptionPicker({ options, selectedOption, setOption }) {
  return (
    <section className='optionPicker'>
      <h3 className='optionPicker__heading'>Difficulty</h3>
      {options.map(option => {
        return <button
          className={(option === selectedOption) ? 'optionPicker__button selected' : 'optionPicker__button'}
          onClick={() => setOption(option)}
        >
          {option}
        </button>
      })}
    </section>
  )
}
