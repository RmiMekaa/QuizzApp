import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import shuffle from '../utils/shuffle'
import TextareaAutosize from 'react-textarea-autosize';

const emptyQuestionTemplate = {
  question: '',
  correctAnswer: '',
  incorrectAnswer1: '',
  incorrectAnswer2: '',
  incorrectAnswer3: ''
}

export default function CreateQuizPage({ appState, setAppState }) {
  const { method, name } = useParams(); //Get method and quiz name in the url
  //Retrieve quiz if method is edit
  const retrievedQuiz = method === 'edit' ? retrieveQuiz(name) : null;
  const [quizName, setQuizName] = useState(retrievedQuiz ? retrievedQuiz.name : '');
  const [questions, setQuestions] = useState(retrievedQuiz ? retrievedQuiz.questions : [])
  const [index, setIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[index] ? questions[index] : emptyQuestionTemplate);
  const [questionIsComplete, toggleQuestionIsFilled] = useState(false)
  const navigate = useNavigate();

  //Update currentQuestion state on index change
  useEffect(() => {
    if (!questions[index]) setQuestions([...questions, emptyQuestionTemplate])
    else setCurrentQuestion(questions[index])
  }, [index, questions])

  //Check if the current question is fullfilled
  useEffect(() => {
    let isEmpty = Object.keys(currentQuestion).some(key => {
      return currentQuestion[key] === "";
    });
    toggleQuestionIsFilled(isEmpty ? false : true)
  }, [index, currentQuestion])

  //Save question
  useEffect(() => {
    let copyQuestions = [...questions];
    copyQuestions[index] = currentQuestion
    setQuestions(copyQuestions)
  }, [currentQuestion])

  return (
    <form className="create-quiz-form" onSubmit={(e) => saveQuiz(e)}>

      <input
        className="create-quiz-form__quizName"
        id='quizName'
        type='text'
        placeholder='Quiz Name...'
        minLength={3}
        maxLength={25}
        value={quizName}
        onChange={(e) => setQuizName(e.target.value)}
      ></input>

      <article className='card'>
        <div className='card__header'>
          <span className='card__header__index'>{index + 1}</span>
          <TextareaAutosize className='card__header__question' id='question' placeholder='Your question...' maxLength={300} value={currentQuestion.question} onChange={(e) => handleInputChange(e)} />
        </div>
        <div className='card__answers'>
          <input id='correctAnswer' placeholder='Correct answer...' name='correctAnswer' maxLength={200} value={currentQuestion.correctAnswer} onChange={(e) => handleInputChange(e)} />
          <input id='incorrectAnswer1' placeholder='Incorrect answer 1...' maxLength={200} value={currentQuestion.incorrectAnswer1} onChange={(e) => handleInputChange(e)} />
          <input id='incorrectAnswer2' placeholder='Incorrect answer 2...' maxLength={200} value={currentQuestion.incorrectAnswer2} onChange={(e) => handleInputChange(e)} />
          <input id='incorrectAnswer3' placeholder='Incorrect answer 3...' maxLength={200} value={currentQuestion.incorrectAnswer3} onChange={(e) => handleInputChange(e)} />
        </div>
      </article>

      <div className='create-quiz-form__controls'>
        {questions.map((question, i) =>
          <button
            type='button'
            onClick={() => handleNavigation(i)}
            className={index === i ? 'active' : ''}
            disabled={(!questionIsComplete && i !== index) ? true : false}
          >
            {i + 1}
          </button>
        )}
      </div>

      <div>
        <button className='create-quiz-form__add-button' type='button' onClick={handleAddQuestion} disabled={questionIsComplete ? false : true}>Add a question</button>
        <button className='create-quiz-form__submit-button' type='submit' disabled={questionIsComplete ? false : true} >{method === 'edit' ? 'Save ' : 'Create '}Quiz !</button>
      </div>
    </form>
  )

  //Retrieve the quiz to edit and format it to match form handling method
  function retrieveQuiz(name) {
    let data = appState.customQuizzes.find(quiz => quiz.name === name);
    if (!data) return;
    return {
      id: data.id,
      name: data.name,
      questions: data.questions.map(question => {
        //remove correctanswer from array of answers
        for (let i = 0; i < question.answers.length; i++) {
          if (question.answers[i] === question.correctAnswer) {
            question.answers.splice(i, 1);
          }
        }
        return {
          question: question.question,
          correctAnswer: question.correctAnswer,
          incorrectAnswer1: question.answers[0],
          incorrectAnswer2: question.answers[1],
          incorrectAnswer3: question.answers[2]
        }
      })
    }
  }

  /**
   * Handles navigation between questions
   * @param {Number} questionIndex 
   * @returns {void} Update the state
   */
  function handleNavigation(questionIndex) {
    if (questionIndex === index) return;
    if (!questionIsComplete) return alert(`You must complete the current question`)
    setIndex(questionIndex)
  }

  /**
   * Handles add question
   * @returns {void} Update the state
   */
  function handleAddQuestion() {
    if (!questionIsComplete) return alert(`You must complete the current question`)
    setIndex(questions.length)
  }

  /**
   * Update the state for currentQuestion on input change
   * @param {*} e 
   */
  function handleInputChange(e) {
    const { id, value } = e.target;
    setCurrentQuestion((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  /**
   * Format the quiz and shuffle the answers
   * @return {Object} Quiz ready to use
   */
  function setupQuiz() {
    const formatQuestions = questions.map(obj => {
      return {
        question: obj.question,
        correctAnswer: obj.correctAnswer,
        answers: shuffle([
          obj.correctAnswer,
          obj.incorrectAnswer1,
          obj.incorrectAnswer2,
          obj.incorrectAnswer3
        ])
      }
    })
    return {
      name: quizName,
      questions: formatQuestions
    }
  }

  /**
   * Handles quiz creation
   * @returns 
   */
  function saveQuiz(e) {
    e.preventDefault();
    if (!questionIsComplete) return alert('You must complete the current question to save your quiz');
    if (!quizName) return alert('You must name your quiz');
    let nameIsValid = checkNameAvailability(quizName);
    if (!nameIsValid) return alert('A quiz with this name already exist, please choose a unique name');

    const newQuiz = setupQuiz()

    if (method === 'create') setAppState({ ...appState, customQuizzes: [...appState.customQuizzes, newQuiz] });
    else {
      let quizIndex = appState.customQuizzes.findIndex((obj) => obj.name === retrievedQuiz.name)
      let copy = [...appState.customQuizzes]
      copy[quizIndex] = setupQuiz()
      setAppState({ ...appState, customQuizzes: copy });
    }

    alert(method === 'edit' ? 'Quiz Edited succesfully !' : 'Quiz Created !');
    navigate('/')
  }

  /**
   * Check if the name is available
   * @return {boolean}
   */
  function checkNameAvailability(name) {
    let alreadyExist = appState.customQuizzes.find(obj => {
      return obj.name === name
    })
    return alreadyExist ? false : true;
  }
}