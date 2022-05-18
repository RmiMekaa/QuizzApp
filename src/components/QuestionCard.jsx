import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from "prop-types"

/**
 * Question card component 
 * @component 
 */
export default function QuestionCard({ question, index, updateIndex }) {
  const [swipeCard, toggleSwipeCard] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(undefined)

  /**
   * Action on submit
   * Add property user answer to the question object, trigger animation and update question index
   * UseCallBack needed to avoid useEffect dependency change on every render
   */
  const submitAnswer = useCallback((answer) => {
    setSelectedAnswer(answer)
    toggleSwipeCard(true)
    question.user_answer = answer;
    setTimeout(() => {
      updateIndex(index + 1)
      toggleSwipeCard(false)
    }, 400)
  }, [question, index, updateIndex])

  //Handles timer, submitAnswer function will be called with 'No response' in parameter after 20s
  useEffect(() => {
    const timer = setTimeout(() => submitAnswer('Pas de réponse'), 20000);
    return () => clearTimeout(timer)
  }, [index, updateIndex, submitAnswer])

  return (
    <article className={swipeCard ? 'questionCard swipe' : 'questionCard'}>
      <div className='questionCard__header'>
        <div className='questionCard__header__counter'>{index + 1}</div>
        <span className='questionCard__header__question'>{question.title}</span>
      </div>
      <div key={'question ' + index + ' timer'} className='questionCard__timer'></div> {/*Add a key to force timer to reset on render update*/}
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
}