import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types"

/**
 * Question card component 
 * @component 
 */
export default function QuestionCard({ question, questionNumber, setquestionNumber, userAnswers, setUserAnswers }) {
  const [swipeCard, toggleSwipeCard] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => handleClick(), 20000); //Set timer to auto submit after 20s
    return () => clearTimeout(timer) //Clear timer when the component will unmount
  }, [questionNumber, setquestionNumber, userAnswers, setUserAnswers, handleClick])

  return (
    <article className={swipeCard ? 'questionCard swipe' : 'questionCard'}>
      <div className='questionCard__header'>
        <div className='questionCard__header__counter'>{questionNumber + 1}</div>
        <span className='questionCard__header__question'>{question.title}</span>
      </div>
      <div key={'question ' + questionNumber + ' timer'} className='questionCard__timer'></div> {/*Add a key to force rerender of timer*/}
      <div className='questionCard__answers'>
        {question.answers.map(answer => {
          let key = 'answer_' + question.answers.indexOf(answer);
          return (
            <button key={key} onClick={() => handleClick(answer)}>
              {answer}
            </button>
          )
        })}
      </div>
    </article >
  )

  function handleClick(answer) {
    toggleSwipeCard(true)
    setUserAnswers([...userAnswers, answer])
    setTimeout(() => {
      setquestionNumber(questionNumber + 1)
      toggleSwipeCard(false)
    }, 800)
  }

}

QuestionCard.propTypes = {
  question: PropTypes.object.isRequired,
}