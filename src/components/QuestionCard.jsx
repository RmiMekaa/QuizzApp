import React from 'react'
import PropTypes from "prop-types"

/**
 * Question card component 
 * @component 
 */
export default function QuestionCard({ i, question, answers }) {
  return (
    <article className='questionCard'>
      <div className='questionCard__header'>
        <div className='questionCard__header__counter'>{i}</div>
        <span className='questionCard__header__question'>{question} </span>
      </div>
      <div className='questionCard__timer'></div>
      <div className='questionCard__answers'>
        {answers.map(answer => <button>{answer}</button>)}
      </div>
    </article>
  )
}

QuestionCard.propTypes = {
  i: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
}