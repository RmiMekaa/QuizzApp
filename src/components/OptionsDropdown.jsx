import React from 'react'

export default function OptionsDropdown({ options, heading, remotedState, state, updateState }) {

  return (
    <details className='optionDropdown'>
      <summary>{heading}</summary>
      <div className='optionDropdown__content'>
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
    </details>
  )
}