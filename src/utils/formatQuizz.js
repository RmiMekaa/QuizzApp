import shuffle from "./shuffle";

/**
 * Format the quizz provided by API
 * @param   {array} quizz  The quizz from the API
 * @returns {array} Formated quizz
 */
export default function formatQuizz(quizz) {

  for (let i = 0; i < quizz.length; i++) {
    quizz[i].answers = [...quizz[i].incorrect_answers, quizz[i].correct_answer] //Store all answers options in a single property
    const { incorrect_answers, ...question } = quizz[i]; //Remove property 'incorrect_answers'
    question.question = unescapeHtml(question.question);
    if (quizz[i].type === 'boolean') question.answers = ['True', 'False'] //Always display 'True | False' in that order
    else {
      question.answers.map(answer => answer = unescapeHtml(answer))
      shuffle(question.answers) //Shuffle answers array
    }
    quizz[i] = question;
  }

  return quizz;
}

/**
 * Unescape HTML characters from string
 * @param {string} string the string to clean
 * @return {string} The string with escaped HTML characters replaced
 */
function unescapeHtml(string) {
  return string
    // @ts-ignore false positive
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#039;', "'")
    .replaceAll("&laquo;", "«")
    .replaceAll("&raquo;", "«")
}
