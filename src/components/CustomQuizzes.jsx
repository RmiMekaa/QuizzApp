import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CustomQuizzes({ appState, setAppState }) {
  const navigate = useNavigate();
  return (
    <div className='customQuizzes'>
      <h3 className='customQuizzes__heading'>My Quizzes</h3>
      {appState.customQuizzes.map(quiz =>
        <CustomQuiz quiz={quiz} />)}
      <button className='newQuiz' onClick={() => navigate('create-quiz')}>Create New Quiz</button>
    </div >
  )

  function CustomQuiz({ quiz }) {
    const [OpenMenu, toggleOpenMenu] = useState(false)
    return (
      <div className={OpenMenu ? 'customQuiz open' : 'customQuiz'}>
        <h4 className='customQuiz__heading' onClick={() => toggleOpenMenu(v => !v)}>{quiz.name}</h4>
        {OpenMenu &&
          <div className='customQuiz__menu'>
            <button onClick={() => handlePlay(quiz)}>Play</button>
            <button onClick={() => alert('coming soon')}>Edit</button>
            <button onClick={() => handleDelete(quiz)}>Delete</button>
          </div>
        }
      </div>
    )
  }

  function handlePlay(quiz) {
    setAppState({ ...appState, selectedQuiz: quiz.questions })
    navigate('/quiz')
  }

  function handleDelete(quiz) {
    const newArray = appState.customQuizzes.filter(q => q.name !== quiz.name)
    setAppState({ ...appState, customQuizzes: newArray })
  }

}

