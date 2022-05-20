import shuffle from "./shuffle";

/**
 * Format the quizz provided by API
 * @param   {array} quizz  The quizz from the API
 * @returns {array} Formated quizz
 */
export default function formatQuizz(quizz) {
  for (let i = 0; i < quizz.length; i++) {
    if (quizz[i].type === 'boolean') quizz[i].answers = ['True', 'False'] //Always display 'True | False' in that order if question type is true/false
    else quizz[i].answers = shuffle([...quizz[i].incorrectAnswers, quizz[i].correctAnswer]) //Store all answers options in a single property and shuffle the array
    const { incorrectAnswers, ...question } = quizz[i]; //Remove property 'incorrect_answers'
    quizz[i] = question;
  }

  return quizz;
}