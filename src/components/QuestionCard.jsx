import React from 'react'

/**
 * Question card component
 * @component 
 */
export default function QuestionCard() {
  return (
    <article className='questionCard'>
      <div className='questionCard__header'>
        <div className='questionCard__header__counter'>01</div>
        <span className='questionCard__header__question'>À quel peintre doit-on « Le Voyageur contemplant une mer de nuages » ? </span>
      </div>
      <div className='questionCard__timer'></div>
      <div className='questionCard__answers'>
        <button>Gustave Courbet</button>
        <button>Caspar David Friedrich</button>
        <button>Théodore Géricault</button>
        <button>Eugène Delacroix</button>
      </div>
    </article>
  )
}
