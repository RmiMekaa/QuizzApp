import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from "prop-types"

/**
 * Question card component 
 * @component 
 */
export default function QuestionCard({ question, questionNumber, setquestionNumber, userAnswers, setUserAnswers }) {
  const [swipeCard, toggleSwipeCard] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(false)

  const submitAnswer = useCallback((answer) => {
    setSelectedAnswer(answer)
    toggleSwipeCard(true)
    setUserAnswers([...userAnswers, selectedAnswer])
    setTimeout(() => {
      setquestionNumber(questionNumber + 1)
      toggleSwipeCard(false)
    }, 800)
  }, [selectedAnswer, questionNumber, setquestionNumber, userAnswers, setUserAnswers])

  useEffect(() => {
    const timer = setTimeout(() => submitAnswer(), 20000); //Set timer to auto submit after 20s
    return () => clearTimeout(timer) //Clear timer when the component will unmount
  }, [questionNumber, setquestionNumber, userAnswers, setUserAnswers, submitAnswer])

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
}