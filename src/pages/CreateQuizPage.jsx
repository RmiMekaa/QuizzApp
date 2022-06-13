import React, { useState } from 'react'
import shuffle from '../utils/shuffle'

const initialState = {
  newQuiz: { name: '', questions: [] },
  newQuestion: {
    question: '',
    correctAnswer: '',
    wrongAnswer1: '',
    wrongAnswer2: '',
    wrongAnswer3: ''
  }
}

export default function CreateQuizPage({ appState, setAppState }) {
  const [newQuiz, setnewQuiz] = useState(initialState.newQuiz);
  const [newQuestion, setNewQuestion] = useState(initialState.newQuestion);
  const [displayModale, toggleModale] = useState(false)

  return (
    <div className='createQuizPage'>
      {displayModale ? <span onClick={() => { toggleModale(v => !v); setnewQuiz(initialState.newQuiz) }}>Quiz created !</span> : (
        <>
          <form className='form'>
            <h2>New Quiz</h2>

            <div className='form__quiz'>
              <input
                id='quizName'
                type='text'
                placeholder='Quiz name...'
                minLength={3}
                maxLength={25}
                value={newQuiz.name}
                onChange={(e) => setnewQuiz({ ...newQuiz, name: e.target.value })}
              ></input>
              <span>Number of questions : {newQuiz.questions.length}</span>
              <aside id='modale'>Question created !</aside>
            </div>

            <div id='questionForm' className='form__newQuestion'>
              <h3>Question {newQuiz.questions.length + 1}</h3>
              <input id='question' placeholder='Your question...' type='text' minLength={10} maxLength={100} value={newQuestion.question} onChange={(e) => handleChange(e)}></input>
              <div className='form__answers'>
                <input id='correctAnswer' placeholder='Correct answer...' name='correctAnswer' type='text' maxLength={50} value={newQuestion.correctAnswer} onChange={(e) => handleChange(e)} />
                <input id='wrongAnswer1' placeholder='Wrong answer 1...' type='text' maxLength={50} value={newQuestion.wrongAnswer1} onChange={(e) => handleChange(e)} />
                <input id='wrongAnswer2' placeholder='Wrong answer 2...' type='text' maxLength={50} value={newQuestion.wrongAnswer2} onChange={(e) => handleChange(e)} />
                <input id='wrongAnswer3' placeholder='Wrong answer 3...' type='text' maxLength={50} value={newQuestion.wrongAnswer3} onChange={(e) => handleChange(e)} />
              </div>
            </div>

            <button className='addQuestion' onClick={(e) => addQuestion(e)}>Add question</button>
            <button className='createQuiz' type='submit' onClick={() => createQuiz()}>Create quiz</button>

          </form>
          {newQuiz.questions.map((question) => { return <p key={question.question}>{question.question}</p> })}
        </>
      )}
    </div >
  )

  /**
   * Update the corresponding state value on input change
   * @param {*} e Event
   * @return {void}
   */
  function handleChange(e) {
    const { id, value } = e.target;
    setNewQuestion((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  /**
   * Handles question creation:
   * - Add the question to newQuiz.questions
   * - Trigger animations
   * - Reset the form
   * @param {*} e 
   */
  function addQuestion(e) {
    e.preventDefault();
    triggerAnimations();
    let formatQuestion = {
      answers: shuffle([newQuestion.correctAnswer, newQuestion.wrongAnswer1, newQuestion.wrongAnswer2, newQuestion.wrongAnswer3]),
      correctAnswer: newQuestion.correctAnswer,
      question: newQuestion.question,
    }
    setTimeout(() => { // Wait for the end of the animation before update the state
      setnewQuiz({ ...newQuiz, questions: [...newQuiz.questions, formatQuestion] });
      setNewQuestion(initialState.newQuestion)
    }, 800)
  }


  function triggerAnimations() {
    const questionForm = document.getElementById('questionForm');
    const modale = document.getElementById('modale');
    questionForm.classList.add('animate');
    modale.classList.add('display');
    setTimeout(() => { questionForm.classList.remove('animate') }, 800)
    setTimeout(() => { modale.classList.remove('display') }, 3200)
  }

  /**
   * Handles quiz creation
   * - Push the new quiz to the state array 'customQuizzes
   * - Toggle modale to display the success message
  */
  function createQuiz() {
    setAppState({ ...appState, customQuizzes: [...appState.customQuizzes, newQuiz] })
    toggleModale(v => !v)
  }
}