import React from 'react'

export default function ScoreBar({ quiz, score }) {
  const percentage = (score * 100 / quiz.length);
  const fillerWidth = {
    width: `${percentage}%`,
  }

  const text = () => {
    if (score === quiz.length) return "Score parfait ! Chapeau l'artiste !"
    if (score > quiz.length / 2) return "Pas mal, mais tu peux faire mieux !"
    if (score === quiz.length / 2) return "Ouf ! Tout juste la moyenne !"
    if (score < quiz.length / 2) return "Oups ! Des révisions s'imposent..."
    if (score === 0) return "Aïe..."
  }

  return (
    <div className='scoreBar'>
      <div className='scoreBar__label'>
        <span>{score}/{quiz.length}</span>
        <svg className="scoreBar__spinner" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
        </svg>
      </div>
      <div className='scoreBar__container'>
        <div className='scoreBar__container__filler' style={fillerWidth}></div>
      </div>
      <span className='scoreBar__text'>{text()}</span>
    </div>
  )
}