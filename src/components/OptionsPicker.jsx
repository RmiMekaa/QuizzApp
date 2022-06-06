import React from 'react'

export default function OptionsPicker({ options, heading, remotedState, state, updateState, direction = "row" }) {
  return (
    <div className={direction === 'column' ? 'optionsPicker column' : 'optionsPicker'}>
      <h3>{heading}</h3>
      {options.map(option => {
        return (
          <button
            key={'option__' + option}
            className={(option === state[remotedState]) ? 'active' : null}
            onClick={() => updateState({ ...state, [remotedState]: option })}>
            {option}
          </button>
        )
      })}
    </div>
  )
}