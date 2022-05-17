import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from "prop-types"

/**
 * Question card component 
 * @component 
 */
export default function QuestionCard({ question, index, updateIndex, userAnswers, setUserAnswers }) {
  const [swipeCard, toggleSwipeCard] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(undefined)

  const submitAnswer = useCallback((answer) => {
    setSelectedAnswer(answer)
    toggleSwipeCard(true)
    setUserAnswers([...userAnswers, answer])
    setTimeout(() => {
      updateIndex(index + 1)
      toggleSwipeCard(false)
    }, 400)
  }, [index, updateIndex, userAnswers, setUserAnswers])

  //Set timer to auto submit after 20s
  useEffect(() => {
    const timer = setTimeout(() => submitAnswer('Pas de réponse'), 20000);
    return () => clearTimeout(timer)
  }, [index, updateIndex, userAnswers, setUserAnswers, submitAnswer])

  return (
    <article className={swipeCard ? 'questionCard swipe' : 'questionCard'}>
      <div className='questionCard__header'>
        <div className='questionCard__header__counter'>{index + 1}</div>
        <span className='questionCard__header__question'>{question.title}</span>
      </div>
      <div key={'question ' + index + ' timer'} className='questionCard__timer'></div> {/*Add a key to force rerender of timer*/}
      <div className='questionCard__answers'>
        {question.answers.map(answer => {
          let key = 'answer_' + question.answers.indexOf(answer);
          return (
            <button
              key={key}
              onClick={() => submitAnswer(answer)}
              className={answer === selectedAnswer ? 'selected' : null}
            >
              {answer}
            </button>
          )
        })}
      </div>
    </article >
  )
}

QuestionCard.propTypes = {
  question: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  updateIndex: PropTypes.func.isRequired,
  userAnswers: PropTypes.array.isRequired,
  setUserAnswers: PropTypes.func.isRequired,
}