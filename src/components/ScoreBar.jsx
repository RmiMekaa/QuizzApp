import React from 'react'

export default function ScoreBar({ quizz, score }) {
  const percentage = (score * 100 / quizz.length);
  const fillerWidth = {
    width: `${percentage}%`,
  }

  const text = () => {
    if (score === quizz.length) return "Score parfait ! Chapeau l'artiste !"
    if (score > quizz.length / 2) return "Pas mal, mais tu peux faire mieux !"
    if (score === quizz.length / 2) return "Ouf ! Tout juste la moyenne !"
    if (score < quizz.length / 2) return "Oups ! Des révisions s'imposent..."
    if (score === 0) return "Aïe..."
  }

  return (
    <div className='scoreBar'>
      <div className='scoreBar__label'>
        <span>{score}/{quizz.length}</span>
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