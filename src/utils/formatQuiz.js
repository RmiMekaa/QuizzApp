import shuffle from "./shuffle";

/**
 * Format the quiz provided by API
 * @param   {array} quiz  The quiz from the API
 * @returns {array} Formated quiz
 */
export default function formatQuiz(quiz) {
  for (let i = 0; i < quiz.length; i++) {
    if (quiz[i].type === 'boolean') quiz[i].answers = ['True', 'False'] //Always display 'True | False' in that order if question type is true/false
    else quiz[i].answers = shuffle([...quiz[i].incorrectAnswers, quiz[i].correctAnswer]) //Store all answers options in a single property and shuffle the array
    const { incorrectAnswers, ...question } = quiz[i]; //Remove property 'incorrect_answers'
    quiz[i] = question;
  }

  return quiz;
}