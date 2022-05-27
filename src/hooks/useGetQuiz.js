import { useEffect, useState } from 'react'
import axios from 'axios'
import formatQuiz from '../utils/formatQuiz'

/**
 * Custom Hook to fetch a quiz from The Trivia API
 * @param   {String}  category    The required category
 * @param   {String}  difficulty  The required difficulty
 * @param   {Number}  quantity    The required number of questions
 * @return  {Object}  The state for loading, quiz and error
 */
export default function useGetQuiz(category, difficulty, quantity) {
  const [quiz, setQuiz] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const baseUrl = "https://the-trivia-api.com/api/questions?";

  useEffect(() => {
    setLoading(true)
    const url = () => {
      let difficultyParam = '';
      let categoryParam = '';
      let quantityParam = '&limit=' + quantity;
      if (category !== 'Any') categoryParam = "&categories=" + category.toLowerCase().replaceAll('&', 'and').replaceAll(' ', '_')
      if (difficulty !== 'Any') difficultyParam = "&difficulty=" + difficulty.toLowerCase();
      return baseUrl + categoryParam + quantityParam + difficultyParam
    }

    axios
      .get(url())
      .then(response => {
        console.log(response.data);
        let quiz = formatQuiz(response.data) //Format quiz
        setQuiz(quiz)
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [category, difficulty, quantity])

  return { loading, quiz, error }
}

