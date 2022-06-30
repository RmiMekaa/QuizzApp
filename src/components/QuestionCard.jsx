import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from "prop-types"

/**
 * Question card component 
 * @component 
 */
export default function QuestionCard({ index, question, updateIndex }) {
  const [swipeCard, toggleSwipeCard] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(undefined)

  /**
   * Action on submit (UseCallBack needed to avoid useEffect dependency change on every render)
   * - Add property user answer to the question object
   * - Trigger animation
   * - Update question index
   */
  const submitAnswer = useCallback((answer) => {
    setSelectedAnswer(answer)
    toggleSwipeCard(true)
    question.userAnswer = answer;
    setTimeout(() => {
      updateIndex(index + 1)
      setSelectedAnswer(undefined)
      toggleSwipeCard(false)
    }, 400)
  }, [question, index, updateIndex])

  //Handles timer, submitAnswer() will be called with 'No response' in parameter after 20s
  useEffect(() => {
    const timer = setTimeout(() => {
      submitAnswer('Pas de réponse')
    }, 20000)
    return () => {
      clearInterval(timer)
    }
  }, [index, updateIndex, submitAnswer])

  return (
    <article className={swipeCard ? 'questionCard swipe' : 'questionCard'}>
      <div className='questionCard__header'>
        <div className='questionCard__header__index'>{index + 1}</div>
        <span className='questionCard__header__question'>{question.question}</span>
      </div>
      <div key={'question_' + index + '_timer'} className='questionCard__timer'></div> {/*Add a key to force timer to reset on render update*/}
      <div className='questionCard__answers'>
        {question.answers.map(answer => {
          return (
            <button
              key={'answer_' + answer}
              onClick={() => submitAnswer(answer)}
              className={answer === selectedAnswer ? 'selected' : undefined}
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
  question: PropTypes.object.isRequired, //A question object
  index: PropTypes.number.isRequired, //The question number
  updateIndex: PropTypes.func.isRequired, //Callback to update question number
}