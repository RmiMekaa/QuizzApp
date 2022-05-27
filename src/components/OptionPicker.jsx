import React from 'react'

export default function OptionPicker({ target, options, appState, setAppState }) {
  return (
    <section className='optionPicker'>
      <h3 className='optionPicker__heading'>Difficulty</h3>
      {options.map(option => {
        return <button
          key={'option_' + option}
          className={(option === appState[target]) ? 'optionPicker__button selected' : 'optionPicker__button'}
          onClick={() => setAppState({ ...appState, [target]: option })}
        >
          {option}
        </button>
      })}
    </section>
  )
}
