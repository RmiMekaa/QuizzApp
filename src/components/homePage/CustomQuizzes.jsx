import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import ConfirmationModal from './ConfirmationModal';

/**
 * Component for custom quizzes section
 * @component 
 */
export default function CustomQuizzes({ appState, setAppState }) {
  const navigate = useNavigate();
  const [deleteHandler, setDeleteHandler] = useState({
    showModal: false,
    quizName: '',
    confirm: false
  })

  useEffect(() => {
    const dropdowns = document.querySelectorAll("details.customQuiz");
    dropdowns.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        dropdowns.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    });
    deleteHandler.confirm && deleteQuiz(deleteHandler.quizName)

  }, [deleteHandler])


  return (
    <>
      {deleteHandler.showModal && <ConfirmationModal {...{ deleteHandler, setDeleteHandler }} />}
      <div className='customQuizzes'>
        <h3 className='customQuizzes__heading'>My Quizzes</h3>
        {appState.customQuizzes.length === 0
          ? "you have not created a quizz yet"
          : appState.customQuizzes.map(quiz => (
            <details key={quiz.name} className='customQuiz'>
              <summary className='customQuiz__heading'>{quiz.name}</summary>
              <div className='customQuiz__menu'>
                <button onClick={() => handlePlay(quiz)}>Play</button>
                <button onClick={() => handleEdit(quiz)}>Edit</button>
                <button onClick={() => setDeleteHandler({ ...deleteHandler, showModal: true, quizName: quiz.name })}>Delete</button>
              </div>
            </details>
          ))
        }
        <button className='newQuiz' onClick={() => navigate('/QuizzApp/create-quiz/create/new')}>Create New Quiz</button>
      </div >
    </>
  )

  function handlePlay(quiz) {
    setAppState({ ...appState, selectedQuiz: quiz.questions })
    navigate('/QuizzApp/quiz')
  }

  function deleteQuiz(quizName) {
    const newArray = appState.customQuizzes.filter(q => q.name !== quizName)
    setAppState({ ...appState, customQuizzes: newArray })
  }

  function handleEdit(quiz) {
    let path = '/QuizzApp/create-quiz/edit/' + quiz.name
    navigate(path)
  }

}

