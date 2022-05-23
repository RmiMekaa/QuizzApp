import React from 'react'

export default function ScoreBar({ quizz, score }) {
  const percentage = (score * 100 / quizz.length);
  const fillerWidth = {
    width: `${percentage}%`,
  }

  return (
    <div className={'scoreBar'}>
      <div className={'scoreBar__label'}><span>{score}/{quizz.length}</span></div>
      <div className={'scoreBar__container'}>
        <div className={'scoreBar__container__filler'} style={fillerWidth}></div>
      </div>
    </div>
  )
}