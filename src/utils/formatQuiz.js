import shuffle from "./shuffle";

/**
 * Format the quiz provided by API
 * @param   {array} quiz  The quiz from the API
 * @returns {array} Formated quiz
 */
export default function formatQuiz(quiz) {
  for (let i = 0; i < quiz.length; i++) {
    const question = {
      question: quiz[i].question,
      answers: shuffle([...quiz[i].incorrectAnswers, quiz[i].correctAnswer]),
      correctAnswer: quiz[i].correctAnswer
    }
    quiz[i] = question;
  }

  return quiz;
}