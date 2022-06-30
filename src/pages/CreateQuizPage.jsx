import React, { useState } from 'react'
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
  const [index, setIndex] = useState(0);
  const [quizName, setQuizName] = useState('');
  const emptyArray = [];
  const [questions, setQuestions] = useState(emptyArray)
  const [currentQuestion, setCurrentQuestion] = useState(questions[index] ? questions[index] : emptyQuestionTemplate)

  console.log('quiz : ', questions);
  console.log('current question : ', currentQuestion);

  useEffect(() => {
    if (!questions[index]) setQuestions([...questions, emptyQuestionTemplate])
    let copyQuestions = [...questions];
    copyQuestions[index] = currentQuestion;
    setQuestions(copyQuestions)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, currentQuestion])

  return (
    <form className="create-quiz-form" onSubmit={(e) => createQuiz(e)}>

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
          <TextareaAutosize className='card__header__question' id='question' placeholder='Your question...' maxLength={300} value={currentQuestion.question} onChange={(e) => handleChange(e)} />
        </div>
        <div className='card__answers'>
          <input id='correctAnswer' placeholder='Correct answer...' name='correctAnswer' maxLength={200} value={currentQuestion.correctAnswer} onChange={(e) => handleChange(e)} />
          <input id='incorrectAnswer1' placeholder='Incorrect answer 1...' maxLength={200} value={currentQuestion.incorrectAnswer1} onChange={(e) => handleChange(e)} />
          <input id='incorrectAnswer2' placeholder='Incorrect answer 2...' maxLength={200} value={currentQuestion.incorrectAnswer2} onChange={(e) => handleChange(e)} />
          <input id='incorrectAnswer3' placeholder='Incorrect answer 3...' maxLength={200} value={currentQuestion.incorrectAnswer3} onChange={(e) => handleChange(e)} />
        </div>
      </article>

      <div className='create-quiz-form__controls'>
        {questions.map((question, questionIndex) => <button
          type='button'
          onClick={() => {
            setCurrentQuestion(questions[questionIndex] ? questions[questionIndex] : emptyQuestionTemplate)
            setIndex(questionIndex)
          }}
          className={index === questionIndex ? 'active' : ''}
        >{questionIndex + 1}</button>)}
        <button type='button'
          onClick={handleAddQuestion}>+</button>
      </div>

      <button type='submit' className='create-quiz-form__submit-button'>Create Quiz !</button>
    </form>
  )

  function handleAddQuestion() {
    const fullfilled = checkInputsFilling(currentQuestion)
    if (fullfilled) {
      setCurrentQuestion(emptyQuestionTemplate)
      setIndex(questions.length)
    }
    else alert(`You must fill all the question ${index + 1} fields to be able to add a new question`)
  }

  function checkInputsFilling(obj) {
    let allInputsFilled = true;
    for (let key in obj) {
      if (obj[key] === "") allInputsFilled = false;
    }
    return allInputsFilled;
  }

  function handleChange(e) {
    const { id, value } = e.target;
    setCurrentQuestion((prevState) => ({
      ...prevState,
      [id]: value,
    }))
  }

  function createQuiz(e) {
    e.preventDefault();
    let isValid = checkInputsFilling(currentQuestion)
    if (isValid) {
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
      const newQuiz = {
        name: quizName,
        questions: formatQuestions
      }
      setAppState({ ...appState, customQuizzes: [...appState.customQuizzes, newQuiz] })
    }
    else alert(`You must fill all the question ${index + 1} fields to complete the quiz`)
  }
}