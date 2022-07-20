import React from 'react'

export default function ScoreBar({ quiz, score }) {
  const percentage = (score * 100 / quiz.length);
  const fillerWidth = {
    width: `${percentage}%`,
  }

  const text = () => {
    if (percentage === 100) return "Perfect score, congratulations !"
    if (percentage > 75 && percentage < 100) return "Great score ! But is this the best you can do ?"
    if (percentage >= 50 && percentage < 75) return "Not bad, but you could do better !"
    if (percentage < 50 && percentage > 0) return "I was programmed to be honest : this is pretty bad, sorry"
    if (percentage === 0) return "Ouch...From zero to hero ?"
  }

  return (
    <>
      <div className='scoreBar'>
        <div className='scoreBar__label'>
          <span>{score}/{quiz.length}</span>
          <div className="scoreBar__spinner"></div>
        </div>
        <div className='scoreBar__container'>
          <div className='scoreBar__container__filler' style={fillerWidth}></div>
        </div>
        <span className='scoreBar__text'>{text()}</span>
      </div>
    </>
  )
}