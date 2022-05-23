import { useEffect, useState } from 'react'
import axios from 'axios'
import formatQuizz from '../utils/formatQuizz'

/**
 * Custom Hook to fetch a quizz from The Trivia API
 * @param   {String}  category    The required category
 * @param   {String}  difficulty  The required difficulty
 * @param   {Number}  quantity    The required number of questions
 * @return  {Object}  The state for loading, quizz and error
 */
export default function useGetQuizz(category, difficulty, quantity) {
  const [quizz, setQuizz] = useState(null)
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
        let quizz = formatQuizz(response.data) //Format quizz
        setQuizz(quizz)
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [category, difficulty, quantity])

  return { loading, quizz, error }
}

